import React, { Component } from 'react';
import './Business.css';

// Object which will be the Data for API
const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90     
}

export class Business extends Component {
    render() {
        // JSX Below...
        return (
            <div class="Business">
                <div class="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
                    <h2>{business.name}</h2>
                <div class="Business-information">
                    <div class="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.zipCode}</p>
                    </div>
                <div class="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 class="rating">{business.rating}</h3>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
        )
    }
}