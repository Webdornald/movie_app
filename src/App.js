import React from "react";
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
    return (
        <div>
            <h2>I like {name}</h2>;
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: 'Kimchi',
        image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
        rating: 5,
    },
    {
        id: 2,
        name: 'Samgyeopsal',
        image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
        rating: 4.5,
    },
    {
        id: 3,
        name: 'Bibimbap',
        image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
        rating: 3.2,
    },
    {
        id: 4,
        name: 'Doncasu',
        image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
        rating: 3.9,
    },
    {
        id: 5,
        name: 'Kimbap',
        image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
        rating: 2.4,
    },
];

function App() {
    return (
        <div>
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
}

export default App;