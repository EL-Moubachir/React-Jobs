import React, { useState } from "react";
// import './LoginForm.css';
import LoginPage from "./LoginPage";

export default function LoginForm() {
  // Definir un state
  const [Nom, setNom] = useState("");
  
  //Comportement
  const handleClick= () =>{
    alert("Je viens de valider");
    
  }

  const handleChange = (event) => {

    setNom(event.target.value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    alert(`Bonjour ${Nom}`);
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
          value={Nom}
          required
          placeholder="Entrez votre nom..."
          onChange={handleChange}
        />
      
      <button>Acceder a votre espace </button>
      {/* Add your components and routes here */}
    </form>
  );
}
