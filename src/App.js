import { useState } from 'react';
import Counter from './Component/Counter'

function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className="App">
      {isVisible && <Counter />},
      <br />

      <button onClick={() => setIsVisible(!isVisible)}> Toggle Counter </button>
    </div>
  );
}

export default App;
