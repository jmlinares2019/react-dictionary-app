import { TextInput, Button } from "evergreen-ui"

function Navbar(props){
    return (
        <nav className="navbar">
            <div className="container-md">
                <div className="row navbar-wrapper">
                    <div className="col-sm-6">
                        <h1 className="title">
                            <a href="/">Wiktionary</a>
                        </h1>
                    </div>
                    <div className="col-sm-6 searchbar">
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar