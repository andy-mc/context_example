import { useSelector } from "react-redux";
import './coolFaces.css';

const CoolFaces = () => {
  const coolFaces = useSelector((state) => state.coolFaces);
  const coolFacesArray = Array(coolFaces).fill('😎')
  
  return (
    <ul>
      {coolFacesArray.map((face, index) => (
        <li key={index}>
          <span className="faces">{face}</span>
        </li>
      ))}
    </ul>
  );
}

export {CoolFaces};
