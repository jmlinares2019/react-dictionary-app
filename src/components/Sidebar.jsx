function Sidebar(props){

    const entry = props.entry;
    const meanings = props.entry.meanings;
    
    return(
        entry.word ?
        <div id="sidebar" className="grammar-class-list list-group">
        {meanings.map((meaning, index) => (
            <a href={`#grammar-class-${index + 1}`} className="grammar-class list-group-item list-group-item-action">{meaning.partOfSpeech}</a> 
        ))}
        </div>
        :
        ""
    )
}

export default Sidebar