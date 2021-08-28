import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

function Pagination({pagination, onPageChange = null}) {
    const {_limit, _page, _totalRows} = pagination;
    function handleOnPageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button onClick={() => handleOnPageChange(_page - 1)} disabled={_page <= 1}>Prev</button>
            <button onClick={() => handleOnPageChange(_page + 1)} disabled={_page >= Math.ceil(_totalRows / _limit)}>Next</button>
        </div>
    );
}

export default Pagination;