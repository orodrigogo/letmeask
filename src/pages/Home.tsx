import { useNavigate } from 'react-router-dom';

import illustrationImg from '../assets/illustration.svg';
import googleIconImg from '../assets/google-icon.svg';
import logoImg from '../assets/logo.svg';

import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    await signInWithGoogle()
    signInWithGoogle().then(() => navigate('/rooms/new'));
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}