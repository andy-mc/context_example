import { useDispatch } from "react-redux";
import {addFace} from '../../actions/actions';

const AddFaces = () => {  
  const dispatch = useDispatch();
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
