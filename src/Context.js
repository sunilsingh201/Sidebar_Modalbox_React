import React,{useContext, useState} from 'react';

//create a context 
const AppContext = React.createContext();

//Provider Context
const AppProvider = ({children}) =>{
    const [ismodelopen,setisModalopen] = useState(false)
    const [issideopen,setissideopen] = useState(false)

    const Modelopen = () =>{
        setisModalopen(true)
    }
    const Modelclose = () =>{
        setisModalopen(false)
    }
    const Sideopen = () =>{
        setissideopen(true)
    }
    const Sideclose = () =>{
        setissideopen(false)
    }
    return <AppContext.Provider value={{
        ismodelopen,
        issideopen,
        Modelopen,
        Modelclose,
        Sideopen,
        Sideclose
    }}>{children}</AppContext.Provider>
}

//Custom Hook

export const useGlobalContext = () =>{
    return useContext(AppContext)
}


export {AppContext,AppProvider}