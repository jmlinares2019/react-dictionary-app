import { Fragment, useState } from 'react'
import { Button, TextInput, Pane, Heading, Paragraph } from 'evergreen-ui'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './App.css'

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
      <h1>Hello</h1>

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

      {
        entry?.word?.length ?
        <Pane>
          <Heading>Word: {entry?.word}</Heading>
          <Heading>Phonetics</Heading>
          {entry?.phonetics?.map((item, index) => 
            <Pane key={index}>
              <Paragraph>{index + 1}. {item.text}</Paragraph>
              <AudioPlayer
                src={item?.audio}
                onPlay={e => console.log("playing")}
              />
            </Pane>
          )}
          <Heading>Meaning</Heading>
          { entry?.meanings.map(({definitions, partOfSpeech, antonyms, synonyms}, index) => (
            <div key={index} className="meaning-grammar-group">
              <h3>{partOfSpeech}</h3>
              { definitions.map(({definition, example}, index) => (
                <div key={index} className="meaning-item">
                  <p>{index + 1}. {definition}</p>
                  { example ? <p>{example}</p> : ""}
                </div>
              ))}
              { synonyms?.length ? <h4>Synonyms</h4> : "" }
              {
                synonyms?.map((synonym, index) => (
                  <a key={index}>{`${synonym}, `}</a>
                ))
              }
              { antonyms?.length ? <h4>Antonyms</h4> : "" }
              {
                antonyms?.map((antonym, index) => (
                  <a key={index}>{`${antonym}, `}</a>
                ))
              }
            </div>
          ))}
          
        </Pane>
        :
        ""
      }

    </div>
  )
}

export default App



