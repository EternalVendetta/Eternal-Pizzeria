import React, { Component } from 'react';
import './SearchBar.css';


export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '', // Will refer to search Term
            location: '', // Will refer to Location near
            sortBy: 'best_match' // Will refer to the sorting option used
        }

        // Objects refers to the API    
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most review': 'review_count',
        }

        //Bind THIS to Methods
        this.renderSortByOption = this.renderSortByOption.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption })
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value })
    }

    handleLocationChange(e) {
        this.setState({ location: e.target.value })
    }

    handleSearch(e) {
        const { term, location, sortBy } = this.state;
        e.preventDefault();
        this.props.searchYelp(term, location, sortBy)
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    // Will create <li /> by iterate through the Objects (keys & values) Above
    renderSortByOption() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li 
                    className={this.getSortByClass(sortByOptionValue)} 
                    key={sortByOptionValue}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                    {sortByOption}
                    </li>
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
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a href="#" onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )

    }
}