import * as actionTypes from './actionTypes'
import axios from "axios";

export const addIngredient = (name) => ({
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
})

export const removeIngredient = (name) => ({
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
})

export const setIngredients = (ingredients) => ({
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
})

export const fetchIngredientsFailed = () => ({
    type: actionTypes.FETCH_INGREDIENTS_FAILED
})

export const initIngredients = () => {
    return dispatch => {
        axios
        .get("https://reactjs-burger-prince.firebaseio.com/ingredients.json")
        .then((res) => {
            dispatch(setIngredients(res.data))
        })
        .catch((error) => {
            dispatch(fetchIngredientsFailed())            
        });
    }
}