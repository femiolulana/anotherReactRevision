import propTypes from "prop-types"
function List (props){

    const fruits = [
        { id: 1, name: 'apple', calories: 95 },
        { id: 2, name: 'orange', calories: 62 },
        { id: 3, name: 'pear', calories: 101 },
        { id: 4, name: 'pear', calories: 101 },
        { id: 5, name: 'banana', calories: 105 },
        { id: 6, name: 'coconut', calories: 283 }
      ];
      
      // 1. Sort Alphabetically by Name
      //fruits.sort((a, b) => a.name.localeCompare(b.name));
      //console.log('Alphabetically by Name:', fruits);
      
      // 2. Sort Reverse Alphabetically by Name
      //fruits.sort((a, b) => b.name.localeCompare(a.name));
      //console.log('Reverse Alphabetically by Name:', fruits);
      
      // 3. Sort Numerically by Calories (Ascending)
      //fruits.sort((a, b) => a.calories - b.calories);
      //console.log('Numerically by Calories (Ascending):', fruits);
      
      // 4. Sort Reverse Numerically by Calories (Descending)
      //fruits.sort((a, b) => b.calories - a.calories);
      //console.log('Reverse Numerically by Calories (Descending):', fruits);


        // 5. Filter the 'fruits' array to create a new array 'lowCalorieFruits' 
        // that contains only the fruits with fewer than 100 calories.
        //const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);


        // 6. Filter the 'fruits' array to create a new array 'highCalorieFruits'
        // that contains only the fruits with 100 or more calories.
        // const highCalorieFruits = fruits.filter(fruit => fruit.calories >= 100);


      
      
    const listItems = fruits.map(fruit => <li key={fruit.id}>

                                                            {fruit.name}:
                                                            &nbsp;
                                                        <b>{fruit.calories}</b>
                                                            
                                                            </li>)  
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