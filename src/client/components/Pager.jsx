import React from 'react';

const Pager = ({
  page, pages, per_page, onChangePage, onChangePerPage
}) => (
  <div>
    <button type="button" disabled={page === 1} onClick={() => { onChangePage(page - 1); }}>prev</button>
    {page}
    {' '}
    /
    {pages}
    <button type="button" disabled={page === pages} onClick={() => { onChangePage(page + 1); }}>next</button>
  </div>
);

export default Pager;
