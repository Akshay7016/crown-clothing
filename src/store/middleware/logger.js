// If we want to use custom logger then use this "loggerMiddleware" in store.js

export const loggerMiddleware = (store) => (next) => (action) => {
    // If there is no action type
    if (!action.type) {
        return next(action);
    }

    console.log("type: " + action.type);
    console.log("payload: " + action.payload);
    console.log("current state: " + store.getState());

    next(action);

    console.log("next state: " + store.getState());

}