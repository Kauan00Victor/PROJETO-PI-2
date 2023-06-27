import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateUserPassword } from "../services/AuthService";

export default function Perfil() {
  const { id } = useParams();
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordResetError, setPasswordResetError] = useState(null);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

  const handleTogglePasswordReset = () => {
    setShowPasswordReset(!showPasswordReset);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handlePasswordReset = async () => {
    try {
      // Chame a função de atualização de senha com a nova senha
      await updateUserPassword(newPassword);
      setPasswordResetError(null);
      setPasswordResetSuccess(true);
      setNewPassword("");
    } catch (error) {
      // Trate os erros de atualização de senha, se necessário
      setPasswordResetError(error.message);
      setPasswordResetSuccess(false);
    }
  };

  return (
    <section>
      <h1>Perfil</h1>
      <p>UserId {id}</p>
      <ul>
        <li onClick={handleTogglePasswordReset}>Redefinir senha</li>
      </ul>
      {showPasswordReset && (
        <div>
          <label htmlFor="password-input">Nova senha:</label>
          <input
            id="password-input"
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
          <button onClick={handlePasswordReset}>Confirmar</button>
          {passwordResetError && <p>{passwordResetError}</p>}
          {passwordResetSuccess && <p>Senha atualizada com sucesso!</p>}
        </div>
      )}
    </section>
  );
}
