import React from 'react';
import TableRow from './TableRow';

export default function TableHeader () {
    return (
        <li className="TableRow header">
            <div className="TableRow__item">Name</div>
            <div className="TableRow__item">Belarusian Ruble to currency</div>
            <div className="TableRow__item">Currency to Belarusian Ruble</div>
        </li>
    )
}