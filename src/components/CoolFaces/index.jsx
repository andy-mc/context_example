import './coolFaces.css';

export const CoolFaces = () => {
  const faces_number = 2;
  const cool_faces = Array(faces_number).fill('😎')
  return (
    <ul>
      {cool_faces.map((face, index) => (
        <li key={index}>
          <span className="faces">{face}</span>
        </li>
      ))}
    </ul>
  );
}
