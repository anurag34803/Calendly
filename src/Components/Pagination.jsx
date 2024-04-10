import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to handle page change
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  // Generate page numbers
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`${
            currentPage === i
              ? 'bg-blue-500 text-white rounded-full w-10 h-10 mx-1'
              : 'bg-gray-200 text-gray-700'
          } px-4 py-2 border border-gray-300`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 border border-gray-300"
      >
        Prev
      </button>
      {generatePageNumbers()}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 ml-2 bg-gray-200 text-gray-700 border border-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
