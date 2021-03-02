import React from 'react'
import { Categories, PizzaBlock, Sort } from '../../components/index'
import { IPizza } from './../../redux/pizzas/pizzasState';

import './Home.css'

export interface IHome {
	pizzas: IPizza[]
}

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые']
 
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'title' }
]


const Home: React.FC<IHome> = ({ pizzas }) => {

	return (
		<div className="container">
			<div className="content__top">
					<Categories 
					items = { categoryNames }
					/>
					<Sort 
					items={ sortItems } 
					/>
				</div>
			<h2 className="content__title"> Все пиццы  </h2>

				<div className="content__items">

					{pizzas.map((pizza) => (
								<PizzaBlock pizza={ pizza } key={ pizza.id }  />
					))}
				</div>
	
		</div>
	)
}


export default Home
