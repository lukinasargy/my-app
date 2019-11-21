import React from 'react';
const WithCLass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);
export default WithCLass;