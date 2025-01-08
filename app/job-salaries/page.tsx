"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import HeroSection from '@/components/hero-section';
import Spinner from '@/components/spinner';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useToast } from "@/hooks/use-toast";

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

    useEffect(() => {
        // Fetch categories from the API route
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/adzuna/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
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
            const response = await axios.post('/api/adzuna/job-statistics', { category: selectedCategory, months });
            setResults(response.data);
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
                description="Job Salaries in South Africa."
            />
            {loadingCategories ? (
                <Spinner />
            ) : (
                <section className="pb-12">
                    <div className="container mx-auto max-w-4xl space-y-6">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <Select value={selectedCategory} onValueChange={(value) => {
                                setSelectedCategory(value);
                                const category = categories.find(category => category.tag === value);
                                setSelectedCategoryLabel(category ? category.label : '');
                            }}>
                                <SelectTrigger className="border rounded-md px-4 py-2 w-full md:w-auto">
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
                            <Select value={months.toString()} onValueChange={(value) => setMonths(Number(value))}>
                                <SelectTrigger className="border rounded-md px-4 py-2 w-full md:w-auto">
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
                        <div className="flex justify-center mt-4">
                            <Button onClick={handleSearch} className="rounded-md px-4 py-2">
                                Search
                            </Button>
                        </div>
                    </div>
                </section>
            )}

            {loadingResults && <Spinner />}

            {!loadingResults && Object.keys(results).length > 0 && (
                <section className="pb-12">
                    <div className="container mx-auto max-w-full md:max-w-4xl">
                        <h2 className="text-2xl font-bold mb-4">Average Industry Salary in the last {months} months</h2>
                        <Line data={chartData} height={60} width={'100%'} options={{
                            ...chartOptions,
                            //maintainAspectRatio: false,
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Month'
                                    }
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Average Salary (ZAR)'
                                    }
                                }
                            }
                        }}
                        />
                    </div>
                </section>
            )}
        </>
    );
};