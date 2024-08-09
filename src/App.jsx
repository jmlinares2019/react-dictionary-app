import { useState } from 'react'
import { Button, TextInput } from 'evergreen-ui'
import Entry from './components/Entry';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ScrollspyTest from './components/ScrollspyTest';
import data from './assets/data'

function App() {
  
  const [word, setWord] = useState("")
  const [loading, setLoading] = useState(false)
  // const [result, setResult] = useState({})
  const [result, setResult] = useState([])

  function handleInput(e){
    setWord(e.target.value)
  }

  // fetching local data as test
  /* function searchWord(){
    setResult(data);
    console.log(data)
  } */

  const searchWord = async function(){
    if (word.length === 0) return
    setLoading(true)
    try{
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const data = await res?.json()
      console.log(data)
      setResult(data)
    } catch(e){
      console.log(e)
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className='App'>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar result={result}/>
          </div>
          <div className="col-10">
            <h1>Wiktionary</h1>
            <TextInput 
              placeholder="Search for a word"
              onChange={handleInput} 
              value={word} 
            />
            <Button 
              appearance="primary"
              onClick={searchWord}
              isLoading={loading}
              disabled={loading}>
              Search
            </Button>
            {/* <ScrollspyTest /> */}
            <Entry result={result} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App



