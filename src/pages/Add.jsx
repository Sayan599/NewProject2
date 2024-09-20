import React, { useEffect, useState } from 'react'
import './add.css'
import { useNavigate } from 'react-router-dom';

function Add({ modifyOnClick, setModifyOnClick }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState();
    const [totalItems, setTotalItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items"));
        setTotalItems([...items]);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name,
            description: desc,
            price: +price
        }
        totalItems.push(newItem);
        localStorage.setItem("items", JSON.stringify(totalItems));
        navigate("/");
    }


    return (
        <div className='add'>
            <form action="" onSubmit={handleSubmit}>
                <h1>Add List</h1>

                {/* <img src={ } alt="" /> */}

                <label>Name</label>
                <input className='name' type="text" onChange={(e) => setName(e.target.value)} />

                <label >Description</label>
                <input className='desc' type="text" onChange={(e) => setDesc(e.target.value)} />

                <label >Price</label>
                <input className='price' type="number" onChange={(e) => setPrice(e.target.value)} />

                <button type='submit'>ADD NEW</button>
            </form>
        </div>
    )
}

export default Add