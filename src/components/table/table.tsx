import { flexRender, useReactTable } from '@tanstack/react-table'
import { getCoreRowModel } from '@tanstack/table-core'

// import { Card } from '@/components/card'
import { cn } from '@/lib/utils'
import { Card } from '../ui/card'

interface TableProps {
    data: any
    columns: any
    meta?: any
    selectedRows?: any[]
    setSelectedRows?: (selectedRows: string[]) => void
    showCheckboxes?: boolean
}

export function Table({
                          data,
                          columns,
                          showCheckboxes,
                          setSelectedRows = () => {},
                          selectedRows = [],
                      }: TableProps) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
    })

    const isChecked = (value: number) => {
        if (!Array.isArray(selectedRows)) return false
        return selectedRows.includes(value)
    }

    const toggleSelectRow = (rowId: number) => {
        if (setSelectedRows) {
            if (selectedRows.includes(rowId)) {
                setSelectedRows(selectedRows.filter((id) => id !== rowId))
            } else {
                setSelectedRows([...selectedRows, rowId])
            }
        }
    }

    const toggleSelectAllRows = () => {
        if (setSelectedRows) {
            if (selectedRows.length === data.length) {
                setSelectedRows([])
            } else {
                setSelectedRows(data.map((row: any) => row.id))
            }
        }
    }

    return (
        <>
            <Card className="mb-5 p-0">
                <div className="flex flex-col">
                    <div className=" overflow-x-auto">
                        <div className=" min-w-full inline-block align-middle">
                            <div className="overflow-auto">
                                <table className="min-w-full divide-y divide-[#E5E7EB] ">
                                    <thead>
                                    {table
                                        .getHeaderGroups()
                                        .map((headerGroup) => (
                                            <tr key={headerGroup.id} className='bg-[#ebf7fd]'>
                                                {showCheckboxes && (
                                                    <th className="px-6 relative py-3 text-left text-xs font-medium text-neutral-500 uppercase">
                                                        <input
                                                            type="checkbox"
                                                            className="appearance-none w-4 h-4 border border-gray-400 rounded-md checked:bg-green checked:border-transparent focus:outline-none focus:ring-0 focus:border-green hover:bg-transparent"
                                                            checked={
                                                                selectedRows.length ===
                                                                data.length
                                                            }
                                                            onChange={
                                                                toggleSelectAllRows
                                                            }
                                                        />
                                                    </th>
                                                )}
                                                {headerGroup.headers.map(
                                                    (header) => (
                                                        <th
                                                            key={header.id}
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-bold text-neutral-900 uppercase"
                                                        >
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column
                                                                        .columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody className="divide-y relative divide-[#F3F4F6] ">
                                    {table
                                        .getRowModel()
                                        .rows.map((row: any) => (
                                            <tr
                                                key={row.id}
                                                className={cn(
                                                    'hover:bg-neutral-100',
                                                    isChecked(row.original.id) &&
                                                    'bg-neutral-50'
                                                )}
                                            >
                                                {showCheckboxes && (
                                                    <td className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">
                                                        <input
                                                            type="checkbox"
                                                            className="appearance-none w-4 h-4 border border-gray-400 rounded-md checked:bg-green checked:border-transparent focus:outline-none focus:ring-0 focus:border-green hover:bg-transparent"
                                                            checked={isChecked(
                                                                row.original.id
                                                            )}
                                                            onChange={() => {
                                                                toggleSelectRow(
                                                                    row.original.id
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                )}
                                                {row
                                                    .getVisibleCells()
                                                    .map((cell: any) => (
                                                        <td
                                                            key={cell.id}
                                                            className="px-6 py-3 text-sm font-semibold text-neutral-800 whitespace-break-spaces"
                                                        >
                                                            {flexRender(
                                                                cell.column.columnDef
                                                                    .cell,
                                                                cell.getContext()
                                                            )}
                                                        </td>
                                                    ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}