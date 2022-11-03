import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './details.css'

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = location.state

    return (
        <div className='container container-details d-flex flex-column align-items-center'>
            <div className='image-view mx-3'>
                <img className='image' src={`https://robohash.org/${user.id}`} alt={"user pic"} />
            </div>
            <h1 className='text-primary mt-3'>{user.name}</h1>
            <h4 className='text-gray mt-3'>{user.email}</h4>
            <h4 className='text-gray mt-3'>{user.phone}</h4>
            <h4 className='text-gray mt-3'>{user.website}</h4>
            <Button className='w-50 mt-5' onClick={() => navigate('/')}>Go Back</Button>
        </div>
    )
}

export default Details
