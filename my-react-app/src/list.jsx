import propTypes from "prop-types"
function List (props){

    const fruits = [{name:'apple',calories:95},
                    {name:'orange',calories:62}, 
                    {name:'pear',calories:101},
                    {name:"pear",calories:105},
                    {name:'banana',calories:105},
                    {name:"coconut",calories:283 }
                ];
    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit.calories}</li>)  
    return (
        <>
            <ul>{listItems}</ul>
        </>
    );

};










List.propTypes = {

}

List.defaultProps = {

}
export default List

//Always use propTypes and defaultProps