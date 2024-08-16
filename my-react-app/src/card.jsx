import profilePic from './assets/profile.png'

function Card(prop){
    return (
        <>
            <div className="card">
                <img className="card-image" alt='Profile Picture' src={profilePic} ></img>
                <h2 className="card-title">Femi</h2>
                <p>Tech Video Dude and I Play Music</p>
                <p>Card was produced in {prop.yearProduced}</p>
                <p>Card is {prop.active?"yes":"no"}</p>
            </div>
        </>
    )
}

export default Card
//Always use propTypes and defaultProps