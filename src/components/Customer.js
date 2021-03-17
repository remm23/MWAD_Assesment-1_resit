import React from 'react';


const Customer = (props)  => {

	return (
		// table row for customer data to be display customer info
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