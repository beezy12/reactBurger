import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // state is being passed in as an object, so need to convert to an array to use .map
    // the .keys method turns the object keys into an array of keys as strings, the values are not part of the array
    // we then use reduce to flatten the array (?), in case there are no items to start with (?)
    console.log(Object.keys(props.ingredients))
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;
