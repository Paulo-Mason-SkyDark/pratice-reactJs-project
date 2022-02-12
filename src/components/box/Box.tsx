import { ReactNode } from 'react';
import { Carton } from './style';
interface ICarton {
  children: ReactNode;
}


const Box = (props: ICarton) => {

  return (
    <Carton>
      {props.children}
    </Carton>
  );

}

export default Box;