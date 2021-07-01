import React from 'react';

import './TableRow.scss';

export default function TableRow(props) {
    const {abbreviation, name, rubToCurrency, currencyToRub } = props.data;
    return (
        <li className="TableRow">
            <div className="TableRow__item">{name}</div>
            <div className="TableRow__item">1 BYN = {rubToCurrency} {abbreviation}</div>
            <div className="TableRow__item">1 {abbreviation} = {currencyToRub} BYN</div>
        </li>
    )
}