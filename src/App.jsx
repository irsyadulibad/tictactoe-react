import { useState } from 'react';
import BoxField from './BoxField';
import WinModal from './Modals/WinModal';
import Status from './Status';

function App() {
    const [values, setValues] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        if(values[i] || calculateWinner(values)) return;

        const nextValues = values.slice();
        nextValues[i] = xIsNext ? 'X' : 'O';

        setValues(nextValues);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setValues(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className="game-container">
            <Status player={xIsNext ? 'X' : 'O'} resetAction={resetGame} />
            <div className="board grid gap-5 grid-cols-3 grid-rows-3">
                {Array(9).fill(null).map((val, index) => (
                    <BoxField value={values[index]} key={index} onBoxClick={() => handleClick(index)} />
                ))}
            </div>
            <WinModal winner={calculateWinner(values)} playAction={resetGame} />
        </div>
    )
}

function calculateWinner(values) {
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i = 0; i < conditions.length; i++) {
        const [a, b, c] = conditions[i];

        if(values[a] == values[b] && values[a] == values[c])
            return values[a];
    }

    return false;
}

export default App
