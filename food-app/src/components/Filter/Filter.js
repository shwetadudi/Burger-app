import React from "react";

const Filters = (props) => {
    const { filters, values, methods } = props;
    return <div className="filters">{filters.map((filter) => {
        if (filter.values) {
            return <div className="filter">
                {
                    filter.values.map((value) =><label htmlFor={value}>{value} <input onChange={(e) => methods[filter.name](value)} type="radio" name={filter.name} id={value} checked={values[filter.name] === value ? true : false} value={value}/></label>)
                }
            </div>
        }
        return <input onChange={(e) => methods[filter.name](e.target.value)} placeholder="Search" type="text" name={filter.name} value={values[filter.name]}/>
    })}</div>
}

export default Filters;
