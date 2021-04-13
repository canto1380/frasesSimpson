import React, { Fragment } from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
        <Fragment>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </Fragment>
    );
};

export default Spinner;