import React from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
import Footer from './components/Footer'

import ShoppingCartContext from "./contexts/ShoppingCartContext";

class App extends React.Component {
  state = {
    // Propriedade
    cart: [],
    // Modulo
    // O updateCart vai pegar essa classe toda, ele tá chamando o cart:[] e inserir um novo produto.
    addProducts: (newProduct) => {
      let updatedCart = [...this.state.cart, newProduct];      
      
      // Nessa classe, ela cria um nova propriedade chamada setState que vai atualizar o carrinho
      this.setState({
        cart: updatedCart,
      });

      //Esse comando faz com que o carrinho mantenha o valor mesmo atualizando a página.
      //Sem esse comando quando o carrinho é atualizado ele não mantem a quantidade de produtos.
      window.localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      
    },
  };

  // Isso é uma outra função 

  
  componentDidMount() {
    let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));

    if (cartItems != null) {
      this.setState({
        cart: [...cartItems],
      });
    }
  }
  

  render() {
    return (
      <ShoppingCartContext.Provider value={this.state}>
        <div>
          <Header />
          <Carousel />
          <Showcase />
          <Newsletter />
          <Footer />
         
          
        </div>
      </ShoppingCartContext.Provider>
    );
  }
}

export default App;
