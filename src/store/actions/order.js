import * as actionTypes from './actionTypes';
import axios from 'axios'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return disptach => {
        disptach(purchaseBurgerStart());
        axios
        .post("https://reactjs-burger-prince.firebaseio.com/orders.json?auth=" + token, orderData)
        .then((res) => {
            alert("Your order has been placed successfully!")
            disptach(purchaseBurgerSuccess(res.data.name, orderData))
        })
        .catch((error) => {
            disptach(purchaseBurgerFail(error))
        });
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrderStart())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios
        .get("https://reactjs-burger-prince.firebaseio.com/orders.json" + queryParams)
        .then((res) => {
            const fetchedOrders = [];
            for (let key in res.data) {
            fetchedOrders.push({ ...res.data[key], id: key });
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
        })
        .catch((error) => {
            dispatch(fetchOrdersFail(error));
            alert(error.response.data.error);
        });
    }
}
