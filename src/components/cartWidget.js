import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


export default function CartWidget() {
    return (
        <div style={{fontsize:"10em", color:"grey"}}>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    )
}