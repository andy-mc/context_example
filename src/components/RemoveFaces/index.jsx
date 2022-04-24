import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import {removeFace} from '../../actions/actions';

export const RemoveFaces = () => {
  const {dispatch} = useContext(GeneralContext);
  const handleRemoveFace = () => {
    dispatch(removeFace())
  }
  
  return (
    <button onClick={handleRemoveFace}>
      Remove Face
    </button>
  );
}
