import { createContext, useState, useEffect } from "react"
import { getCategories } from "../resources/firebase";


export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        getCategories().then((cat) => {
        setCategories(cat)
        })
        
    }, [])

    return (
        <CategoryContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoryContext.Provider>
    )
}

