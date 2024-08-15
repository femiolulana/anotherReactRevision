import propTypes from "prop-types"
function List (props){

    const fruits = ['apple','orange', 'pear',"pear",'banana',"coconut"];
    const listItems = fruits.map(fruit => <li>{fruit}</li>)  
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