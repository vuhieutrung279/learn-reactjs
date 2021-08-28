import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func
};

function PostFilterForm({onSubmit = null}) {
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);
    function handleSearchTermChange(e) {
        const value = e.target.value
        setSearchTerm(value);
        
        if (!onSubmit) return;
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTeam: value
            }
            onSubmit(formValues);
        }, 300);
        
    }
    return (
        <div>
            <form>
                <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
            </form>
        </div>
    );
}

export default PostFilterForm;