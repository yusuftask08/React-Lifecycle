import { useState, useEffect } from 'react'
function App() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('state güncellendi :>> ')

    }, [number])
    useEffect(() => {
        console.log('componen mount edildi :>> ');
        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="App">
            <h1> {number} </h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    );
}

export default App;
