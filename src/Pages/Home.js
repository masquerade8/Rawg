import React, { useRef } from 'react';
import Layout from '../Components/Layout/Layout';
import { useState, useEffect } from 'react';
import loading from '../Images/loading.gif';
import ab from '../Images/arrow_board.png';
import gift from '../Images/gift.png';
import options from '../Images/options.png';
import pls from '../Images/plus.png';
import totheright from '../Images/right-link.png'

const Home = () => {

    const [games, setGames] = useState(null);

    const apiKey = "f71999522b794f71b092b3d6affd1095";
    const count = useRef(0);

    useEffect(() => {

        fetch(`https://api.rawg.io/api/games?token&key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setGames(data.results);
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <Layout>
            <div className="card-middle-container">
                <div className="home-heading">
                    New and trending
                </div>
                <div className="card-container">

                    {games ? games.map((obj) => (<div className="card" key={obj.id}>

                        <img className='card-image' src={obj.background_image} alt="" />
                        <div className="namee">{obj.name} <img style={{ width: "35px", background: 'transparent', position: 'absolute', marginLeft: '10px' }} src={ab} alt="" />
                        </div>

                        <div className="hidden-container">

                            <div className="three-btn">
                                <div className="count three-same unhidden"><img src={pls} alt="" /><span className='btn-txt'>{obj.added}</span>  </div>
                                <div className="gift three-same hidden "><img src={gift} alt="" /></div>
                                <div className="options three-same hidden "><img src={options} alt="" /></div>
                            </div>

                            <div className='card-bottom'>
                                <div className="summary hidden">
                                    <div className="sum-txt"><div className="left-txt">Release Date:</div><div className="right-txt">{obj.released}</div></div>
                                    <div className="sum-txt sum-txt-g"><div className="left-txt">Genres:</div>
                                        <div className="right-txt-par">
                                            {obj.genres.map((genname) => {
                                                return (
                                                    <div className="right-txt tag-link">{genname.name}</div>);
                                            })}
                                        </div>
                                    </div>
                                    <div className="sum-txt" style={{ borderBottom: 'none' }}><div className="left-txt">Chart:</div><div className="top-txt right-txt">#{obj.rating_top} Top {obj.released.slice(0, 4)}</div></div>
                                </div>

                                <div className="show-m-lk-this hidden">
                                    <div className="its-txt ">
                                        Show more like this
                                    </div>
                                    <div className="its-icon "><img src={totheright} alt="go" /></div>
                                </div>
                            </div>


                        </div>

                    </div>

                    )) : <span className='loading'><img loading='lazy' src={loading} alt="It is loading..." /> </span>}

                </div>

            </div>
        </Layout>
    );
}

export default Home;