import { Link } from 'react-router-dom';

import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';

import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  //const { user } = useAuth();

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

          <h2>Criar uma nova sala</h2>

          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar a sala
            </Button>
          </form>
          <p>
            Entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}