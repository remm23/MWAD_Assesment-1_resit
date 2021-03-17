import React, { useState } from 'react';
import Customers from './Customers';
import CustomerPanelModal from './CustomerPanelModal';
// Styles from react bootstrap
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const CustomerPanel = () => {

	// hooks for input
	const [id,setId] = useState('');
	const [name,setName] = useState('');
	const [address,setAddress] = useState('');
	const [company,setCompany] = useState('');
	const [regiDate,setRegiDate] = useState('');

	const customer = {id,name,address,company,regiDate};
	// const customer = "code is cool";
	return (
		<div className="component">
			{/* Table to display all customer data */}
			<Table>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Address</th>
					<th>Company Name</th>
					<th>Registration Date</th>
				</tr>
				{
					// Customers component that displays the customers in the table
				}
				<Customers/>
			</Table>

			{
				// remove br after addind styles
			}
			<br/>  

			<Form>
				<Form.Group>
					<Form.Label>Id</Form.Label>
					{/* Text field for customer input */}
					<Form.Control 
						type="text"
						placeholder="id: 1234"
						value={id}
						// event for changing text in input field
						onChange={event => setId(event.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label for="name">Name</Form.Label>
					<Form.Control 
						type="text"
						placeholder="Bob Jones"
						value={name}
						onChange={event => setName(event.target.value)}
					/>
				</Form.Group>
				
				<Form.Group>
					<Form.Label for="address">Address</Form.Label>
					<Form.Control 
						type="text"
						placeholder="64 Zoo lane"
						value={address}
						onChange={event => setAddress(event.target.value)}
					/>
				</Form.Group>

				<Form.Group>
				<Form.Label for="company name">Company Name</Form.Label>
				<Form.Control 
					type="text"
					placeholder="Amazon, intel"
					value={company}
					onChange={event => setCompany(event.target.value)}
				/>

				</Form.Group>

				<Form.Group>
					<Form.Label for="registration date">Registration Date</Form.Label>
					<Form.Control 
						type="text"
						placeholder="1/1/1970"
						value={regiDate}
						onChange={event => setRegiDate(event.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<CustomerPanelModal
					// props to pass to modal panel
						id={id}
						name={name}
						address={address}
						company={company}
						regiDate={regiDate}
					/>
				</Form.Group>
			</Form>
		</div>		
	)
}

export default CustomerPanel;
