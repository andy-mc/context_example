import './App.css';
import { CoolFaces } from './components/CoolFaces';
import { AddFaces } from './components/AddFaces';
import { RemoveFaces } from './components/RemoveFaces';

function App() {
  return (
    <div className="App-Container">
      <div className="main">
        <section>
          <h1 className="margin-5">Manage State with Context</h1>
        </section>
        <section>
          <CoolFaces />
        </section>
        <section>
          <AddFaces />
          <RemoveFaces />
        </section>
      </div>
    </div>
  );
}

export default App;
