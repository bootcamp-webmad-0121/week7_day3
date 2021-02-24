const RouteParams = props => {

    console.log('-----ESTAS SON LAS PROPS DE REACT ROUTER DOM-----', props)

    const params = props.match.params

    return (
        <>
            <h1>Route Params!</h1>
            <p>Tienes que enviar a la API la temporada {params.season} y la prenda {params.clothe}</p>
        </>
    )
}

export default RouteParams