import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0);
  const [definition,setDefinition]=useState("");
  const [word,setWord]=useState("");
  
  const dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

const handleSearch = ()=>{
  //console.log("test");
  const wordMeaning = dictionary.find(dict=>dict.word.toLowerCase()===word.toLowerCase());
  //console.log(wordMeaning);
  if(wordMeaning){
    setDefinition(wordMeaning.meaning);
  } else{
    setDefinition("Word not found in the dictionary.");
  }

}

  return (
    <>
     <div>
      <h1>Dictionary App</h1>
     </div>
     <div>
      <input type='text' placeholder='Search for a word...'  onChange={(e)=>setWord(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
     </div>
     <div>
      <h3>Definition:</h3> <p>{definition}</p>
     </div>
    </>
  )
}

export default App
