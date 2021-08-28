import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classnames from 'classnames';
AlbumList.propTypes = {
    albumList: PropTypes.array,
    onClickItem: PropTypes.func,
    deleteItem: PropTypes.func,

};

function AlbumList({albumList = [], onClickItem, deleteItem}) {
    function clickItem(index) {
        onClickItem(index)
    }
    function onDeleteItem(index) {
        deleteItem(index)
    }
    return (
        <div className="list-album">
            {
                albumList.map((album, index) => (
                    <div className={classnames('album-item', {listened: album.isListen === "true"})} key={album.id}>
                        <img src={album.imgUrl} alt={`${album.title} ${index}`} onClick={() => clickItem(index)} />
                        <h3>{album.title}</h3>
                        <button onClick={() => onDeleteItem(index)}>Click</button>
                    </div>
                ))
            }
        </div>
    );
}

export default AlbumList;