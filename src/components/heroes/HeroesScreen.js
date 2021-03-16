import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';


export const HeroesScreen = () => {
    const { heroeId } = useParams();
    const hero = getHeroById(heroeId);
    if (!hero) {
        return <Redirect to="/"/>
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    return (
        <div>
            <h1>Heroes</h1>
        </div>
    )
}
