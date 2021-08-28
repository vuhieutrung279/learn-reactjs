import React, { useEffect, useState } from 'react';
import AlbumList from '../../components/AlbumList';
import AlbumForm from '../../components/AlbumForm';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
ListAlbum.propTypes = {
    
};

function ListAlbum(props) {
    const [album, setAlbum] = useState([
        {
            id: 1,
            title: "You are my sunshine",
            imgUrl: "https://media.istockphoto.com/vectors/you-are-my-sunshine-hand-lettering-motivational-quote-vector-id1094697366",
            isListen: "false"
        },
        {
            id: 2,
            title: "You can't help falling in love",
            imgUrl: "https://s.mxmcdn.net/images-storage/albums4/5/7/2/0/3/0/41030275_800_800.jpg",
            isListen: "true"
        },
        {
            id: 3,
            title: "My love",
            imgUrl: "https://png.pngtree.com/png-clipart/20200225/original/pngtree-my-love-text-with-hearts-png-image_5304760.jpg",
            isListen: "false"
        },
    ])
    const getParams = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [filterList, setFilterList] = useState(() => {
        const queryStr = queryString.parse(getParams.search);
        return queryStr.status || "all"
    });

    const alBumFilter = album.filter(item => {
        return filterList === "all" || item.isListen === filterList
    })
    useEffect(() => {
        const queryStr = queryString.parse(getParams.search);
        setFilterList(queryStr.status || "all")
    }, [getParams.search])
    function handleItem(index) {
        const newAlbum = [...album];
        newAlbum[index] = {
            ...newAlbum[index],
            isListen: newAlbum[index].isListen === "true" ? "false" : "true"
        }
        setAlbum(newAlbum);
    }
    function filterAll() {
        const queryParams = { status: "all"};
        history.push({
            pathname: match.patch,
            search: queryString.stringify(queryParams)
        })
    }
    function filterNotListen() {
        const queryParams = { status: "false"};
        history.push({
            pathname: match.patch,
            search: queryString.stringify(queryParams)
        })
    }
    function filterLisneted() {
        const queryParams = { status: "true"};
        history.push({
            pathname: match.patch,
            search: queryString.stringify(queryParams)
        })
    }
    function handleDelete(index) {
        const newAlbum = [...album];
        newAlbum.splice(index, 1);
        setAlbum(newAlbum);
    }
    function onSubmit(obj) {
        const newAlbum = [...album];
        const newObj = {
            id: Math.floor(Math.random() * 1000000),
            imgUrl: "https://png.pngtree.com/png-clipart/20200225/original/pngtree-my-love-text-with-hearts-png-image_5304760.jpg",
            isListen: "false",
            ...obj
        }
        newAlbum.push(newObj);
        setAlbum(newAlbum);
        
    }

    const handleTodoForm = (values) => {
        const newAlbum = [...album];
        const newObj = {
            id: Math.floor(Math.random() * 1000000),
            imgUrl: "https://png.pngtree.com/png-clipart/20200225/original/pngtree-my-love-text-with-hearts-png-image_5304760.jpg",
            isListen: "false",
            ...values
        }
        const newAlbumList = [...newAlbum, newObj];
        setAlbum(newAlbumList);
    }
    return (
        <div>
            <h2>What to do?</h2>
            <TodoForm onSubmit={handleTodoForm} />
            
            <AlbumList albumList={alBumFilter} onClickItem={handleItem} deleteItem={handleDelete} />
            <button onClick={() => filterAll()}>All</button>
            <button onClick={() => filterNotListen()}>Not Listen</button>
            <button onClick={() => filterLisneted()}>Listened</button>
            <AlbumForm onSubmitForm={onSubmit} />
        </div>
    );
}

export default ListAlbum;