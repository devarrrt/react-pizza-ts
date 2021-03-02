import React from 'react'
import './Categories.css'



interface ICategories {
	items: string[]
}



const Categories: React.FC<ICategories> = ({ items }) => {
	return (
		<div className="categories">
		<ul> 
				<li>  
				Все
				</li>
				{ items.map( (item, index) => {
					return (
						<li key={ index }>  
							{ item }
						</li>
					)
				})} 
		</ul>
		</div>
	)
}

export default Categories
