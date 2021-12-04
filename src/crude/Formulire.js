import React from 'react'
import { Row , Col, Form, Button } from 'react-bootstrap'

const Formulire = ({nama, deskripsi, harga, qty, id, handleChange, handleSubmit})=> {
	return (
		<div className="mt-3">
			<Row>
				<Col>
				<hr />
					<h4>{id ? "Edit Data" : "Pluss Data"}</h4>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
  							<Form.Group className="mb-3" controlId="Name Cars">
    						<Form.Label>Name Cars</Form.Label>
    						<Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} required/>
    						</Form.Group>
    						<Form.Group className="mb-3" controlId="deskripsi">
    						<Form.Label>QTY</Form.Label>
    						<Form.Control type="number" rows="3" name="qty" value={qty} onChange={(event) => handleChange(event)} required/>
    						</Form.Group>
    						<Form.Group className="mb-3" controlId="harga">
    						<Form.Label>Price</Form.Label>
    						<Form.Control type="number" rows="3" name="harga" value={harga} onChange={(event) => handleChange(event)} required/>
    						</Form.Group>
    						<Form.Group className="mb-3" controlId="formBasicPassword">
    						<Form.Label>Description</Form.Label>
    						<Form.Control type="text-center" rows="8" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} required />
    						</Form.Group>


    						<Form.Group className="mb-3" controlId="formBasicCheckbox">
    						<Form.Check type="checkbox" label="Check Me Out" />
    						</Form.Group>
  							<center><Button variant="primary" type="submit">
    							ACC
							</Button></center>
					</Form>
				</Col>
			</Row>
		</div>
		)
}

export default Formulire