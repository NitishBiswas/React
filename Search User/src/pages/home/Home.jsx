import React, { useEffect, useState } from 'react'
import LottieView from '../../components/lottie/LottieView'

import *as searchLottie from '../../assets/search-lottie.json';
import Search from '../../components/search/Search';
import UserList from '../../components/users/UserList';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
                setFilteredUsers(users)
            })
            .catch(err => console.error(err))
    }, [])

    console.log(filteredUsers);

    return (
        <div className='container container-home d-flex flex-column align-items-center'>
            <LottieView file={searchLottie} height={300} width={300} />
            <Search type="tect" placeholder="Search user by name..." data={users} onChange={(text) => setFilteredUsers(text)} />
            <UserList data={filteredUsers} />

        </div>
    )
}

export default Home
