import React from 'react';
import { Link } from 'react-router-dom';

const PageNoSelector = ({text, active}) => {
    return (
        <Link className={`page-no-selector${active ? ' active' : ''}`}>{text}</Link>
    )
}
export default PageNoSelector;