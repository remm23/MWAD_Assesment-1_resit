import React, { useState } from 'react';
import Customers from './Customers';
// Styles from react bootstrap
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const CustomerPanel = (props) => {

	// hooks for input
	const [id,setId] = useState('');
	const [name,setName] = useState('');
	const [address,setAddress] = useState('');
	const [company,setCompany] = useState('');
	const [regiDate,setRegiDate] = useState('');

	return (
		<div className="component">
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
					<Form.Control 
						type="text"
						placeholder="id: 1234"
						value={id}
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
					<Button type="submit" value="Add Data" onClick={(event) => {
							let message;
							// prevent default form action
							event.preventDefault();

							if (id && name && address && address && company && regiDate) {
								message = `${id}, ${name}, ${address}, ${company}, ${regiDate}`; 
							} else {
								message = "Not all fields have been filled out";
							}
							window.alert(message);
						}
					}>Submit</Button>
				</Form.Group>
			</Form>
		</div>		
	)
}

export default CustomerPanel;