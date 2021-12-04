import React from 'react';
import { Table } from 'react-bootstrap'

const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <Table striped bordered hover variant="dark">
                <thead className="text-center">
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>QTY</th>
                        <th>Harga</th>
                        <th>Description</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {bukus.map((buku, index) => {
                    return(
                        <tr key={index}>
                            <td>{index + 1 }</td>
                                <td>{buku.nama}</td>
                                <td>{buku.qty}</td>
                                <td>{buku.harga}</td>
                                <td>{buku.deskripsi}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => editData(buku.id)}>Edit</button>
                                <button className="btn btn-warning" onClick={() => hapusData(buku.id)}>Delete</button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
                </Table>
    )
}

export default Tabel