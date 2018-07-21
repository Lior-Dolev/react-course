import React from 'react';

export default function RequestTypeRow(props) {
    console.log(props);
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.client}</td>
            <td>{props.network}</td>
            <td>{props.service}</td>
            <td>{props.filters}</td>
            <td>{props.paging}</td>
            <td>{props.interval}</td>
            <td><input type="checkbox" defaultChecked="true"/></td>
        </tr>
    );
}