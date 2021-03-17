import React from 'react';
import Customer from './Customer';
import fakeData from '../fake_data/FakeData';

const Customers = () => {

	return(
		// Map over fake customer data
		fakeData.map(customer => 
			<Customer
				// assign values to props for Customer component
				id={customer.id}
				name={customer.name}
				address={customer.address}
				companyName={customer.companyName}
				regiDate={customer.registrationDate}
			/>
		)
	)
}

export default Customers;

