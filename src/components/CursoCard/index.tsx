import { Container } from './styles';

interface Props{
  src: string;
  alt?: string;
  title: string;
  text: string;
  className?: string;
}

export const CursoCard = ({className, src, alt, title, text}: Props) => {


  return(
    <Container className={className}>
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href=""><img className='arrowRight' src="/arrow-right.svg" /></a>
    </Container>
  )
}

