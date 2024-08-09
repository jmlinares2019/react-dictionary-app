import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Entry(props){

    let result = props.result

    return (
        result?.length ?
            result.map((entry) => (
                <div id="entry">
                    <div className="container">
                        <h2 className="entry-heading">{entry?.word}</h2>
                        <h3 className="section-heading">Pronunciation</h3>
                        <ol className="pronunciations-list">
                        {entry.phonetics.map((item, index) => (
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
                        ))}
                        </ol>
                        <h3 className="section-heading">Meaning</h3>
                        { entry?.meanings.map(({definitions, partOfSpeech, antonyms, synonyms}, index) => (
                        <div key={index} className="meaning-grammar-class">
                            <h4 id={`grammar-class-${index +1}`} className="grammar-class">{partOfSpeech}</h4>
                            <ol className="meanings-list">
                            { definitions.map(({definition, example}, index) => (
                            <div key={index} className="meaning-item">
                                <li>{definition}</li>
                                { example ?
                                <div className="meaning-example" dangerouslySetInnerHTML={{__html: example.replaceAll(entry.word, `<span class="searched-word">${entry.word}</span>`)}} />
                                : ""}
                            </div>
                            ))}
                            </ol>
                            
                            { synonyms?.length ?
                            <> 
                            <h5 className="synonyms-heading">Synonyms</h5> 
                            <div className="synonyms-list">
                            {
                            synonyms?.map((synonym, index) => (
                                <div key={index} className="synonym-item">
                                    <span>{synonym}</span>
                                </div>
                            ))
                            }
                            </div>
                            </>
                            : "" }
                            
                            { antonyms?.length ?
                            <>
                            <h5 className="antonyms-heading">Antonyms</h5>
                            <div className="antonyms-list">
                            {
                            antonyms?.map((antonym, index) => (
                                <div key={index} className="antonym-item">
                                    <span>{antonym}</span>
                                </div>
                            ))
                            }
                            </div>
                            </>
                            : "" }
                        </div>
                        ))}
                    </div>
                </div>
            ))
        :
        ""
    )
}

export default Entry