import React, { useState } from 'react'
import PropTypes from 'prop-types'
const AddCategory = ({ setCategories, Categories = [] }) => {
    const [inputValue, setinputValue] = useState('Type anything!');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            setCategories([inputValue, ...Categories]);
            setinputValue('');
        }
        else {
            alert("Escriba algo");
        }
    }

    const handleChange = (e) => {
        setinputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}
AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory