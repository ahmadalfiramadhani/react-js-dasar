import React from 'react'
import { Row , Col, Form, Button } from 'react-bootstrap'

const Formulir = ({nama, deskripsi, harga, qty, handleChange, id, handleSubmit})=> {
	return (
		<div className="mt-3">
			<Row>
				<Col>
					<h4>Pluss Data</h4>
					<h4>{id ? "Edit Data" : "Tambah Data"}</h4>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
  							<Form.Group className="mb-3" controlId="Name Cars">
    						<Form.Label>Nama</Form.Label>
    						<Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} required/>
    						</Form.Group>
    						<Form.Group className="mb-3" controlId="deskripsi">
    						<Form.Label>QTY</Form.Label>
    						<Form.Control type="number" rows="3" name="qty" value={qty} onChange={(event) => handleChange(event)} required/>
    						</Form.Group>
    						<Form.Group className="mb-3" controlId="harga">
    						<Form.Label>Harga</Form.Label>
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

export default Formulir