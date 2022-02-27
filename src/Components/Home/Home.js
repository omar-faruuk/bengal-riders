import React, { useEffect, useState } from 'react';
import './Home.css';
import fakeData from '../fakeData/fakeData.js'
import { useNavigate } from 'react-router-dom';





const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setData(fakeData)
    }, []);



    return (
        <div className='home'>

            {
                data.map((card) =>
                    <div onClick={() => navigate(`/book/${card.id}`)} className="card" key={card.id}>

                        <div className="img">
                            <img src={card.photo} alt={card.name} />
                        </div>
                        <div className="text">
                            <p>{card.name}</p>
                        </div>

                    </div>
                )
            }

        </div>
    );
};

export default Home;