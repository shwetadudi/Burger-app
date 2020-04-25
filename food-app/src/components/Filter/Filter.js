import React from "react";

const Filters = (props) => {
    const { filters, values, methods } = props;
    return <div className="filters col-md-3"> <h5>Refine Search</h5>{filters.map((filter) => {
        if (filter.values) {
            return <div className="filter"> <p><strong>{filter.name} : </strong></p><ul>
                {
                    filter.values.map((value) => <li><input onChange={(e) => methods[filter.name](value)} type="radio" name={filter.name} id={value} checked={values[filter.name] === value ? true : false} value={value}/><label htmlFor={value}> {value} </label></li>)
                }
            </ul></div>
        }
        return (<div><input onChange={(e) => methods[filter.name](e.target.value)} placeholder="Search" type="text" name={filter.name} value={values[filter.name]}/></div>);
    })}</div>
}

export default Filters;
