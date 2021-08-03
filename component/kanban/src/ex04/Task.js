import React from 'react';
import PropTypes from 'prop-types';

export default function Task({name, done, checked}) {
    
    return(
        <li className="TaskList__Task">
            <input type="checkbox" checked={done} onChange={(e)=>checked(e)}/>
            {name}
            <a href="#" className="TaskList__Task--remove"></a>
        </li>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
}