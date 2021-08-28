import React, { useState } from 'react';
import PropTypes from 'prop-types';

AlbumForm.propTypes = {
    onSubmitForm: PropTypes.func,
};

function AlbumForm({onSubmitForm = null}) {
    function onClickSubmit(e) {
        e.preventDefault();
        const newObj = {
            title
        };
        onSubmitForm(newObj);
        setTitle('');
    }
    const [title, setTitle] = useState('');
    function handleChange(e) {
        setTitle(e.target.value);
    }
    return (
        <div>
            <form onSubmit={onClickSubmit}>
                <input type="text" value={title} onChange={handleChange} />
                <button>Add Song</button>
            </form>
        </div>
    );
}

export default AlbumForm;