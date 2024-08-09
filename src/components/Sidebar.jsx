function Sidebar(props){

    const result = props.result
    
    return(
        result.length ?
            <div id="sidebar" className="grammar-class-list list-group">
            {result.map((entry) => ( 
                entry.meanings.map((meaning, index) => (
                    <a href={`#grammar-class-${index + 1}`} className="grammar-class list-group-item list-group-item-action">{meaning.partOfSpeech}</a> 
                ))
            ))}
            </div>
        :
        ""
    )
}

export default Sidebar