import React from "react"
import "../Header/style.css"

import ShoppingCartContext from '../../contexts/ShoppingCartContext'
import menuBurguer from '../../images/menu-icon.svg'
import Logo from '../../images/logo-icon.svg'
import Magnifying from '../../images/magnifying-icon.svg'
import shoppingCart from '../../images/shopping-cart.svg'
import myAccount from '../../images/myaccount-icon.svg'

//const = constante, como se fosse um var ou um let é algo que não muda, sempre fixo.
//return, dentro do return é usado o 'HTML'

const Header = () => {
    return (        
        <ShoppingCartContext.Consumer> 
            {({cart}) =>
            (
        //className -> dando uma tag na div, para alterar no css

        <container className='container'>
            
            <header className='header'>
            
            <div className="menu-logo">
            
                    <img src={menuBurguer}className="menu-burguer" alt="Burguer menu"/>
            
                    <img className="logo" src={Logo} alt="Logo Corebiz"/>
            </div>
            
                <form className="form">
                    <input
                            className="search-box"
                            type="text" name="searchbox"
                            id="searchbox"
                            placeholder="O que está procurando?"
                            />
                            <button className="search-button">
                            <img src={Magnifying} alt="Search"/>
                            </button>            
                </form>

                <button className="my-account">Minha Conta
                    <img src={myAccount} alt="My User"/>
                </button>

                <button className="my-shopping-cart">
                    <img src={shoppingCart} alt="My Cart"/>
                    {cart.length > 0 ? <span>{cart.length}</span> : null}
                </button>

            </header>
        </container>

        )
        }
    </ShoppingCartContext.Consumer> //O Consumer vai usar o provider, e consumindo o conteúdo do shopping cart context

    )
}

export default Header;