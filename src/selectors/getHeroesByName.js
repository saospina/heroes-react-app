import { heroes } from '../data/heroes';


export const getHeroesByName = (name = '') => {

    name = name.toLowerCase()

    if (name === '') {
        return []
    }

    const heroesFilteredByName = heroes.filter(hero => hero.superhero.toLowerCase().includes(name))

    return heroesFilteredByName
}
