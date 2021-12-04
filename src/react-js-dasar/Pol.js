import React from 'react'

export default class Operan extends React.Component {

	gantiMakanan = (makanan_baru) => {
		this.setState({
			makanan: makanan_baru
		})
	}

	render() {
		return (
			<div>
			<h2>Mobil1: {this.props.makanan}</h2>
			<h2>Mobil2: {this.props.makanan}</h2>
			<h2>Mobil3: -</h2>
			</div>
		)
	}
}