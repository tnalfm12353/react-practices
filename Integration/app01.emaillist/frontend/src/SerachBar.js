import React from 'react';
import PropTypes from 'prop-types';

export default function SerachBar({keyword, handleChange}) {

    return(
        <div className={"Serachbar"}>
            찾기: <input type="text" placeholder="serach" value={keyword} onChange={ handleChange }/>
        </div>
    );
}

SerachBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}