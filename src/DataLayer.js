// const { createContext, useContext, useReducer } = require("react")

import React,
{
    createContext,
    // eslint-disable-next-line 
    useContext,
    useReducer
}
from "react";

export const DataLayerContext=createContext();

export const DataLayer =({
    initialstate,reducer,children})=>(
        <DataLayerContext.Provider value={useReducer(reducer)}>
            {children}
        </DataLayerContext.Provider>
    )
export default DataLayer;
export const useDataLayervalue=()=>useContext( DataLayerContext)
