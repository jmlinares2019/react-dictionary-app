function Footer(){

    const year = new Date().getFullYear();
   
    return(
        <footer>
            <div className="container">
                <div className="copyright">
                    <p>© {year} Juan Manuel Linares</p>
                </div>
                <div className="credits">
                <p>Results provided by <a href="https://dictionaryapi.dev/">Free Dictionary API</a> under the <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC BY-SA 3.0</a> license</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer