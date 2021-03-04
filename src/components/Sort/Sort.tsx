import React, { useState, useEffect, useRef } from 'react'

import './Sort.css'


interface ISort {
	items: any,
	activeSort: string,
	selectSortType: ( index: string)=> void
}


const Sort: React.FC<ISort> = ({ items, activeSort, selectSortType }) => {
	const [visiblePopup, setVisiblePopup] = useState(false)

	const sortRef = useRef(null)

	const toggleViziblePopup = ( ) => {
		setVisiblePopup( !visiblePopup )
	}

 const closePopup = ( e: any ) => {
	 if ( !e.path.includes( sortRef.current )) {
		 setVisiblePopup( false )
	 }
 }

 const activeItem = ( index: any) => {
	selectSortType( index )
	setVisiblePopup( false )
 }

 useEffect( ()=> {
	document.addEventListener( 'click', closePopup )
 },[])


 const activeLabel = items.find( (item: any) => item.type === activeSort).name

 
	return (
		<div 
		ref={ sortRef }
		className="sort">
			<div className="sort__label">
				<svg className={visiblePopup ? 'rotated' : ""}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C" />
				</svg>
				<b 
				onClick={ toggleViziblePopup }
				>Сортировка по:</b>
				<span> { activeLabel  } </span>
			</div>
			{ visiblePopup && (
				<div className="sort__popup">
					<ul>
						{/* @ts-ignore */}
						{items.map((item, index) => {
							return (
								<li
									className={ activeItem ===  item.type ? 'active': "" }
								 key={index}
								 onClick={ ()=>activeItem( item.type ) }
								> { item.name } </li>
							)
						})}
					</ul>
				</div>
			)}

		</div>
	)
}


export default Sort


// 1.Дописать попап, добавить стили
// 2.Сделать фильтрацию
// 3. Сделать сортировку 
// 4. Стилизация

// 5.Корзина
// 6.Добавление в корзину
// 7.Удаление из корзины
