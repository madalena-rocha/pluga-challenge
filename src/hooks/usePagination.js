import { useState } from "react";
export function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  function goToPreviousPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  function goToNextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }

  return {
    currentItems,
    totalPages,
    currentPage,
    setCurrentPage,
    goToPreviousPage,
    goToNextPage,
  };
}
