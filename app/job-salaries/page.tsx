"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import HeroSection from '@/components/hero-section';
import Spinner from '@/components/spinner';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from '@/components/spinner';
import { getAdzunaCategoriesAction, getAdzunaJobStatisticsAction } from '../api/adzuna/actions';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Category {
    label: string;
    tag: string;
}

export default function AverageJobSalaries() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCategoryLabel, setSelectedCategoryLabel] = useState('');
    const [months, setMonths] = useState(0);
    const [results, setResults] = useState<{ [key: string]: number }>({});
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingResults, setLoadingResults] = useState(false);
    const { toast } = useToast()

    // useEffect(() => {
    //     // Fetch categories from the API route
    //     const fetchCategories = async () => {
    //         try {
    //             const response = await getAdzunaCategoriesAction();
    //             const data = await response.json();

    //             if(response.status === 200){
    //                 setCategories(data);
    //             }
    //             else{
    //                 toast({
    //                     description: "Failed to fetch categories",
    //                     variant: "destructive"
    //                 });
    //             }
    //         } catch (error) {
    //             console.error('Error fetching categories:', error);
    //             toast({
    //                 description: "Failed to fetch categories",
    //                 variant: "destructive"
    //             });
    //         } finally {
    //             setLoadingCategories(false);
    //         }
    //     };

    //     fetchCategories();
    // });



    useEffect(() => {
        // Fetch categories from the API route
        const fetchCategories = async () => {
            try {
                const response = await getAdzunaCategoriesAction();

                if(response.success){
                    const data = await response.data;
                    console.log(data);
                    setCategories(data);
                }
                else{
                    toast({
                        description: response.message,
                        variant: "destructive"
                    });
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                toast({
                    description: "Failed to fetch categories",
                    variant: "destructive"
                })
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);
    

    const handleSearch = async () => {
        if (!selectedCategory || !months) {
            toast({
                description: "Please select a category and enter the number of months.",
                variant: "destructive"
            })
            return;
        }

        setLoadingResults(true);
        try {
            const response = await getAdzunaJobStatisticsAction(selectedCategory, months);
            
            console.log(response);
            if(response.success){
                const data = await response.data;
                console.log(data);
                setResults(data);
            }
            else{
                toast({
                    description: response.message,
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error('Error fetching job statistics:', error);
        } finally {
            setLoadingResults(false);
        }
    };

    const sortedKeys = Object.keys(results).sort();
    const sortedValues = sortedKeys.map(key => results[key]);

    const chartData = {
        labels: sortedKeys,
        datasets: [
            {
                label: 'Average Salary',
                data: sortedValues,
                borderColor: 'rgba(255, 205, 86, 1)', // Yellow color
                backgroundColor: 'rgba(255, 205, 86, 0.2)', // Yellow color with transparency
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const, // Explicitly set the position to a valid value
            },
            title: {
                display: true,
                text: 'Average Salary Over Time',
            },
        },
    };

    return (
        <>
            <HeroSection
                title="Connecting Talent with Opportunity"
                description="Job Salaries in South Africa"
            />

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-8">
                {loadingCategories ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Search Controls */}
                        <div className="rounded-lg shadow-md p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Category</label>
                                    <Select
                                        value={selectedCategory}
                                        onValueChange={(value) => {
                                            setSelectedCategory(value);
                                            const category = categories.find(category => category.tag === value);
                                            setSelectedCategoryLabel(category ? category.label : '');
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            {selectedCategory ? selectedCategoryLabel : 'Select Category'}
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category.tag} value={category.tag}>
                                                    {category.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Time Period</label>
                                    <Select
                                        value={months.toString()}
                                        onValueChange={(value) => setMonths(Number(value))}
                                    >
                                        <SelectTrigger className="w-full">
                                            {months ? `${months} ${months === 1 ? 'month' : 'months'}` : 'Select Months'}
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 24 }, (_, i) => i + 1).map((month) => (
                                                <SelectItem key={month} value={month.toString()}>
                                                    {month} {month === 1 ? 'month' : 'months'}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <Button
                                    onClick={handleSearch}
                                    className="w-full md:w-auto px-8 py-2"
                                >
                                    Search
                                </Button>
                            </div>
                        </div>

                        {/* Results Section */}
                        {loadingResults ? (
                            <div className="flex justify-center items-center min-h-[300px]">
                                <Spinner />
                            </div>
                        ) : Object.keys(results).length > 0 ? (
                            <div className="rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-muted-foreground mb-6">
                                    Average Industry Salary in the last {months} months
                                </h2>
                                <div className="w-full h-[400px]">
                                    <Line
                                        data={chartData}
                                        options={{
                                            ...chartOptions,
                                            maintainAspectRatio: false,
                                            scales: {
                                                x: {
                                                    title: {
                                                        display: true,
                                                        text: 'Month',
                                                        font: {
                                                            weight: 'bold'
                                                        }
                                                    }
                                                },
                                                y: {
                                                    title: {
                                                        display: true,
                                                        text: 'Average Salary (ZAR)',
                                                        font: {
                                                            weight: 'bold'
                                                        }
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </>
    );
};