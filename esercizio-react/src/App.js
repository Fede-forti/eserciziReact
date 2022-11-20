import './App.css';

const a = 15;
const b = 25;
const sum  = (a, b) => {
  return <h2>The result of the sum is {a + b}</h2>
}

function App() {
  return (
    <div>
      {sum(a,b)}
      </div>
  );
}

export default App;
