import Pronunciations from "./Pronunciations"

function Entry(props){

    let result = props.result

    return (
        result?.length ?
            result.map((entry, index) => (
                <div id={`entry-${index +1}`}>
                    <div className="container">
                        <h2 className="entry-heading">{entry?.word}</h2>
                        <div className="row">
                            {entry.phonetics ? 
                            <div className="col-lg-4 pronunciations">
                                <Pronunciations entry={entry} />
                            </div>
                            : 
                            ""
                            }
                            <div className="col-lg-8 meanings-etc">
                                <h3 className="section-heading visually-hidden">Meanings</h3>
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
                    </div>
                </div>
            ))
        :
        ""
    )
}

export default Entry