import React from 'react'
import Default from '../assects/DefaultImg.jpg'
import './card.css';
import Pen from '../assects/Pen.svg'
import Cross from '../assects/cross-round-svgrepo-com.svg'
import { Link, useNavigate } from 'react-router-dom';

function Card({ setModifyOnClick, refetchData, loader, setLoader, index, modifyOnClick, name, description, price }) {
    const navigate = useNavigate();
    const data = {
        name,
        description,
        price
    }

    const handleCross = () => {
        const items = JSON.parse(localStorage.getItem("items"));
        const modifiedItems = items.filter((item, i) => i != index);
        localStorage.setItem("items", JSON.stringify(modifiedItems));
        setLoader(!loader);
        setModifyOnClick(!modifyOnClick);
    }


    return (
        <div className='card'>
            {
                modifyOnClick &&
                (<p className='modify'>
                    <img src={Pen} onClick={() => navigate('/modify', { state: { name, description, price, index } })} alt="" height={25} width={25} />
                    <img src={Cross} onClick={handleCross} alt="" height={25} width={25} />
                </p>)}
            <img src={Default} alt="" />
            <h1 >{name}</h1>
            <p>{description}</p>
            <div className='price'>Rs {price}</div>

        </div>
    )
}

export default Card