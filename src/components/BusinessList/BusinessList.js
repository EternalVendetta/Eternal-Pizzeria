import React, { Component } from 'react';
import './BusinessList.css';

// My Components
import { Business } from '../Business/Business';

export class BusinessList extends Component {
    render() {
        return (
            <div className='BusinessList'>
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}