export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T>{
    dataState?:DataStateEnum,
    data?:T,
    errorMessage?:string
    
}

export enum ProductActionTypes{
    GET_ALL_PRODUCTS="[product] get all products",
    GET_AVAILABLE_PRODUCTS="[product] get available products",
    GET_SELECTED_PRODUCTS="[product] get selected products",
    SEARCH_PRODUCTS="[product] search products",
    NEW_PRODUCTS="[product] new products",
    SELECT_PRODUCTS="[product] select products",
    DELETE_PRODUCTS="[product] delete products",
    EDIT_PRODUCTS="[product] edit products",
}

export interface ActionEvent{
    type:ProductActionTypes,
    payload?:any
}