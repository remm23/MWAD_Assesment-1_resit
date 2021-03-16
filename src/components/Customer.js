import React from 'react';
import CustomerPanel from './CustomerPanel'


const Customer = (props)  => {

	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.name}</td>
			<td>{props.address}</td>
			<td>{props.companyName}</td>
			<td>{props.regiDate}</td>
		</tr>
	);
}

export default Customer;