import React from 'react';
import './Pagination.css';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <div className="invisible"></div>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;