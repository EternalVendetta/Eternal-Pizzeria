import React, { Component } from 'react';
import './Business.css';


export class Business extends Component {
    render() {
        const { business } = this.props;
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