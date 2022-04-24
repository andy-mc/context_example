import { useDispatch } from "react-redux";
import {removeFace} from '../../actions/actions';

export const RemoveFaces = () => {
  const dispatch = useDispatch();
  const handleRemoveFace = () => {
    dispatch(removeFace())
  }
  
  return (
    <button onClick={handleRemoveFace}>
      Remove Face
    </button>
  );
}
