import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function LoginForm() {
  // Definir un state
  const [inputvalue, setinputvalue] = useState("");
  const navigate = useNavigate();
  //Comportement
  const handleClick= () =>{
    alert("Je viens de valider");
    
  }

  const handleChange = (event) => {

    setinputvalue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Bonjour ${inputvalue}`);
    setinputvalue("");
    navigate(`/order/${inputvalue}`);
  };
  
  // Affichage
  return (
      
    <form action="submit" onSubmit={handleSubmit}>
        
        <h1>Bienvenue Chez nous !</h1>
        <br/>
        <h2>Contactez-vous</h2>
        <label htmlFor="Nom" ></label>
        <input
          type="text"
          id="Nom"
          value={inputvalue}
          required
          placeholder="Entrez votre nom..."
          onChange={handleChange}
        />
      
      <button>Acceder a votre espace </button>
      {/* Add your components and routes here */}

    </form>
    
  );
}
