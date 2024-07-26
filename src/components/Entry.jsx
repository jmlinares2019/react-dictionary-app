import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Entry(props){

    let entry = props.entry

    // removing phonetics with empty audio URL
    let pronunciations = entry?.phonetics?.filter((phonetic) => (
        phonetic.audio.length > 0
    ));

    return (
        entry?.word?.length ?
        <div className="container">
            <h2 className="entry-heading">{entry?.word}</h2>
            <h3 className="section-heading">Pronunciation</h3>
            <ol className="pronunciations-list">
            {pronunciations?.map((item, index) => 
                <>
                <li 
                    key={index}
                    className="pronunciation-item">
                    {item.text}
                </li>
                <AudioPlayer
                    src={item?.audio}
                    onPlay={e => console.log("playing")}
                />
                </>
            )}
            </ol>
            <h3 className="section-heading">Meaning</h3>
            { entry?.meanings.map(({definitions, partOfSpeech, antonyms, synonyms}, index) => (
            <div key={index} className="meaning-grammar-group">
                <h4>{partOfSpeech}</h4>
                <ol className="meanings-list">
                { definitions.map(({definition, example}, index) => (
                <div key={index} className="meaning-item">
                    <li>{definition}</li>
                    { example ? <p>{example}</p> : ""}
                </div>
                ))}
                </ol>
                
                { synonyms?.length ? <h5>Synonyms</h5> : "" }
                {
                synonyms?.map((synonym, index) => (
                    <a key={index}>{`${synonym} `}</a>
                ))
                }
                { antonyms?.length ? <h5>Antonyms</h5> : "" }
                {
                antonyms?.map((antonym, index) => (
                    <a key={index}>{`${antonym} `}</a>
                ))
                }
            </div>
            ))}
        </div>
        :
        ""
    )
}

export default Entry