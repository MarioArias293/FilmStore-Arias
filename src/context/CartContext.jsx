import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setItems] = useState([])
    const [id, setId] = useState("")


    const getCartItemsSize = () => {
        return cartItems.length
    }

    const isInCart = (itemId) => {
            return cartItems.find(i => i.item.id === itemId)
    }

    const addItem = (item, qty) => {
        
        if (isInCart(item.id)) {
            setItems( cartItems.map(cartItem => {
                if (cartItem.item.id === item.id && cartItem.item.stock >= ( qty + cartItem.qty) && ( qty +cartItem.qty ) > 0) {
                    return { ...cartItem, qty: qty + cartItem.qty}
                }
                if (cartItem.item.id === item.id && cartItem.item.stock < ( qty + cartItem.qty)) {
                    return alert("No hay stock suficiente"), cartItem
                    

                } else return cartItem
            }))
        }
        else { setItems([...cartItems, { item, qty }]) }
    }

    const removeItem = (itemId) => {        
        setItems(cartItems.filter(i => i.item.id !== itemId))
    }

    const clearAll = () => {
        setItems([])
    }

    const getTotalPrice = () => {
        return cartItems.reduce((sum, cartItem) => sum + cartItem.qty * cartItem.item.price, 0)    
    }

    const getTotalItems = () => {
        return cartItems.reduce((sum, cartItem) => sum + cartItem.qty , 0) 
    }         
    
    


    return (
        <CartContext.Provider value={{ items: cartItems, setItems, getCartItemsSize, addItem, removeItem, clearAll, getTotalPrice, getTotalItems, id: id, setId  }}>
            {children}
        </CartContext.Provider>
    )
}

