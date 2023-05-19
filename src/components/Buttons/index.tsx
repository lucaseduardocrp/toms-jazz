import { Button } from './styles';

interface BtnProps{
  text: string;
  className?: string;
}

export const Buttons = ({text, className}: BtnProps) => {
  return (
    <Button className={className}>{text}</Button>
  )
}

