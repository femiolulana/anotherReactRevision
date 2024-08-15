import profilePic from './assets/profile.png'

function Card(){
    return (
        <>
            <div className="card">
                <img className="card-image" alt='Profile Picture' src={profilePic} ></img>
                <h2 className="card-title">Femi</h2>
                <p>Tech Video Dude and I Play Music</p>
            </div>
        </>
    )
}

export default Card