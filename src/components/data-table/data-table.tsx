'use client'
import React, {
    memo,
    useCallback,
    useEffect,
    useState,
} from 'react';

import {useGetData} from '@/api/get-data';
// import {Card} from '../ui/card';
// import { DataTableDeleteButton } from '@/components/data-table/data-table-delete-button';
import {EmptyState} from '@/components/empty-state';
// import { FilterSelect } from '@/components/filter-select';
import {Loading} from '@/components/loading';
import {Pagination} from '@/components/pagination';
import {Search} from '@/components/search';
import {Table} from '@/components/table';

// import { AppStatus } from '@/interface/app-status.interface';

interface DataTableProps {
    url: string;
    columns: any[];
    showFilter?: boolean;
    status?: string;
    additionalQueryParams?: Record<string, string | number | undefined>;
    renderFilter?: (
        handleFilterValue: any,
        filterValue: any
    ) => React.ReactNode | null;
    renderButtons?: (
        selectedRows: any[]
    ) => React.ReactNode | null;
    showCheckboxes?: boolean;
    showSearch?: boolean;
    handleSelectedRows?: (selectedRows: any[]) => void;
    initialSelectedRows?: any[];
    showDeleteButton?: boolean;
    permission?: boolean;
}

const DataTableMemo = ({
                           url,
                           columns,
                           // showFilter = true,
                           status = '',
                           additionalQueryParams = {},
                           renderFilter = () => null,
                           showCheckboxes = false,
                           renderButtons,
                           handleSelectedRows,
                           initialSelectedRows = [],
                           // showDeleteButton = true,
                           showSearch = true,
                       }: DataTableProps) => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [searchQuery, setSearchQuery] =
        useState<string>('');
    const [filterKey, setFilterKey] = useState('status');
    const [filterValue, setFilterValue] = useState(status);
    const [selectedRows, setSelectedRows] = useState<any[]>(
        initialSelectedRows
    );
// console.log(url)
    const {
        data: items,
        refetch,
        isLoading,
    } = useGetData({
        url,
        size,
        page,
        search: searchQuery,
        additionalQueryParams: filterValue
            ? {
                ...additionalQueryParams,
                [filterKey]: filterValue,
            }
            : additionalQueryParams,
    });

    const handlePageChange = useCallback(
        (newPage: number) => {
            setPage(newPage);
        },
        []
    );

    const handleLimitChange = useCallback(
        (newLimit: number) => {
            if (newLimit !== size) {
                setSize(newLimit);
                setPage(1);
            }
        },
        [size]
    );

    const handleSearchChange = useCallback(
        (newValue: string) => {
            if (newValue !== searchQuery) {
                setSearchQuery(newValue);
                setPage(1);
            }
        },
        [searchQuery]
    );

    const handleFilterChange = useCallback(
        (newValue: string, filterKey = 'status') => {
            if (newValue !== filterValue) {
                setFilterKey(filterKey);
                setFilterValue(newValue);
                setPage(1);
            }
        },
        [filterValue]
    );

    useEffect(() => {
        refetch();
    }, [
        page,
        size,
        searchQuery,
        filterValue,
        filterKey,
        refetch,
    ]);

    // const filterOptions = [
    //   { label: 'All Applications', value: '' },
    //   {
    //     label: 'Rejected',
    //     value: AppStatus.DRAFT,
    //   },
    //   {
    //     label: 'Approved',
    //     value: AppStatus.PUBLISH,
    //   },
    //   {
    //     label: 'In review',
    //     value: AppStatus.REVIEWING,
    //   },
    // ];

    return (
        <>
            <div className="md:flex space-y-2 md:space-y-0 items-center justify-between mb-5">
                <div className="flex justify-center items-center space-x-4">
                    {/* {showFilter && (
            <FilterSelect
              value={filterValue}
              options={filterOptions}
              onChange={handleFilterChange}
            />
          )} */}
                    {renderFilter(handleFilterChange, filterValue)}
                    {showSearch && (
                        <Search
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    )}
                </div>
                <div className="flex space-x-4">
                    {showCheckboxes && (
                        <div className="flex items-center space-x-2">
              <span className="text-gray-500">
                {selectedRows.length} row
                  {selectedRows.length > 1 ? 's' : ''}{' '}
                  selected
              </span>
                        </div>
                    )}
                    {/* {selectedRows.length > 0 &&
            showDeleteButton && (
              <DataTableDeleteButton
                url={url}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
            )} */}
                    {renderButtons && renderButtons(selectedRows)}
                </div>
            </div>
            <div className="p-0">
                {isLoading ? (
                    <div className="relative p-16">
                        <Loading active={true} isFullPage={false}/>
                    </div>
                ) : (
                    <>
                        {items?.data?.length ? (
                            <Table
                                data={items?.data}
                                columns={columns}
                                meta={items?.meta}
                                selectedRows={selectedRows}
                                setSelectedRows={(selectedRows) => {
                                    setSelectedRows(selectedRows);
                                    if (handleSelectedRows) {
                                        handleSelectedRows(selectedRows);
                                    }
                                }}
                                showCheckboxes={showCheckboxes}
                            />
                        ) : (
                            <EmptyState className="p-16 bg-gray-100"/>
                        )}
                    </>
                )}
            </div>
            {!isLoading &&
            items?.totalElements &&
            items.data.length > 0 ? (
                <Pagination
                    totalElements={items.totalElements}
                    size={size}
                    page={page}
                    totalPages={items.totalPages}
                    onPageChange={handlePageChange}
                    onLimitChange={handleLimitChange}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export const DataTable = memo(DataTableMemo);