function Food(){

    const food1 = "rice"
    const food2 = "beans"
    const food3 = "yams"
    const food4 = "bread"

    return (
        <>
            <ul>
                <li>{food1}</li>
                <li>{food3}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </>
    );
}

export default Food;
//Always use propTypes and defaultProps