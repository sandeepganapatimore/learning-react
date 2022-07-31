import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }
// Forwardref takes ref as the second parameter in the functional parametere.

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})
export default FRInput