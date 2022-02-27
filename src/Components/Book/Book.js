import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData.js';
import './Book.css';
import map from '../images/Map.png'

const Book = () => {
    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState({});
    const [search, setSearch] = useState(false);
    const { photo, name, people } = data
    useEffect(() => {
        const journy = fakeData.find((element) => element.id == id);
        console.log(journy);
        setData(journy)
    }, [id]);
    console.log(data);

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(true);


    }
    console.log(search);

    return (
        <div className='book'>

            <form onSubmit={handleSearch}>
                {
                    search ?
                        <div className="search-result">
                            <div className="search-location">
                                <h4>mirpur-1</h4>
                                <h4>danmondi</h4>
                            </div>
                            <div className="search-info">
                                <div className="search-details">
                                    <img src={photo} alt="" />
                                    <p>{name}</p>
                                    <p>4</p>
                                    <p>$67</p>
                                </div>
                            </div>
                            <div className="search-info">
                                <div className="search-details">
                                    <img src={photo} alt="" />
                                    <p>{name}</p>
                                    <p>4</p>
                                    <p>$67</p>
                                </div>
                            </div>
                            <div className="search-info">
                                <div className="search-details">
                                    <img src={photo} alt="" />
                                    <p>{name}</p>
                                    <p>4</p>
                                    <p>$67</p>
                                </div>
                            </div>
                        </div> : <div className="pick-up">
                            <label htmlFor="pick-from">pick from</label>
                            <input type="text" value="mirpur-1" />
                            <label htmlFor="pick-to">pick to</label>
                            <input type="text" value="danmondi" />
                            <input className='submit' type="submit" value="search" />
                        </div>
                }
            </form>

            <div className="map">
                <img src={map} alt="map" />
            </div>


        </div>
    );
};

export default Book;