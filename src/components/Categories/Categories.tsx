import React from 'react'
import './Categories.css'



interface ICategories {
	items: string[],
	selectCategory: ( index: null | any ) => void,
	activeCategory: any 
}



const Categories: React.FC<ICategories> = ({ items, selectCategory, activeCategory }) => {
	return (
		<div className="categories">
		<ul> 
				<li
				className={ activeCategory === null ? 'active': '' }
				onClick={ ()=> selectCategory( null ) }
				>	Все </li>
				{ items &&  items.map( (item, index) => {
					return (
						<li 
						onClick={ ()=> selectCategory( index ) }
						className={ activeCategory === index ? 'active' : '' }
						key={ index }>  
							{ item }
						</li>
					)
				})} 
		</ul>
		</div>
	)
}

export default Categories
