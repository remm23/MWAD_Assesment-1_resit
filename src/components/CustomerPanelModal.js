import React, { useState } from 'react';
import Customer from './Customer';
// react bootstrap styles
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';


const CustomerPanelModal = (props) => {
	// hooks for showing and hiding the modal
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	return (
	  <>
	  {/* Button displayed in form */}
		<Button variant="primary" onClick={handleShow}>
		  Confirm Customer
		</Button>
  
		<Modal
		  show={show}
		  onHide={handleClose}
		  backdrop="static"
		  keyboard={false}
		>
		  <Modal.Header closeButton>
			<Modal.Title>Customer</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			  {/* Customer details are shown when button is clicked */}
			<Table striped borederd size="sm">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Address</th>
						<th>Company Name</th>
						<th>Registration Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.id}</td>
						<td>{props.name}</td>
						<td>{props.address}</td>
						<td>{props.company}</td>
						<td>{props.regiDate}</td>
					</tr>
				</tbody>
			</Table>
		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			{/* <Button variant="primary">Understood</Button> */}
		  </Modal.Footer>
		</Modal>
	  </>
	);
  }
  
export default CustomerPanelModal;