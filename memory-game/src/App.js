import React, { useState, useEffect } from "react";
import MemoryGame from "./components/MemoryGame/MemoryGame";

export default function App() {
  const [options, setOptions] = useState(null)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const json = localStorage.getItem('memorygamehighscore')
    const savedScore = JSON.parse(json)
    if (savedScore) {
      setHighScore(savedScore)
    }
  }, [])

  return (
    <div>
      <div className="container">
        <h1>Memory Game</h1>
        <div>High Score: {highScore}</div>
        <div>
          {options === null ? (
            <>
              <button onClick={() => setOptions(16)}>Go</button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  const prevOptions = options
                  setOptions(null)
                  setTimeout(() => {
                    setOptions(prevOptions)
                  }, 5)
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Main Menu</button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      ) : (
        <h2>Choose a difficulty to begin!</h2>
      )}
      <style jsx global>
        {`
    body {
      text-align: center;
      font-family: -apple-system, sans-serif;
    }
    .container {
      width: 1060px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    button {
      background: #00ad9f;
      border-radius: 4px;
      font-weight: 700;
      color: #fff;
      border: none;
      padding: 7px 15px;
      margin-left: 8px;
      cursor: pointer;
    }
    button:hover {
      background: #008378;
    }
    button:focus {
      outline: 0;
    }
    #cards {
      width: 1060px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .card {
      width: 200px;
      height: 200px;
      margin-bottom: 20px;
    }
    .card:not(:nth-child(4n)) {
      margin-right: 20px;
    }

    .c {
      position: absolute;
      max-width: 200px;
      max-height: 200px;
      width: 50ch;
      height: 50ch;
      cursor: pointer;
      will-change: transform, opacity;
    }

    .front,
    .back {
      background-size: cover;
    }

    .back {
      background-image: url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop);
    }

    .front {
      background-image: url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop);
    }
  `}
      </style>
    </div>
  )
}
