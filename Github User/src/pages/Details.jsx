
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

const Details = ({ mode }) => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`https://api.github.com/users/${name}`)
            .then(result => result.json())
            .then(results => {
                setUser(results);
            })
    }, [name])

    return (
        <div className='container align-items-center justify-content-center d-flex' style={{ height: '100vh' }}>
            <div className={mode ? 'p-4 rounded' : 'shadow border p-4 rounded'} style={mode ? { boxShadow: '0px 0px 9px 0px #ffff' } : null}>
                <img src={user.avatar_url} className='my-4' alt='profile' style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
                <h1 className={mode ? 'text-white text-center align-self-center mt-3' : 'text-center align-self-center mt-3'}>{user.name}</h1>
                <h3 className={mode ? 'text-white text-center align-self-center mt-3' : 'text-center align-self-center mt-3'}>{user.bio}</h3>
                <div className='d-flex justify-content-around'>
                    <h5 className={mode ? 'text-white text-center align-self-center mt-3' : 'text-center align-self-center mt-3'}>Followers: {user.followers}</h5>
                    <h5 className={mode ? 'text-white text-center align-self-center mt-3' : 'text-center align-self-center mt-3'}>Following: {user.following}</h5>
                </div>
                <Button className='btn btn-primary w-100 mt-3' href={user.html_url} target='_blank' rel="noreferrer">Github</Button>
                <Button className='btn btn-info w-100 mt-3' onClick={() => navigate(-1)} rel="noreferrer">Back</Button>
            </div>
        </div>
    )
}

export default Details