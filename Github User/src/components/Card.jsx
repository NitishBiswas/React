/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
import Localbase from 'localbase'

let db = new Localbase('db')

const Card = ({ name, id, profileImg, githubURL, url, mode, onChange }) => {

    const [favourite, setFavourite] = useState(undefined);

    const setFavouriteItem = () => {
        const user = {
            name, id, profileImg, githubURL, url
        }
        db.collection('users').doc({ id: id }).get().then(users => {
            if (users === undefined) {
                db.collection('users').add(user);
                setFavourite(user.id);
            } else {
                db.collection('users').doc({ id: id }).delete()
                setFavourite(undefined);
            }
        })
    }

    useEffect(() => {
        db.collection('users').doc({ id: id }).get().then(user => {
            if (user !== undefined) {
                setFavourite(user.id);
            } else {
                setFavourite(undefined);
            }
        })
    }, [])


    return (
        <div className={mode ? 'my-4 rounded' : 'shadow border my-4 rounded'} style={mode ? {
            boxShadow: '0px 0px 9px 0px #ffff', height: '320px', width: '280px'
        } : { height: '320px', width: '280px' }}>
            <img src={profileImg} alt='Profile' className='card-profile' />
            {favourite !== undefined ? <BsHeartFill color={'red'} style={{ position: 'absolute', margin: '10px', cursor: 'pointer' }} size={20} onClick={setFavouriteItem} /> : <BsHeart color={'red'} style={{ position: 'absolute', margin: '10px', cursor: 'pointer' }} size={20} onClick={setFavouriteItem} />}
            <h2 className={mode ? 'text-white overflow-hidden' : 'overflow-hidden'}>{name}</h2>
            <div className='d-flex justify-content-around'>
                <Button className='btn btn-primary' href={githubURL} target='_blank' rel="noreferrer">Github</Button>
                <Button className='btn btn-info' as={Link} to={{ pathname: `/github-users/details/${name}` }} rel="noreferrer">Details</Button>
            </div>
        </div>
    )
}

export default Card