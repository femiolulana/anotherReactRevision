import propTypes from 'prop-types'
function Demo(props){
    return (
    <>
    <h2>This is a demo  used to test prop key 1 which should be = {props.key1}</h2>
    <h1>So basically set the child element's functio0n to be able to recieve <br/> 
    
    a a prop object then pss in key values of the prop object as atrributes of the child objecy when making the parent object
    
    </h1>
    <h4>{props.key2}</h4>
    <h4>{props.key3}</h4>
    <h4>{props.key4}</h4>
    
    
    
    </>
)

    
}
Demo.propTypes = {
    key1 : propTypes.string,
    key2 : propTypes.number,
}

Demo.defaultProps = {
    key1 : "default",
    key2 : "default"
}

export default Demo;
//Always use propTypes and defaultProps