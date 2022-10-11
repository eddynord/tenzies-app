import React, {useState} from "react"
import Confetti from "react-confetti"
import Die from "./Die"
import {nanoid} from 'nanoid'
import '../src/index.css'



export default function App() {
 

  const [diceNum , setDiceNum] = useState(allNewDice)

  const [tenzies, setTenzies] = useState(false)


  
  React.useEffect(() => {
    const allHeld = diceNum.every(item => item.isHeld)
    const firstValue = diceNum[0].value
    const allSameValue = diceNum.every(item => item.value === firstValue)
    if(allHeld && allSameValue) {
      setTenzies(true)
     
    }

   

  }, [diceNum])



  function generateNewRoll() {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }
  }



  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10 ; i++) {
      newDice.push(generateNewRoll())
    }
    return newDice
    
  }

  


  function rollDice() {

    if(!tenzies) {

      setDiceNum(prevNum => prevNum.map(item => {
        return item.isHeld ? item : generateNewRoll()
      }))
    } else {
      setTenzies(false)
      setDiceNum(allNewDice())
    }

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
      {tenzies && <Confetti/>}
      
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container" >
                {diceElements}
      </div>
      <button className="roll-dice active" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      
      
    </main>
  )
 
}