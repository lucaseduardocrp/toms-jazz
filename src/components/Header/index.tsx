import { useState } from 'react';
import { Buttons } from '../Buttons';
import { HeaderContainer } from './styles';
import { MobileMenu } from '../Icons';

export function Header() {
  const[active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active)
  }

  return (
    <HeaderContainer>
      <nav>
        <h1><a href="">TOM'S</a></h1>
        <ul className={active ? "navlinks Open" : "navlinks Close"}>
          <li><a href="">Início</a></li>
          <li><a href="">Cursos</a></li>
          <li><a href="">Eventos</a></li>
          <li><a href="">Contatos</a></li>
        </ul>
    
        <Buttons text='SE INSCREVA' />

        <div className="mobileMenu" onClick={toggleMode}>
          <MobileMenu />
        </div>

      </nav>
    </HeaderContainer>
  );
}
