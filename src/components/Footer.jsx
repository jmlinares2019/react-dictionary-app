function Footer(){

    const year = new Date().getFullYear();
   
    return(
        <footer>
            <div className="container">
                <div className="copyright">
                    <p>{year} - Juan Manuel Linares</p>
                </div>
                <div className="credits">
                <p>Results provided by <a href="https://dictionaryapi.dev/">Free Dictionary API</a></p> 
                </div>
            </div>
        
        </footer>
    )
}

export default Footer