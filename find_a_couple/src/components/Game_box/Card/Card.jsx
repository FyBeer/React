import { useState } from 'react'
import Card_style from './Card_style/Card.module.css'

const Card = (props) => {

	return (
			<li data-item={props.dataItems} className={Card_style.el} id={props.id}>
			
			</li>
	)
}

export default Card