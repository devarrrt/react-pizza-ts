import React from 'react'
import './Loader.css'


interface Props {}



const Loader = (props: Props) => {
	return (
<div className="center"> 
<div className="lds-grid">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	</div>
</div>
	)
}

export default Loader
