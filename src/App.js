import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
      <div className="app">
        <PersonCard firstName="Jane" age={45} lastName="Doe" hairColor="Black" />
        <PersonCard firstName="John" age={88} lastName="Smith" hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      </div>
  );
}

export default App;
