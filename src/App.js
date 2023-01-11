import { useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card';


function App() {

  const points = useSelector(state => state.card.points)

  return (
    <div className="App" >
      <h1>Welcome To memory Game</h1>
      <h1>points: {points}</h1>
      <div className="playground">
        <Card />
      </div>
    </div>
  );
}

export default App;
