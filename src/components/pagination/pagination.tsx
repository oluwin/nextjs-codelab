import { useCallback, useEffect, useState } from 'react';
// import {
//   ChevronDoubleLeftIcon,
//   ChevronDoubleRightIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from '@heroicons/react/24/outline';
import {ChevronsLeftIcon, ChevronLeftIcon, ChevronsRightIcon, ChevronRightIcon} from "lucide-react";

interface PaginationProps {
  totalElements: number;
  size: number;
  page: number;
  onPageChange: (page: number) => void;
  onLimitChange: (size: number) => void;
  totalPages: number
}

export function Pagination({
                             totalElements,
  size,
  page,
  onPageChange,
  onLimitChange,
    totalPages,
}: PaginationProps) {
  // const totalPages = Math.max(
  //   Math.ceil(totalElements / size),
  //   1
  // );
  const [visiblePages, setVisiblePages] = useState<
    number[]
  >([1]);

  const updateVisiblePages = useCallback(
    (currentPage: number) => {
      const maxVisiblePages = Math.min(totalPages, 3);
      let startPage = Math.max(
        Math.min(
          currentPage - 2,
          totalPages - maxVisiblePages + 1
        ),
        1
      );

      const pages = [];
      for (let i = 0; i < maxVisiblePages; i++) {
        pages.push(startPage);
        startPage++;
      }
      setVisiblePages(pages);
    },
    [totalPages]
  );

  useEffect(() => {
    updateVisiblePages(page);
  }, [page, size, totalElements, updateVisiblePages]);

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;
    handleEllipsisClick(newPage);
    onPageChange(newPage);
  };

  const handleLimitChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLimit = parseInt(event.target.value);
    onLimitChange(newLimit);
    handlePageChange(1); // Reset to the first page when the limit changes
  };

  const handlePrevClick = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  const handleFirstClick = () => {
    if (page > 1) {
      handlePageChange(1);
    }
  };

  const handleLastClick = () => {
    if (page < totalPages) {
      handlePageChange(totalPages);
    }
  };

  const handleEllipsisClick = (newPage: number) => {
    const lastVisiblePage =
      visiblePages[visiblePages.length - 1];
    if (
      newPage > lastVisiblePage ||
      newPage < visiblePages[0]
    ) {
      updateVisiblePages(newPage);
    }
  };

  return (
    <div className="mt-5 mb-10 flex items-center justify-between">
      <div className={'flex items-center'}>
        <select
            className="rounded-md border-0 bg-white py-1 text-gray-600 outline-none ring-1 ring-gray-700/10 focus:outline-none"
            value={size}
            onChange={handleLimitChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={70}>70</option>
          <option value={100}>100</option>
        </select>
        <p className={'ml-2 text-gray-500 text-sm'}>
          Records per page
        </p>
      </div>
      <div className="hidden md:block">
        <span className="mr-2 text-center text-gray-500 text-sm">
          Showing{' '}
          {Math.min(size * (page - 1) + 1, totalElements)} -{' '}
          {Math.min(size * page, totalElements)} of{' '}
          {totalElements}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className={`rounded-md px-2 py-1 ${
            page === 1
              ? 'cursor-not-allowed bg-gray-200'
              : 'bg-white ring-1 ring-gray-700/10 hover:bg-gray-200'
          }`}
          onClick={handleFirstClick}
          disabled={page === 1}
        >
          {/*<ChevronDoubleLeftIcon />*/}
          <ChevronsLeftIcon size={24} />
        </button>
        <button
          className={`rounded-md px-2 py-1 ${
            page === 1
              ? 'cursor-not-allowed bg-gray-200'
              : 'bg-white ring-1 ring-gray-700/10 hover:bg-gray-200'
          }`}
          onClick={handlePrevClick}
          disabled={page === 1}
        >
          <ChevronLeftIcon />
        </button>
        {visiblePages[0] > 1 && (
          <button
            className="rounded-md px-2 py-1 "
            onClick={() => handleEllipsisClick(page - 1)}
          >
            ...
          </button>
        )}
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`rounded-md px-2 py-0 ${
              pageNumber === page
                ? 'bg-[#044479] text-white'
                : 'bg-white px-2 py-1 text-gray-600 outline-none ring-1 ring-gray-700/10 focus:outline-none hover:bg-gray-200'
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        {visiblePages[visiblePages.length - 1] <
          totalPages && (
          <button
            className="rounded-md px-2 py-1 "
            onClick={() => handleEllipsisClick(page + 1)}
          >
            ...
          </button>
        )}
        <button
          className={`rounded-md px-2 py-1 ${
            page === totalPages
              ? 'cursor-not-allowed bg-gray-200'
              : 'bg-white ring-1 ring-gray-700/10 hover:bg-gray-200'
          }`}
          onClick={handleNextClick}
          disabled={page === totalPages}
        >
          <ChevronRightIcon />
        </button>
        <button
          className={`rounded-md px-2 py-1 ${
            page === totalPages
              ? 'cursor-not-allowed bg-gray-200'
              : 'bg-white ring-1 ring-gray-700/10 hover:bg-gray-200'
          }`}
          onClick={handleLastClick}
          disabled={page === totalPages}
        >
          <ChevronsRightIcon />
        </button>
      </div>
    </div>
  );
}
