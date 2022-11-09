import React from 'react'
import Card from './Card'
import '../App.css'

const ItemCard = ({ data, mode }) => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='itemCard'>
                {data.map(item => {
                    return (
                        <Card key={item.id} name={item.login} id={item.id} profileImg={item.avatar_url} githubURL={item.html_url} url={item.url} mode={mode} />
                    )
                })}
            </div>
        </div>
    )
}

export default ItemCard