import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import "../App.css"
import { activeCard, correctCard } from '../redux/CardSlice';

function Card() {

    const [one, setOne] = useState()
    const [card, setCard] = useState(0)


    const items = useSelector(state => state.card.items)
    const dispatch = useDispatch()


    const handleClick = (id) => {
        if (+card === 0) {
            dispatch(activeCard(id))
            setCard(1)
            console.log("fonk 1", card);
            return;
        }
        if (+card === 1) {
            dispatch(activeCard(id))
            dispatch(correctCard())
            setCard(0)
            return;
        }
    }

    return (
        <div>
            {items.map((item, idx) => {
                const itemClass = item.stat
                return (
                    <button id={item.id} key={idx} className={`card ${itemClass}`} onClick={(e) => { handleClick(e.target.id) }}>
                        <img src={item.src} />
                    </button>
                )
            })}
        </div>

    )
}

export default Card


//