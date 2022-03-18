import React from "react"
import './style.css'

import emailIcon from '../../images/mail-icon.svg';
import callIcon from '../../images/call-icon.svg';
import corebizWhiteLogo from '../../images/logo-white.svg';
import vtexLogo from '../../images/logo-vtex.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                
                <div className="location">
                    <h4>Localização</h4>
                    <p>
                        Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
                        Alphavile SP <br />
                        brasil@corebiz.ag <br />
                        +55 11 3090 1039
                    </p>                
                </div>
                
                <div className="contatos">
                    <div className="buttons">
                        <a href="#">
                            <img src={emailIcon} alt="Contato"/><span>Entre em Contato</span>
                        </a>
                    </div>

                    <div className="buttons">
                        <a href="#">
                            <img src={callIcon} alt="Suporte"/><span>Fale Conosco</span>
                        </a>
                    </div>
                </div>
                
                <div className="info-img">

                    <div>                        
                        <p>Created by:</p>
                        <img src={corebizWhiteLogo} alt='Corebiz'/>                        
                    </div>

                    <div>                        
                        <p>Powered by:</p>
                        <img src={vtexLogo} alt='Vtex'/>                        
                    </div>

                </div>            
            
            </div>
        </div>
    )
}

export default Footer;