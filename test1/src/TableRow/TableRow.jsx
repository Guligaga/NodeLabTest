import React from 'react';

export default function TableRow(props) {
    const {code, name, value } = props.data;
    const classList = ['TableRow', props.className ? props.className : ''];
    return (
        <li className="TableRow">
            <div className="TableRow__name">{name}</div>
            <div className="TableRow__code">{code}</div>
            <div className="TableRow__value">{value}</div>
        </li>
    )
}