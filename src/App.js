import React, {useState} from "react"
// import Confetti from "react-confetti"
import Die from "./Die"
import {nanoid} from 'nanoid'
import '../src/index.css'

export default function App() {
 

  const [diceNum , setDiceNum] = useState(allNewDice)

  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10 ; i++) {
      newDice.push({
          value: Math.ceil(Math.random() * 6), 
          isHeld: false,
          id: nanoid()
        })
    }
    return newDice
  }



  function rollDice() {
    setDiceNum(allNewDice())
  }
  
  
  function holdDice(id) {
    setDiceNum(prevNum => prevNum.map(item => {
      return item.id === id ? {...item, isHeld: !item.isHeld} : item
    }))
  }

const diceElements = diceNum.map(item => <Die 
                                              key={item.id} 
                                              id={item.id}
                                              value = {item.value}
                                              isHeld = {item.isHeld}
                                              toggle = {() => holdDice(item.id)}
                                              />
                                            )
return (
    <main>
      <div className="dice-container" >
                {diceElements}
      </div>
      <button className="roll-dice active" onClick={rollDice} >Roll Dice</button>

      
    </main>
  )
 
}