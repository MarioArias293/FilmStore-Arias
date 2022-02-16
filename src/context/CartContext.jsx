import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [id, setId] = useState('');
  const [enoughStock, setEnoughStock] = useState(true);

  const getCartItemsSize = () => {
    return cartItems.length;
  };

  const isInCart = (itemId) => {
    return cartItems.find((i) => i.item.id === itemId);
  };

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (
            cartItem.item.id === item.id &&
            cartItem.item.stock >= qty + cartItem.qty &&
            qty + cartItem.qty > 0
          ) {
            setEnoughStock(true);
            return { ...cartItem, qty: qty + cartItem.qty };
          }
          if (
            cartItem.item.id === item.id &&
            cartItem.item.stock < qty + cartItem.qty
          ) {
            setEnoughStock(false);
            return cartItem;
          } else return cartItem;
        })
      );
    } else {
      setEnoughStock(true);
      setCartItems([...cartItems, { item, qty }]);
    }
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((i) => i.item.id !== itemId));
  };

  const clearAll = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (sum, cartItem) => sum + cartItem.qty * cartItem.item.price,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, cartItem) => sum + cartItem.qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        setItems: setCartItems,
        getCartItemsSize,
        addItem,
        removeItem,
        clearAll,
        getTotalPrice,
        getTotalItems,
        id: id,
        setId,
        enoughStock,
        setEnoughStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
