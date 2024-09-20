import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './styles';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <PaginationContainer>
      <ReactPaginate
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage - 1}
      />
    </PaginationContainer>
  );
};

export default Pagination;
