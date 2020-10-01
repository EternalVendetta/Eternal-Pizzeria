import React, { Component } from 'react';
import './SearchBar.css';

// Objects refers to the API
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most review': 'review_count',
}

export class SearchBar extends Component {
    // Will create <li /> by iterate through the Objects(keys & values) Above
    renderSortByOption() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }
    // JSX Render...
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOption()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                     <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )

    }
}