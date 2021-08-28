import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import './style.scss';
import queryString from 'query-string';
import PostFilterForm from './PostFilterForm';
PostList.propTypes = {
    
};

function PostList(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    })
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 10,
        title_like: "",
    })
    function handlePagination(newPage) {
        setFilter({
            ...filter,
            _page: newPage,
        })
    }
    useEffect(() => {
        async function callData() {
            try {
                const paramString = queryString.stringify(filter);
                const fetchData = await fetch(`http://js-post-api.herokuapp.com/api/posts?${paramString}`);
                const responseData = await fetchData.json();
                const {data, pagination} = responseData;
                setPostList(data);
                setPagination(pagination);
                console.log(responseData);
            } catch (error) {
                console.log(error);
            }
        };
        callData();
    }, [filter])

    function handleFilterChange(newFilter) {
        setFilter({
            ...filter,
            page: 1,
            title_like: newFilter.searchTeam
        })
    }
    return (
        <div className="post">
            <PostFilterForm onSubmit={handleFilterChange} />
            {
                postList.map(post => (
                    <div key={post.id}>
                        <img src={post.imageUrl} alt={post.title} />
                        <h3>{post.title}</h3>
                    </div>
                ))
            }
            <Pagination pagination={pagination} onPageChange={handlePagination} />
        </div>
    );
}

export default PostList;