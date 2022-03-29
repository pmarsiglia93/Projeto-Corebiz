import React from 'react'
import Axios from 'axios'
import './style.css'
import ShoppingCartContext from '../../contexts/ShoppingCartContext';
import fullStar from "../../images/full-star.svg";
import emptyStar from "../../images/empty-star.svg";

class Showcase extends React.Component {
    state = { 
        products: []
     }

    //Puxando a API
     async componentDidMount() {
        Axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(res => {
                let products = res.data;
                this.setState({products})
            })
    }

    //Ele vai pegar a imagem de uma estrela, dependendo da quantidade de estrelas da API
    starsComplete(starsCount) {
        let starsList = []

        for(let i = 1;i <= 5; i++)
        {
            starsList.push(<img key={"star" + i} src={i <= starsCount ? fullStar : emptyStar} alt={"Star"}/>)
        }

        return starsList;
    }

    //Organizando o valor do produto
    convertNumber(price)
    {
        const convertedNumber = price / 100;
        return convertedNumber.toFixed(2);
    }

    render() { 
        return ( 
            <ShoppingCartContext.Consumer>
                {({cart, addProducts}) => (
                    <div className="showcase">
                        <div className="container-showcase">
                        <h1 className="title">Mais Vendidos</h1>
                        <hr />
                            <ul className="products">
                                { 
                                    //map, roda essa lista de produtos.
                                    //parecido com um for
                                    this.state.products.map((product) => 
                                        
                                        <li key={product.productName} className="product">

                                            <img src={product.imageUrl} alt="Product Image" />
                                    
                                            {product.listPrice ? <div className="flag-discount"></div> : null }

                                            <div className="card-info">
                                                
                                                {/*Nome do Produto*/}
                                                <p className="product-name">{product.productName}</p>
                                                    
                                                {/*Estrelas de avaliação*/}
                                                    <div className="stars">
                                                        { this.starsComplete(product.stars) }
                                                    </div>
                                                    
                                                {/*Valor sem desconto*/}
                                                <p className="old-price">{product.listPrice != null ? "de R$ " + this.convertNumber(product.listPrice) : null }</p>
                                                
                                                {/*Valor Total do Produto*/}
                                                <p className="current-price">por R$ {this.convertNumber(product.price)}</p>

                                                {/*Parcelamento*/}
                                                <p className="installments">{product.installments.length > 0 ? "ou em " + product.installments[0].quantity + "x de R$ " + this.convertNumber(product.installments[0].value) : null }</p>
                                                
                                                {/*Botão de comprar*/}
                                                <button className="buy" onClick={() => addProducts(product)}>Comprar</button>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div> 
                )}
                {/*O consumer está usando as coisas do Provider*/}
            </ShoppingCartContext.Consumer>
        );
    }
}
 
export default Showcase;
