import React, { useEffect, useState } from 'react'
import './home.css';
import Card from '../components/Card';

function Home({ modifyOnClick, setModifyOnClick }) {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);


    const dummyitems = [
        {
            name: "Regular Excercise",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, alias? Lorem ipsum dolor sit amet.",
            price: 250
        },
        {
            name: "Premimum Excercise",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, alias? Lorem ipsum dolor sit amet.",
            price: 250
        },
        {
            name: "Normal Excercise",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, alias? Lorem ipsum dolor sit amet.",
            price: 250
        }
    ]

    useEffect(() => {
        if (localStorage.getItem("items") === null) {
            localStorage.setItem("items", JSON.stringify(dummyitems));
        }
        else {
            setItems(JSON.parse(localStorage.getItem("items")));
        }
    }, [loader]);



    return (
        <div className='home'>
            <div className="items">
                {
                    items.map((item, index) => {
                        return <Card setModifyOnClick={setModifyOnClick} loader={loader} setLoader={setLoader} index={index} modifyOnClick={modifyOnClick} name={item.name} description={item.description} price={item.price} />
                    })
                }
            </div>
        </div>
    )
}

export default Home