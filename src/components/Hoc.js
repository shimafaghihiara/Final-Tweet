import React from 'react';

const Hoc = (props) => {
    return (
        <div>
            <h1>header</h1>
            {props.children}

        </div>
    );
};

export default Hoc;