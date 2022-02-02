import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setItems] = useState([])


    const getCartItemsSize = () => {
        return cartItems.length
    }

    const isInCart = (itemId) => {

        return cartItems.find(i => i.item.id === itemId);
    }

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            setItems( cartItems.map(cartItem => {
                if (cartItem.item.id === item.id) {
                    return { ...cartItem, qty: qty + cartItem.qty}
                } else return cartItem
            }))
        }
        else { setItems([...cartItems, { item, qty }]) }
    }

    const removeItem = (itemId) => {
        
        setItems(cartItems.filter(i => i.item.id !== itemId))

    }

    const clearAll = () => {
        setItems = []
    }
    
    




    return (
        <CartContext.Provider value={{ items: cartItems, setItems, getCartItemsSize, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

