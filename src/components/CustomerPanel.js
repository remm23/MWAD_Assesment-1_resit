import React, { useState } from 'react';
import Customer from './Customer'
import fakeData from '../fake_data/FakeData'


const CustomerPanel = (props) => {

	// hooks for input
	const [id,setId] = useState('');
	const [name,setName] = useState('');
	const [address,setAddress] = useState('');
	const [company,setCompany] = useState('');
	const [regiDate,setRegiDate] = useState('');

	return (
		<div className="component">
			<table>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Address</th>
					<th>Company Name</th>
					<th>Registration Date</th>
				</tr>
				{fakeData.map( customer => 
				// pass fake data via props to Customer component
					<Customer 
						id={customer.id}
						name={customer.name}
						address={customer.address}
						companyName={customer.companyName}
						regiDate={customer.registrationDate}
					/>
				)}
			</table>

			<br/>

			<form>
				<lable for="id">Id</lable>
				<input 
					type="text"
					placeholder="id: 1234"
					value={id}
					onChange={event => setId(event.target.value)}
				/>

				<lable for="name">Name</lable>
				<input 
					type="text"
					placeholder="Bob Jones"
					value={name}
					onChange={event => setName(event.target.value)}
				/>

				<lable for="address">Address</lable>
				<input 
					type="text"
					placeholder="64 Zoo lane"
					value={address}
					onChange={event => setAddress(event.target.value)}
				/>

				<lable for="company name">Company Name</lable>
				<input 
					type="text"
					placeholder="Amazon, intel"
					value={company}
					onChange={event => setCompany(event.target.value)}
				/>

				<lable for="registration date">Registration Date</lable>
				<input 
					type="text"
					placeholder="1/1/1970"
					value={regiDate}
					onChange={event => setRegiDate(event.target.value)}
				/>

				<input type="submit" value="Add Data" onClick={(event) => {
					let message;
					// prevent default form action
					event.preventDefault();

					if (id && name && address && address && company && regiDate) {
						message = `${id}, ${name}, ${address}, ${company}, ${regiDate}`; 
					} else {
						message = "Not all fields have been filled out";
					}
					window.alert(message);
				}}/>
			</form>
		</div>		
	)
}

export default CustomerPanel;