import { Buttons } from '../components/Buttons';
import { CursoCard } from '../components/CursoCard';
import { Main } from './styles';

export const Home = () => {
  return(
    <Main>
      <section className='home' id='home'>
        <div className="grid">
          <div className="homeText">
            <h2>
              Crie algo <br />
              <span>impactante</span> <img src="/three-dashes.svg" /> <br /> 
              com a música
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Buttons text='COMECE AGORA'/>
            <img className='arrow' src="/arrow-curve.svg" />
          </div>
          <img src="/hero-img.svg" alt="Desenho de músicos tocando" />
        </div>
      </section>

      <section className='cursosCard'>
        <div className="cardGrid">
          <CursoCard src='/piano.png' title='Piano popular' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.'/>
          <CursoCard 
            className='alternativeCard' 
            src='/clef.png' 
            title='Teoria musical' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.'
          />
          <CursoCard src='/sax.png' title='Sax alto' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.'/>
          <CursoCard 
            className='alternativeCard' 
            src='/drums.png' 
            title='Bateria' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.'
          />
        </div>
        <div className="cursoText">
          <h2>E <span>vários</span> Outros!</h2>
          <Buttons text='CONHECER CURSOS'/>
        </div>
      </section>
    </Main>
  )
}

