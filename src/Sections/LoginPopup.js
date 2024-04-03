import React, { useState } from 'react';
import './LoginPopup.css'; // Assurez-vous de créer ce fichier CSS pour styliser votre popup

const LoginPopup = ({ handleClose, show }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion avec email et mot de passe
    console.log('Email:', email);
    console.log('Password:', password);
    // Remarque : ceci est juste un exemple, vous devrez implémenter la logique réelle de connexion
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
    handleClose(); // Fermer le popup de connexion
  };

  return (
    <div className={`login-popup ${show ? 'show' : ''}`}>
      <div className="login-popup-inner">
        <button className="close-btn" onClick={handleClose}>X</button>
        <h2>Connexion</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Adresse email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Se connecter</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Annuler</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
