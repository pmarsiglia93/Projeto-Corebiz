import React from "react";
import axios from "axios";
import "./style.css";

const Newsletter = () => {
    const [NewsletterSucess, setNewsletterSuccess] = React.useState(false);

    const [name, setName] = React.useState("");
    const [nameError, setNameError] = React.useState(null);

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(null);

    function handleNameChange(input){
        setName(input.target.value);
    }

    function handleEmailChange(input){
        setEmail(input.target.value);
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function resetEmail(){
        setNewsletterSuccess(false);
    }

    function validateName(name) {
        return name.trim().length > 1;
      }

    function validateForm() {
        let formValidated = true;
    
        if (validateEmail(email)) {
          setEmailError(null);
        } else {            
          setEmailError("Por favor preencha o campo e-mail corretamente");
          formValidated = false;
        }
    
        if (validateName(name)) {
          setNameError(null);
        } else {
          setNameError("Por favor preencha o campo nome corretamente");
          formValidated = false;
        }
    
        return formValidated;
      }
    

    function submitForm(event) {
        event.preventDefault();

        if (!validateForm()) return;

        axios
            .post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
                name,
                email,
            })
            .then((res) => {
                setNewsletterSuccess(true);
            });
    }

    return (
        <div className="newsletter">
            <div className="newsletter-container">
                {NewsletterSucess ? (
                    <div className="success-newsletter">
                        <p>
                            <span>Seu e-mail foi cadastrado com sucesso!</span>
                            <br /> A partir de agora você receberá as novidades e ofertas exclusivas.
                        </p>
                        <button onClick={resetEmail}> Cadastrar novo e-mail</button>
                    </div>
                ) : (
                    <>
                    <h3>Participe de nossas news com promoções e novidades!</h3>
                    
                    <form className="form-newsletter" onSubmit={submitForm}>
                        
                        <input
                        placeholder="Digite seu nome"
                        id ="name"
                        className={nameError ? "form-input-error" : "form-input"}
                        onChange={handleNameChange}
                        />
                        {nameError && <p className="text-error">{nameError}</p>}

                        <input
                            placeholder="Digite seu email"
                            id="email"
                            className={emailError ? "form-input-error" : "form-input"}
                            onChange = {handleEmailChange}
                        />
                        {emailError && <p className="text-error">{emailError}</p>}

                        <button className="button-want">Eu Quero!</button>

                    </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Newsletter;