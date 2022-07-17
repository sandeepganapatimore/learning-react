import React from 'react'
// 1. Destructiong in the parameter
// const Greet = ({name,feature}) => {
//     // console.log(props)

//     return (
//         <div>
//             {/* <h1>Hello {props.name} is  {props.feature}</h1> */}
//             <h1>{name} is {feature}</h1>
//         </div>
//     );
// }




// 2. Destructuring in the function body
const Greet = props => {
    // console.log(props)
    const { name, feature } = props
    return (
        <div>
            {/* <h1>Hello {props.name} is  {props.feature}</h1> */}
            <h1>{name} is {feature}</h1>
        </div>
    );
}
export default Greet
