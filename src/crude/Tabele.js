import React from 'react';
import { Table } from 'react-bootstrap'



const Tabel = ({bukus, editData, hapusData}) => {
    return (

                    <Table striped bordered hover variant="dark">
                        <thead className="text-center">
                            <tr>
                                <th>No</th>
                                <th>Name Cars</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                        {bukus.map((buku, index) => {
                            return(
                            <tr>
                                <td>{index + 1 }</td>
                                <td>{buku.nama}</td>
                                <td>{buku.qty}Pcs</td>
                                <td>$~{buku.harga}</td>
                                <td>{buku.deskripsi}</td>
                                <td>
                                <button className="btn btn-warning" onClick={() => editData(buku.id)}>Edit</button>||
                                <button className="btn btn-warning" variant="primary" onClick={() => hapusData(buku.id)}>Delete</button>
                            </td>
                            </tr>

                            );
                            })}

                        </tbody>
                    </Table>
    )
}

export default Tabel