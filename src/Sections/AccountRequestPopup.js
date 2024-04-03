import React, { useState } from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 50%; /* Déplacer le popup à 50% de la hauteur de la fenêtre */
  left: 0;
  width: 100%;
  transform: translateY(10%); /* Centrer verticalement le popup */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const AccountRequestPopup = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    Prénom: '',
    email: '',
    phone: '',
    Matricule: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      Nom: '',
      Prénom: '',
      email: '',
      phone: '',
      message: '',
    });
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <PopupOverlay>
      <PopupContent>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <Title>Demande de compte</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="Nom">Nom de l'employé</Label>
          <Input
            type="text"
            id="Nom"
            name="Nom"
            value={formData.Nom}
            onChange={handleChange}
            required
          />
          <Label htmlFor="Prénom">Prénom de l'employé</Label>
          <Input
            type="text"
            id="Prénom"
            name="Prénom"
            value={formData.Prénom}
            onChange={handleChange}
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Label htmlFor="Matricule">Matricule </Label>
          <Input
            type="text"
            id="Matricule"
            name="Matricule"
            value={formData.Matricule}
            onChange={handleChange}
          />
          <div>
            <Button type="submit">Soumettre la demande</Button>
            <CancelButton type="button" onClick={handleCancel}>Annuler</CancelButton>
          </div>
        </Form>
      </PopupContent>
    </PopupOverlay>
  );
};

export default AccountRequestPopup;
