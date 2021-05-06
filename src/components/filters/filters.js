import React, { useState } from 'react';
import './filters.css'
import icon from '../../assets/icons/check_mark.png'

const Filters = (props) => {

    const [checked, setChecked] = useState(1);

    return (
        <div className="filters">
            <span className="filter-label">Filtra per</span>
            {props.filters.map(filter => (
                <span
                    onClick={() => { setChecked(filter.id); props.onCheck(filter.id) }
                    }
                    className={(filter.type === 'people' ? 'people-btn' : 'species-btn') + " filter-btn " + (checked === filter.id ? 'checked' : '')} key={filter.id}>
                    {checked === filter.id &&
                        <img className="check-icon" alt='Selected' src={icon}></img>
                    }
                    &nbsp;{filter.label}
                </span>
            ))}
        </div>
    )
}

export default Filters