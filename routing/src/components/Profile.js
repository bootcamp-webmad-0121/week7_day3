const home = ({ loggedUser }) => {
    return (
        <div>
            <div>
                <h3>Welcome {loggedUser.name}</h3>
            </div>
        </div>
    )
}

export default home