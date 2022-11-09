import React, { useEffect, useState } from 'react'
import Localbase from 'localbase'
import Card from '../components/Card';
import '../App.css'

let db = new Localbase('db')

const Favourites = ({ mode }) => {
    const [favouriteUsers, setFavouriteUsers] = useState([]);

    const getUsers = () => {
        db.collection('users').get().then(users => {
            setFavouriteUsers(users);
        });
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='container' style={favouriteUsers.length < 5 ? { height: '100vh' } : { height: '100%' }}>
            <h1 className={mode ? 'text-white text-center align-self-center mt-3' : 'text-center align-self-center mt-3'}>Your Favourite Users!</h1>
            {favouriteUsers !== undefined && favouriteUsers.length > 0 ?
                <div className='itemCard'>
                    {favouriteUsers.map(item => {
                        return (
                            <Card key={item.id} name={item.name} id={item.id} profileImg={item.profileImg} githubURL={item.githubURL} url={item.url} mode={mode} />
                        )
                    })}
                </div>
                : <h1 className={mode ? 'text-white text-center align-self-center' : 'text-center align-self-center'}>No favourite user available!</h1>}
        </div>
    )
}

export default Favourites