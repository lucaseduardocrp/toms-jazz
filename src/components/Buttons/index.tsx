import { Button } from './styles';

interface BtnProps{
  text: string;
}

export const Buttons = ({text}: BtnProps) => {
  return (
    <Button>{text}</Button>
  )
}

