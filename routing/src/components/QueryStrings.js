import queryString from 'query-string'

const QueryStrings = props => {

    console.log('-----ESTAS SON LAS PROPS DE REACT ROUTER DOM-----', props)

    const queryStringsRaw = props.location.search

    const queryStringsParsed = queryString.parse(props.location.search)

    return (
        <>
            <h1>Query Strings!</h1>
            <p>Aquí están en crudo: {queryStringsRaw}</p>
            <hr></hr>
            <p>Aquí tras ser parseadas: {queryStringsParsed.city},  {queryStringsParsed.age}</p>
        </>

    )
}

export default QueryStrings