import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectFilterCategory, selectFilterSort } from '../../redux/filter/filterSelector'
import { fetchPizzasThunk } from '../../redux/pizzas/pizzasActions'
import { Categories, PizzaBlock, Sort, Loader } from '../../components/index'
import { selectPizzaItems, selectLoaded } from '../../redux/pizzas/pizzasSelector';
import { setCategoryAction, setSortByAction } from './../../redux/filter/fiterAction';
import { addPizzaAction } from './../../redux/cart/cartAction';
import { IPizza } from '../../redux/pizzas/pizzasState';

import './Home.css'


export interface IHome { }


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


const Home: React.FC<IHome> = () => {
 
	const dispatch = useDispatch()
	const pizzas = useSelector(selectPizzaItems)
	const isLoaded = useSelector( selectLoaded )
	const category = useSelector(selectFilterCategory)
	const sort = useSelector(selectFilterSort)


	const selectSortType = useCallback(( type )=> {
		dispatch( setSortByAction( type ))
	}, [ dispatch ] )
	const selectCategory = useCallback(( index ) => {
			dispatch( setCategoryAction( index ))
		}, [ dispatch ])

	const addPizzaToCart = ( obj: IPizza ) => {
		dispatch( addPizzaAction(obj))
	}

 
	useEffect(() => {
		dispatch(fetchPizzasThunk(category, sort))
	}, [dispatch, category, sort])




	return (
		<div className="container">
			<div className="content__top">
				<Categories
				selectCategory={ selectCategory }
					activeCategory = { category }
					items={categoryNames}
				/>
				<Sort
				selectSortType = { selectSortType }
				activeSort={ sort }
				items={sortItems}
				/>
			</div>

			<h2 className="content__title"> Все пиццы </h2>

				{ isLoaded ? 
				(<div className="content__items">
				{ pizzas.map((pizza) => (
					<PizzaBlock 
					{ ...pizza }
					key={pizza.id} 
					addPizzaToCart={ addPizzaToCart }
					/>
				))}
			</div>) : 
			<Loader/> }

		</div>
	)
}


export default Home
