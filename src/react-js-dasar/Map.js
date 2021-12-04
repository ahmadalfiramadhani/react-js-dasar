import React from "react"

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
const total_bayar = mobil.reduce((total_harga, makanan) => 
	 makanan.harga+mobil.filter
, 0)

const Map = () => {
	return (
	<div>
	<h2>Toko Mobil AQ dan Kamu</h2>
	<table border="10">
		<tr>
			<th>No</th><br />
			<th>Nama Mobil</th><br />
			<th>QTY</th><br />
			<th>Harga</th><br />
			<th>Total Harga</th><br />
		</tr>
		{mobil.map((makanan, index) =>(
        <tr>
			<td>{index + 1}.</td><br />
			<td>{makanan.nama}</td><br />
			<td><sub>{makanan.QTY}</sub></td><br />
			<td>Rp<sup>{makanan.harga}</sup></td><br />
			<td>Rp<sub>{makanan.QTY*makanan.harga}</sub></td><br />
		</tr>
		))}
	</table>

	<h2>Promo Mobil di bawah 21.000.000</h2>
	<table border="7">
	<tr>
		<th>No</th>
		<th>Nama</th>
		<th>Harga</th>
	</tr>
	{mobil.filter((makanan) => makanan.harga < 21000000)
	.map((makanan, index) =>(
	<tr>
		<td>{index + 1}</td>
		<td>{makanan.nama}</td>
		<td>Rp{makanan.harga-makanan.diskon}</td>
	</tr>
					))}
	</table>


		<h3>Total Promo Diskon : Rp{total_bayar}</h3>
	</div>
	)
}

export default Map