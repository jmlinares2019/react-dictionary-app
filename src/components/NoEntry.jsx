function NoEntry(props){

    const notFound = props.result; 
    
    return (
        // <h2>{props.result.message}</h2>
        <div id="no-entry">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <p className="error-message">{notFound.message}</p>
                        <p className="error-suggestion">{notFound.resolution}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoEntry