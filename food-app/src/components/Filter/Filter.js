import React from "react";

const Filters = (props) => {
    const { filters, values, methods } = props;
    return <div className="filters col-md-3">{filters.map((filter) => {
        if (filter.values) {
            return <div className="filter"> <strong>{filter.name} : </strong>
                {
                    filter.values.map((value) => <label htmlFor={value}>{value} <input onChange={(e) => methods[filter.name](value)} type="radio" name={filter.name} id={value} checked={values[filter.name] === value ? true : false} value={value}/></label>)
                }
            </div>
        }
        return (<div><input onChange={(e) => methods[filter.name](e.target.value)} placeholder="Search" type="text" name={filter.name} value={values[filter.name]}/>
        <p>Search string: {methods.searchFilter}
        Price Range: {methods.priceFilter}
        Preference: {methods.preferenceFilter}
        Availability: {methods.availabilityFilter}</p></div>);
    })}</div>
}

export default Filters;
