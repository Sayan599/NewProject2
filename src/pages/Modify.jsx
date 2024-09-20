import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Modify({ modifyOnClick, setModifyOnClick }) {

    const location = useLocation();
    const { state } = location;
    const [totalItems, setTotalItems] = useState([]);
    const navigate = useNavigate();

    const [name, setName] = useState(state.name);
    const [description, setDescription] = useState(state.description);
    const [price, setPrice] = useState(state.price);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items"));
        setTotalItems([...items]);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name,
            description,
            price: +price
        }
        totalItems[state.index] = newItem;
        localStorage.setItem("items", JSON.stringify(totalItems));
        setModifyOnClick(!modifyOnClick);
        navigate("/");
    }


    return (
        <div className='add'>
            <form action="" onSubmit={handleSubmit}>
                <h1>Modify Item</h1>

                <label>Name</label>
                <input className='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label >Description</label>
                <input className='desc' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                <label >Price</label>
                <input className='price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

                <button type='submit'>MODIFY ITEM</button>
            </form>
        </div>
    )
}

export default Modify