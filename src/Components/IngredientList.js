import React from "react";
import Ingredient from "./Ingredient";
let ingredient = {
    amount: 1,
    measurement: "cup",
    name: "sugar"
};
function IngredientsList({ list }) {
    return (
        <>
            <ul className="ingredients">
                {list.map((ingredient, i) => (
                    <Ingredient key={i} {...ingredient} />
                ))}
            </ul>


            <Ingredient {...ingredient} />
            {/* Below is the another way to declare to declare the Component */}
            {/* <Ingredient
                amount={ingredient.amount}
                measurement={ingredient.measurement}
                name={ingredient.name}
            /> */}
        </>
    );
};
export default  IngredientsList