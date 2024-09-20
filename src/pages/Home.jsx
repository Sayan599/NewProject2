import React, { useEffect, useState } from 'react'
import './home.css';
import Card from '../components/Card';

function Home({ modifyOnClick, setModifyOnClick }) {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);


    const dummyitems = [
        {
            name: "Sugar Check",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, alias? Lorem ipsum dolor sit amet.",
            price: 250
        },
        {
            name: "Blood Pressure Check",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, alias? Lorem ipsum dolor sit amet.",
            price: 250
        },
        {
            name: "Service 1",
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

    useEffect(() => {
        if (localStorage.getItem("items") === null) {
            localStorage.setItem("items", JSON.stringify(dummyitems));
        }
        else {
            setItems(JSON.parse(localStorage.getItem("items")));
        }
    }, []);


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