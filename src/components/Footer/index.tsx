import { Buttons } from '../Buttons';
import { Container } from './styles';

export default function Footer() {
  return(
    <Container>
      <div className="footerText">
        <img src="/logo.svg" alt="logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <ul className="navFooter">
        <li><a href="">Início</a></li>
        <li><a href="">Cursos</a></li>
        <li><a href="">Eventos</a></li>
        <li><a href="">Contato</a></li>
      </ul>
      <form action="post">
        <label>Receba materiais gratuitos no seu email</label>
        <input type="email" name="email" id="email" />
        <Buttons text='QUERO RECEBER'/>
      </form>
    </Container>
  )
}

