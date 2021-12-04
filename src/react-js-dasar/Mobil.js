import React from 'react'
import Pol from './Pol'
 
export default class StateProps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			makanan : '-'
		}
	}
	gantiMakanan = (makanan_baru) => {
		this.setState({
			makanan: makanan_baru
		})
	}

	render() {
	return (
		<div>
		    <h2>{this.state.makanan}</h2>
		    <button onClick={() => this.gantiMakanan("BMW,Ferari,Toyota")}>Ganti Mobil</button>
		    <Pol makanan = {this.state.makanan}/>
		</div>
	    )
    }
}
