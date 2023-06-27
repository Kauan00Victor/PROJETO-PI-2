import { getAuth, createUserWithEmailAndPassword, updatePassword , updateProfile, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { app } from './FirebaseConfig'

const auth = getAuth(app)

export async function login(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
      if (error.code == 'auth/wrong-password') {
        throw Error('Senha inválida')
      } else if (error.code == 'auth/user-not-found') {
        throw Error('Usuário não encontrado')
      }
    })
}

export async function cadastrar(email, senha, nome) {
  return await createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      // Atualizar o perfil do usuário com o nome fornecido
      return updateProfile(user, { displayName: nome })
        .then(() => user.uid);
    })
    .catch((error) => {
      // Tratar erros de cadastro, se necessário
      throw Error('Erro ao cadastrar usuário: ' + error.message);
    });
}

export async function recoverPassword(email) {
  return await sendPasswordResetEmail(auth, email)
    .then(() => {
      // Email de recuperação de senha enviado com sucesso
      return true;
    })
    .catch((error) => {
      // Tratar erros de recuperação de senha, se necessário
      throw Error('Erro ao enviar email de recuperação de senha: ' + error.message);
    });
  }

  export async function updateUserPassword(newPassword) {
    const user = auth.currentUser;
  
    try {
      await updatePassword(user, newPassword);
    } catch (error) {
      // Tratar erros de atualização de senha, se necessário
      throw new Error('Erro ao atualizar senha: ' + error.message);
    }
  }

export async function logout() {
  await signOut(auth);
}
