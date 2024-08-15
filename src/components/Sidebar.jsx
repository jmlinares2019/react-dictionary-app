function Sidebar(props){

    const result = props.result
    
    return(
        result.length ?
            <div id="sidebar">
                <div className="grammar-class-list list-group">
                {result.map((entry, upperIndex) => (
                    <div 
                        key={upperIndex + 1}
                        className={`entry-wrapper-${upperIndex + 1}`}> 
                        { entry.meanings.map((meaning, lowerIndex) => ( 
                            <a
                                key={lowerIndex +1} 
                                href={`#grammar-class-${upperIndex + 1}-${lowerIndex + 1}`} 
                                className="grammar-class list-group-item list-group-item-action">
                                {meaning.partOfSpeech}
                            </a> 
                        )) }
                    </div>
                ))}
                </div>
            </div>
        :
        ""
    )
}

export default Sidebar