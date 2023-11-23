import React from 'react';
import './table.css';

function createTable() {
    const header = ['Full Name', 'Address', 'Contact Number'];
    const data = [
        ['Data1.1', 'Data1.2', 'Data1.3'],
        ['Data2.1', 'Data2.2', 'Data2.3'],
        ['Data3.1', 'Data3.2', 'Data3.3']
    ];

    return (
        <table>
            <thead>
                <tr>
                    {header.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        {row.map((col, j) => <td key={j}>{col}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


export default createTable;
