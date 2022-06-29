import axios from 'axios';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import Character from './components/Character'

const App = () => {
  const [charactersData, setCharactersData] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect (() => {
    axios.get(' https://swapi.dev/api/people/')
    .then(res => {
      setCharactersData(res.data)
      // console.log(res)
    })
    .catch(err => {

    })
  }, [])
  if(!charactersData){
  return(
    <div>loading...</div>
  )
}

// console.log(charactersData)
const AppStyle = styled.div`
 h1 {
  font-size: 4rem;
 }
`

  return (
    <AppStyle className="App">
      <h1 className="Header">Characters</h1>
    
      {charactersData.map(character => {
       return (
       <Character character = {character}/>
       )
      })} 

      {/* <Characters key = {charactersData.id} characterInfo = {charactersData}/> */}
    </AppStyle>
  );
}

export default App;
