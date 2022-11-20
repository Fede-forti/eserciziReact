import './App.css';

const name = 'Fede' + 'rica'
const hello  = (name) => {
  return <h1>Hello {name}</h1>
}

function App() {
  return (
    <div>
      {hello(name)}
      </div>
  );
}

export default App;
