import React from 'react';
import TableRow from './TableRow';

export default function TableHeader () {
    const fields = {
        code: 'Code',
        name: 'Name',
        value: 'Value',
    }
    return (
        <TableRow data={fields} className="header"/>
    )
}