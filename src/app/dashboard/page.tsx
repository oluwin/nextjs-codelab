'use client'

import { CardAnalyticsList, TestBarChart } from "@/features/dashboard";
import { Button } from "@/components/button";
import useCounterStore from "@/stores/counter-store";

export default function Dashboard() {
    const { count, increment } = useCounterStore();

    return (
        <div>
            <CardAnalyticsList />
            <h1 className="text-2xl font-bold py-3">Welcome to the Dashboard</h1>
            <p className="mt-4">This is your personalized dashboard layout.</p>
            <div style={{ width: '100%', height: '400px' }}> {/* Ensuring space for the chart */}
                <TestBarChart />
            </div>
            <div className="flex grid grid-cols-2">
                <div><Button className="mt-5" onClick={increment}>Increment</Button></div>
                <div><p className="text-3xl">Counter: {count}</p></div>
            </div>
        </div>
    )
}