import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <p className="card-text">{characters}</p>
                <p className="card-text"><u>{publisher}</u></p>
            </div>
            <div className="card-footer">
                <small className="text-muted">{first_appearance}</small>
            </div>
            <Link to={`./hero/${id}`} className="btn btn-primary">
                See more...
            </Link>
        </div>
    )
}
