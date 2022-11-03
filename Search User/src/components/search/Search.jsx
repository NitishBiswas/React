import React from 'react'

const Search = ({ type, placeholder, onChange, data }) => {

    const filtering = (e) => {
        const searchText = e.target.value;
        const filteredUsers = data.filter((person) => {
            return searchText === '' ? person : person.name.toUpperCase().includes(searchText.toUpperCase()) ? person : null
        })
        onChange(filteredUsers);
    }

    return (
        <input className="form-control mt-3 mb-3 p-2 shadow-lg w-75" type={type} id="search" placeholder={placeholder} onChange={filtering} />
    )
}

export default Search