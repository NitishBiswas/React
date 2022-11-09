import React from 'react'

const SearchComponent = ({ changeData, mode }) => {

    const searchText = (e) => {
        const search = e.target.value;
        if (search.length > 0) {
            fetch(`https://api.github.com/search/users?q=${search}`)
                .then(res => res.json())
                .then(res => {
                    if (res.message !== undefined) {
                        alert('API rate limit exceeded! \nPlease try again after a few seconds!');
                    }
                    if (res.items !== undefined) {
                        changeData(res.items);
                    } else changeData([]);
                }).catch(err => console.log('err', err))
        } else {
            changeData([]);
        }

    }

    return (
        <div className='w-100 my-4 d-flex justify-content-center'>
            <input
                className={mode ? 'form-control w-75 shadow bg-dark text-light' : 'form-control w-75 shadow'}
                type='text'
                placeholder='Search github users by username'
                onChange={searchText}
            />
        </div>
    )
}

export default SearchComponent