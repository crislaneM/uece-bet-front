// RecSenha.js
import React, { useState } from 'react';
import StdInput from '../Util/StdInput';
import StdBtn from '../Util/StdBtn';
import StdTitle from '../Util/Title';


const RecSenha = () => {
  const [email, setEmail] = useState('');

  const handleRecSenha = () => {
    // Authentication logic here
    const formData = {
      email: email,
    };
    
    console.log(formData);
  };

  return (
    <div>
      <StdTitle />
      <p style={{fontSize: "medium"}}>Será enviado no email cadastrado um link para você criar sua nova senha</p>
      <form>
        <StdInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StdBtn label="Enviar" onClick={handleRecSenha} />
      </form>
    </div>
  );
};

export default RecSenha;