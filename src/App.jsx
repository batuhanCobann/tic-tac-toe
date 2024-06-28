import { useState } from 'react'
import { Header } from './components/Header';
import './App.css'
import { Bord } from './components/bord';

function App() {
  const [nextPlayer, setNextPlayer] = useState('X');
  const [hasWinner, setHasWinner] = useState(false);



  return (
    <>
      <Header nextPlayer={nextPlayer} hasWinner={hasWinner} />
      <Bord nextPlayer={nextPlayer} setNextPlayer={setNextPlayer} hasWinner={hasWinner} setHasWinner={setHasWinner} />

    </>
  )
}

export default App
