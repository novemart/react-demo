import React, { useEffect, useState } from 'react'
import HeroDetail from './HeroDetail';
import Row from 'react-bootstrap/Row';
import { getAllHeroes } from '../services/hero-service';

const AllHeroes = () => {
    const [total, setTotal] = useState(0);
    const [heroes,setHeroes] = useState([]);
    
    useEffect(()=>{
        getHeroesFromAPI();}, []
    );

    const getHeroesFromAPI = ()=>{
        getAllHeroes()
        .then(res => {
            setHeroes(res.data);
        })
        .catch(err => {
            setHeroes([]);
            console.log(err);
        })
    }

    const totalCountHandler = (alias) => {
        console.log(alias);
        setTotal(total + 1);
    }
    return (
        <>
            <h1> Total count is: {total}</h1>
            <Row >
                {heroes.map(hero => (
                    <div className='container' key={hero.id}><HeroDetail info={hero} parentCount={totalCountHandler} /></div>
                ))}
            </Row>
        </>
    )
}

export default AllHeroes