function NoEntry(props){

    const notFound = props.result; 
    // console.log()
    return (
        // <h2>{props.result.message}</h2>
        <div id="no-entry">
            <p>{notFound.message}</p>
            <p>{notFound.resolution}</p>
        </div>
    )
}

export default NoEntry