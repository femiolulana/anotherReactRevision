function Greeter(props) {
    return (
        <>
            <h4>{props.isLoggedIn ? "Logged In" : "SignIn"}</h4>
        </>
    );
}

export default Greeter