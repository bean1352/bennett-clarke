'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface JobPost {
    job_id: string;
    job_title: string;
    description: string;
    notice?: string | null;
    date: string;
    age: string;
    location: string;
    employment_type: string;
}

interface JobsData {
    posts: JobPost[];
}

export default function FindJobs() {
    const [jobsData, setJobsData] = useState<JobsData | null>(null);

    useEffect(() => {
        // Load the widget script
        const script = document.createElement('script');
        script.src = process.env.NEXT_PUBLIC_WIDGET_SCRIPT_URL!;
        script.defer = true;
        document.body.appendChild(script);

        // Fetch the jobs data
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_JOBS_FEED_URL}?nocache=${Date.now()}`);
                const data = await response.json();
                setJobsData(data);
                console.log('Jobs data:', data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const formatDate = (dateStr: string) => {
        try {
            const date = new Date(dateStr);
            return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date);
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="container mx-auto py-4">
            {/* Hero Section */}
            <section className="relative py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center max-w-3xl md:justify-start md:items-start md:text-start flex-col text-center">
                        <h1 className="text-5xl font-bold mb-6">Find Your Dream Role</h1>
                    </div>
                </div>
            </section>

            {jobsData?.posts && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
                    {jobsData.posts.map((post) => (
                        // <Link key={post.job_id} href={`/jobs/${post.job_id}`} passHref>
                            <Card key={post.job_id} className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">{post.job_title || 'Untitled Job'}</CardTitle>
                                    <CardDescription className="text-sm text-gray-500">
                                        • {post.location || 'Location Unknown'} {post.employment_type || ''}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-xs text-gray-400">
                                        Posted: {formatDate(post.date)}
                                    </p>
                                    {post.notice && <p className="text-xs text-red-500 mt-1">{post.notice}</p>}
                                </CardContent>
                            </Card>
                        // </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
