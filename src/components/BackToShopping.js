import React from 'react'
import { NavLink } from 'react-router-dom'
import { BackToCartButton } from '../styles/styles'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

const BackToShopping = () => {
    return (
        <BackToCartButton>
            <FaRegArrowAltCircleLeft />
            <NavLink to="/">Voltar as compras</NavLink>
        </BackToCartButton>        
    )
}

export default BackToShopping;