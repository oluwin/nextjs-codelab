import React from 'react'
import DashboardSidebar from "@/components/dashboard-default/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardSidebar />
            <div className="lg:pl-72">
                {children}
            </div>
        </>
    )
}