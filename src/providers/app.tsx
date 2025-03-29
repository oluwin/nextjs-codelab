'use client'

import { Toaster } from 'react-hot-toast'
import { queryClient } from '@/lib/react-query'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
interface AppProviderProps {
    children: ReactNode
}


export function AppProvider({ children }: AppProviderProps) {
    console.log(queryClient);
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <>
                {/*<Toaster />*/}
                {children}
            </>
        </QueryClientProvider>
    )
}