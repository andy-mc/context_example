import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import {addFace} from '../../actions/actions';

const AddFaces = () => {
  const {dispatch} = useContext(GeneralContext)
  
  const handleAddFace = () => {
    dispatch(addFace());
  }

  return (
    <button onClick={handleAddFace}>
      Add Face
    </button>
  );
}

export { AddFaces };
