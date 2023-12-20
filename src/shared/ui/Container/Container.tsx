import cls from './Container.module.scss';
import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode
}

export const Container: FC<ContainerProps> = ({ children}) => {
  return (
    <div className={cls.Container}>
      {children}
    </div>
  );
};