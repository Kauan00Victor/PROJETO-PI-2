import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Perfil() {
  const { id } = useParams();
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const handleTogglePasswordReset = () => {
    setShowPasswordReset(!showPasswordReset);
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
          <input id="password-input" type="password" />
          <button>Confirmar</button>
        </div>
      )}
    </section>
  );
}
