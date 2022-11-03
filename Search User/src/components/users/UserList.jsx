import React from 'react'
import './user-list.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const UserList = ({ data }) => {

    const navigate = useNavigate();

    return (
        <div className='w-75 align-items-center'>
            {data.map(user => {
                return (
                    <div onClick={() => navigate('details', { state: { user } })} className='list d-flex bg-white flex-row my-4 align-items-center border rounded shadow-lg py-2 justify-content-between' key={user.id}>
                        <div className='d-flex flex-row align-items-center row w-100 px-3'>
                            <div className='border border-primary border-5 rounded-circle col-sm-12 col-md-3 overflow-hidden mx-2'>
                                <img className='image' src={`https://robohash.org/${user.id}`} alt={"user pic"} />
                            </div>
                            <div className='d-flex mx-3 flex-column align-items-start col-sm-12 col-md-5'>
                                <h2 className='text-primary text-break'>{user.name}</h2>
                                <h5 className='text-gray text-break'>{user.email}</h5>
                            </div>
                            <Button className='mx-3 col-sm-12 col-md-2'>Details</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList