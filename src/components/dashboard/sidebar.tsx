// components/Sidebar.js
'use client'

import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    CalculatorIcon
} from '@heroicons/react/24/outline'
import Link from "next/link";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    {name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true},
    {name: 'Region', href: '/dashboard/region', icon: UsersIcon, current: false},
    {name: 'Business Hub', href: '/dashboard/business-hub', icon: FolderIcon, current: false},
    {name: 'Service Center', href: '/dashboard/service-center', icon: CalendarIcon, current: false},
    {name: 'Feeder', href: '/dashboard/feeder', icon: DocumentDuplicateIcon, current: false},
    {name: 'Transformer', href: '/dashboard/transformer', icon: ChartPieIcon, current: false},
    {name: 'Meter', href: '/dashboard/meter', icon: CalculatorIcon, current: false},
]
const teams = [
    {id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false},
    {id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false},
    {id: 3, name: 'Workcation', href: '#', initial: 'W', current: false},
]

export default function Sidebar() {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-dark px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                />
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                        )}
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className={classNames(
                                                item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                'size-6 shrink-0',
                                            )}
                                        />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                                <li key={team.name}>
                                    <a
                                        href={team.href}
                                        className={classNames(
                                            team.current
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                        )}
                                    >
                    <span
                        className={classNames(
                            team.current
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                            'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                        )}
                    >
                      {team.initial}
                    </span>
                                        <span className="truncate">{team.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mt-auto">
                        <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            <Cog6ToothIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                            />
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}