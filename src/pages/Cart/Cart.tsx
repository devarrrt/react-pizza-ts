import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems, selectTotalPrice, selectTotalCount } from '../../redux/cart/cartSelector'
import { CartItem } from '../../components/index'
import './Cart.css'
import cartEmpty from '../../assets/img/empty-cart.png'
import { clearCartAction, removePizzaAction, addOnePizzaAction, minusItemCartAction } from './../../redux/cart/cartAction';



interface Props { }

const Cart = () => {
	const items = useSelector(selectCartItems)
	const totalCount = useSelector(selectTotalCount)
	const totalPrice = useSelector(selectTotalPrice)
	const dispatch = useDispatch()

	const addedPizzas = Object.keys(items).map(key => {
		return items[key].items[0]
	})
	const clearCart = () => {
		if (window.confirm('Вы действительно хотите выбросить эти питцы?')) {
			dispatch(clearCartAction())
		}
	}

	const removePizzaFromCart = ( id: number ) => {
		if ( window.confirm( 'Вы правда хотите выбросить эту птицу??' )){
			dispatch( removePizzaAction( id ))
		}
	}

	const addOnePizza = ( id: number ) => {
		dispatch( addOnePizzaAction( id ) )
	}

const minusOnePizza = ( id: number ) => {
	dispatch( minusItemCartAction( id ) )
}


	return (
		<div className="container container--cart">

			{ totalCount ? (<div className="cart">
				<div className="cart__top">
					<h2 className="content__title">
						Корзина</h2>

					<div className="cart__clear">
						<span
						onClick={ clearCart }
						>Очистить корзину</span>
					</div>
				</div>
				<div className="content__items">
					{addedPizzas.map(item => (
						<CartItem
							id={item.id}
							key={item.id}
							name={item.name}
							type={item.type}
							size={item.size}
							totalPrice={items[item.id].totalPrice}
							totalCount={items[item.id].items.length}
							removePizzaFromCart= { removePizzaFromCart }
							addOnePizza={ addOnePizza }
							minusOnePizza={ minusOnePizza }
						/>
					))}
				</div>
				<div className="cart__bottom">
					<div className="cart__bottom-details">
						<span> Всего пицц: <b> {totalCount} шт.</b> </span>
						<span> Сумма заказа: <b> {totalPrice}  ₽</b> </span>
					</div>
					<div className="cart__bottom-buttons">
						<Link to="/"
							className="button button--outline button--add go-back-btn">
							<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<span>Вернуться назад</span>
						</Link>
						<div className="button pay-btn">
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>) :
				(
					<div className="cart cart--empty">
						<h2>Корзина пустая 😕 </h2>
						<p>
							Вероятней всего, вы не заказывали ещё пиццу.<br />
							Для того, чтобы заказать пиццу, перейди на главную страницу.
						</p>
						<img src={cartEmpty} alt="Empty cart" />
						<Link to="/" className="button button--black">
							<span>Вернуться назад</span>
						</Link>
					</div>)
			}
		</div>
	)
}

export default Cart
