import React, { useState } from 'react'
import '../App.css'
import SearchComponent from '../components/SearchComponent'
import ItemCard from '../components/ItemCard';
import { VscGithub } from 'react-icons/vsc';

const Home = ({ mode }) => {
    const [data, setData] = useState([]);

    return (
        <div className={mode ? 'container bg-dark' : 'container'} style={data.length < 3 ? { height: '100vh' } : { height: '100%' }}>
            <VscGithub size={150} className='my-4' color={mode ? 'white' : ''} />
            <SearchComponent changeData={users => setData(users)} mode={mode} />
            <hr></hr>
            {data.length > 0 ? <ItemCard data={data} mode={mode} /> : <h1 className={mode ? 'text-white text-center align-self-center' : 'text-center align-self-center'}>No users available! <br></br>Please search first...</h1>}
        </div>
    )
}

export default Home