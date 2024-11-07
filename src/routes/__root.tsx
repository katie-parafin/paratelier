import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import styled from "styled-components";
import { CartIcon } from "../components/CartIcon";
import { createContext, useContext, useState } from "react";
import { ItemType, SelectedItem } from "../items";
import { Toaster } from "react-hot-toast";

import "../fonts.css";

type CartContextType = {
  cart: SelectedItem[];
  addToCart: (item: SelectedItem) => void;
  removeFromCart: (item: SelectedItem) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const Root = () => {
  const [cart, setCart] = useState<SelectedItem[]>([]);

  const addToCart = (item: SelectedItem) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (item: SelectedItem) => {
    setCart(cart.filter((cartItem) => cartItem.orderId != item.orderId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      <Header>
        <Link to="/">
          <Logo>Paratelier</Logo>
        </Link>
        <Link to="/cart">
          <CartIconShell>
            <CartIcon />
          </CartIconShell>
        </Link>
      </Header>
      <Toaster />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("no cart context");
  return context;
};

const Header = styled.div`
  height: 80px;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 500;
`;

const CartIconShell = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 60px;
  border-radius: 100%;
  transition: 0.2s;
`;

export const Route = createRootRoute({
  component: Root,
});
