import React from "react";
import { Table, Form } from 'react-bootstrap'

const mobil = [
  {
    nama: "BMW",
    QTY: 1200,
    diskon: 500,
    harga: 24000000
  },
  {
    nama: "Tesla",
    QTY: 56,
    diskon: 500,
    harga: 21000000
  },
  {
    nama: "ferrari",
    QTY: 78,
    diskon: 500,
    harga: 60000000
  },
  {
    nama: "Toyota",
    QTY: 890,
    diskon: 500,
    harga: 15000000
  },
  {
    nama: "Mercedes",
    QTY: 120,
    diskon: 500,
    harga: 2000000
  },
  {
    nama: "Honda",
    QTY: 200,
    diskon: 500,
    harga: 4000000
  },
  {
    nama: "Hyundai",
    QTY: 190,
    diskon: 500,
    harga: 5000000
  },
  {
    nama: "Ford",
    QTY: 122,
    diskon: 500,
    harga: 3000000
  },
  {
    nama: "Audi",
    QTY: 190,
    diskon: 500,
    harga: 2900000
  },
  {
    nama: "Nissan",
    QTY: 170,
    diskon: 500,
    harga: 7000000
  }
]

//Reduce
// const total_bayar = mobil.reduce((total_harga, makanan) => 
//    makanan.harga+makanan.diskon, 0)

const Tabel = ({bukus}) => {
	return (
<Table striped bordered hover variant="dark" border-radius="100px" border="10  px solid black" >

    <tr>
      <th id="1">No</th>
      <th id="1">Name Cars</th>
      <th id="1">QTY</th>
      <th id="1">Price</th>
      <th id="1">Action</th>
    </tr>
    {mobil.map, bukus.map((mobil, buku, index) =>(
    <tr>
      <td id="1">{index + 1}.</td>
      <td id="1">{mobil.nama+buku.nama}</td>
      <td id="1">{mobil.QTY+buku.deskripsi}</td>
      <td id="1">{mobil.harga+buku.harga}</td>
      <td id="1"></td>
    </tr>
    ))}
  <Form.Group className="mb-5" controlId="harga">
        
        </Form.Group>
</Table>

	)
}

export default Tabel