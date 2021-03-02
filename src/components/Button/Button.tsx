import React from 'react'
import cn from 'classnames'
import './Button.css'

//исправить
interface IButton {
	children: any,
	buttonCart: any
}

const Button: React.FC<IButton> =  ({ children, buttonCart  }) => {
	return (
	<div className={ buttonCart ? "button button--cart" : "button" } >
			{ children }
	</div>
	)
}



export default Button
