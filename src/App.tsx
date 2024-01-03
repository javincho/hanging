
import { useEffect, useState } from 'react'
import {letters} from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'
import {getRandomWord} from './helpers/getRandomWords'


function App() {

  const [word,setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose,setLose] = useState(false);
  const [won,setWon] = useState(false);

  useEffect( () => {
    if(attempts>=9){

      setLose(true);
     }
 },[attempts]);


 useEffect(()=>{
  const curremtHiddenWord = hiddenWord.split(' ').join('');
  if(curremtHiddenWord === word){

    setWon(true);
   }
  },[hiddenWord])




  const checkLetter = (letter: string) =>{

    if(lose) return;
    if(won) return;

    if(!word.includes(letter)){

      setAttempts(Math.min((attempts + 1),9));
      return;
      }

      const hiddenWordArray:string[] = hiddenWord.split(' ');

      for(let i = 0; i<= word.length-1; i++ ){

        if(word[i]===letter){

           hiddenWordArray[i]= letter;

        }

           setHiddenWord(hiddenWordArray.join(' '));
      }
  }


  const newGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);

  }
  

  return (
    
      <div className="App">

          {/*    */}
           <HangImage imageNumber = { attempts }/>

           {/*    */}
           <h3>{hiddenWord}</h3>

            {/*    */}
           <h3>intentos realizados: {attempts}</h3>

            {/* mensaje si perdio*/}
             {
              ( lose ) ? <h2>perdiste, la palabra era: {word}</h2>: ''
             }

              {/* mensaje si gano*/}
              {
              ( won ) ? <h2>Felicidades, ganaste!!</h2>: ''
             }

            {/*  botones  */}

           {
             letters.map((letter)=> (
                <button 
                onClick={() => checkLetter(letter) }
                key = {letter}>
                  
                  {letter}

                </button>
             ))
           }

            <br /> <br />
            <button onClick={newGame}>¿Quieres jugar de nuevo?</button>
           
            

      </div>
    
  )
}

export default App
