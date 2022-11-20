import './App.css';

const name = 'Federica'
const hello  = (name) => {
  return <h1>Hello {name}</h1>
}

function App() {
  return (
    <div>
      {hello()}
      </div>
  );
}

export default App;
