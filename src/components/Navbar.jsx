import { TextInput, Button } from "evergreen-ui"

function Navbar(props){
    return (
        
        <nav className="navbar row">
            <div className="col-6">
                <h1>Wiktionary</h1>
            </div>
            <div className="col-6 searchbar">
                <TextInput 
                    placeholder="Search for a word"
                    onChange={props.handleChange} 
                    value={props.word} 
                />
                <Button 
                    className="search-btn"
                    appearance="primary"
                    onClick={props.handleSearch}
                    isLoading={props.loading}
                    disabled={props.loading}>
                    Search
                </Button>
            </div>
        </nav>
    )
}

export default Navbar