// app/dashboard-default/page.js
'use client'

import {CardAnalyticsList, TestBarChart} from "@/features/dashboard";
import {Button} from "@/components/button";
import useCounterStore from "@/stores/counter-store";
import {CardContent} from "@/components/ui/card";

export default function Dashboard() {
    const { count, increment } = useCounterStore();
    return (
        <div>
            <p></p>
            <CardAnalyticsList />
            {/* This content is passed as `children` to DashboardLayout */}
            <h1 className="text-2xl font-bold py-3">Welcome to the Dashboard</h1>
            <p className="mt-4">This is your personalized dashboard layout.</p>
            <CardContent>
                <TestBarChart/>
            </CardContent>
            <div className="flex grid grid-cols-2">
                <div><Button className="mt-5" onClick={increment}>Increment</Button></div>
                <div><p className="text-3xl">Counter: {count}</p></div>
            </div>
        </div>
    )
}