import { Pane, Heading, Paragraph } from 'evergreen-ui'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Entry(props){

    let entry = props.entry
    console.log(entry)

    return (
        entry?.word?.length ?
        <>
        <Pane className='test'>Test</Pane>
        <Heading className='test'></Heading>
        <div className="container">
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
        </div>
        </>
        :
        ""
    )
}

export default Entry