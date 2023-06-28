import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateUserPassword } from "../services/AuthService";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Perfil.css";

export default function Perfil() {
  const { id } = useParams();
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordResetError, setPasswordResetError] = useState(null);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleTogglePasswordReset = () => {
    setShowPasswordReset(!showPasswordReset);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handlePasswordReset = async () => {
    try {
      await updateUserPassword(newPassword);
      setPasswordResetError(null);
      setPasswordResetSuccess(true);
      setNewPassword("");
    } catch (error) {
      setPasswordResetError(error.message);
      setPasswordResetSuccess(false);
    }
  };

  return (
    <section className="userperfil">
      <h1>Perfil</h1>
      <p>UserId {id}</p>
      <p>Nome de Usuario: {username}</p>
      <ul className="ul">
        <li onClick={handleTogglePasswordReset}>Redefinir senha</li>
      </ul>
      {showPasswordReset && (
        <div>
          <input
            id="password-input"
            placeholder="Nova Senha"
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
          <div id="buttonSenha">
            <button onClick={handlePasswordReset}>Confirmar</button>
          </div>
          {passwordResetError && <p>{passwordResetError}</p>}
          {passwordResetSuccess && <p>Senha atualizada com sucesso!</p>}
        </div>
      )}
    </section>
  );
}
