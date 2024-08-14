import logo from "../../public/img/wiktionary_small.svg.png"

function NoEntry(props){

    const notFound = props.result; 
    
    return (
        <div id="no-entry" className="col-11 col-lg-12">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <p className="error-message">{notFound.message}</p>
                    <p className="error-suggestion">{notFound.resolution}</p>
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

export default NoEntry