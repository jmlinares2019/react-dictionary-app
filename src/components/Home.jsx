import logo from "../../public/img/wiktionary_small.svg.png"

function Home(){
    return (
        <div id="home" className="col-11 col-lg-12">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <p>Welcome to my Wiktionary project! This app is built using React over <a href="https://vitejs.dev/" target="_blank">Vite</a> and uses the <a href="https://dictionaryapi.dev/" target="_blank">Free Dictionary API</a> for its results.</p>
                    <p>Please be my guest and use the top right searchbar to search  for words to get their different meanings, pronunciations, synonyms and antonyms (if available from the API).</p>    
                </div>
                <div className="col-lg-4">
                    <img 
                        src={logo} 
                        alt="Wiktionary logo" 
                        className="wiki-logo"    
                    />
                </div>
            </div>
        </div>
    )
}

export default Home