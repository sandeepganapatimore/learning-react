import React from 'react'
import { FaStar } from "react-icons/fa";
const Star = ({ selected = false })=> {
    return(
    <FaStar color={selected ? 'red' : 'grey'} />
    )
}
const createArray = (length:any) => [...Array(length)];

function StarRating({ totalstar = 5 } ) :React.ReactElement[]{
    console.log("Stars is the ")
    return createArray(totalstar).map((n, i) => <Star key={i} />);
}

export default StarRating