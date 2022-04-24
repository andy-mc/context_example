import {useContext} from 'react';
import './coolFaces.css';
import {GeneralContext} from '../../context/GeneralContext';

const CoolFaces = () => {
  const {state} = useContext(GeneralContext);
  const coolFaces = Array(state.coolFaces).fill('😎')
  
  return (
    <ul>
      {coolFaces.map((face, index) => (
        <li key={index}>
          <span className="faces">{face}</span>
        </li>
      ))}
    </ul>
  );
}

export {CoolFaces};
