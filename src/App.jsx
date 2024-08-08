import { useState } from 'react'
import { Button, TextInput } from 'evergreen-ui'
import Entry from './components/Entry';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ScrollspyTest from './components/ScrollspyTest';

function App() {
  
  const [word, setWord] = useState("")
  const [loading, setLoading] = useState(false)
  const [entry, setEntry] = useState({})

  function handleInput(e){
    setWord(e.target.value)
  }

  const searchWord = async function(){
    if (word.length === 0) return
    setLoading(true)
    try{
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const data = await res?.json()
      console.log(data)
      setEntry(data[0])
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
            <Sidebar entry={entry}/>
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
            <Entry entry={entry}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App



