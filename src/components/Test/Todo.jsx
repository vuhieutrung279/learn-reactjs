import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
Todo.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    fontSize: PropTypes.string
};

function Todo({data, title = "green", fontSize}) {
    const [count, setCount] = useState(0);
    function clickBtn() {
        console.log("abc")
    }
    console.log("test nè");
    return (
        <div>
            <h2 data-asd={title} style={{color: title, fontSize: !title && "155px" }}>Bóng đá số</h2>
            <button onClick={() => setCount(count => count + 1)}>{count}</button>
            {
                data.map(item => (
                    <div key={item.name} className={classnames({job: title, 'font-size': fontSize}, "test")}>
                        <span>{item.name}</span>
                        
                    </div>
                    
                ))
            }
            {/* {
                title && (
                    <>
                        <h2 style={{fontSize}}>Test</h2>
                        <h3>Ok</h3>
                    </>
                )
            } */}
        </div>
    );
}

export default Todo;