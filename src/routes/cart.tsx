import { createFileRoute } from "@tanstack/react-router";
import { useCart } from "./__root";
import { Items } from "../components/Items";
import styled from "styled-components";
import toast from "react-hot-toast";
import { items, SelectedItem as SelectedItemType } from "../items";
import { SelectedItem } from "../components/SelectedItem";
import { useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Item } from "../components/Item";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const onRemoveFromCart = (item: SelectedItemType) => {
    toast.dismiss();
    toast("Removed from cart", {
      icon: "🛒",
    });
    removeFromCart(item);
  };

  const onCheckout = () => {
    navigate({ to: "/checkout" });
  };

  const totalPrice = useMemo(() => {
    return cart
      .map((item) => item.price)
      .reduce((sum, current) => sum + current, 0);
  }, [cart]);

  const groupedCart = useMemo(() => {
    const itemMap = new Map<string, { item: SelectedItemType; quantity: number }>();
    cart.forEach((item) => {
      const key = `${item.id}-${item.selectedSize || 'default'}`;
      if (itemMap.has(key)) {
        itemMap.get(key)!.quantity += 1;
      } else {
        itemMap.set(key, { item, quantity: 1 });
      }
    });
    return Array.from(itemMap.values()).sort((a, b) => a.item.id.localeCompare(b.item.id));
  }, [cart]);
  

  return (
    <CartContainer>
      <Header>Cart</Header>
      {cart.length > 0 && (
        <>
          <Items>
          {groupedCart.map(({ item, quantity }) => (
              <SelectedItem 
                key={`${item.id}-${item.selectedSize || 'default'}`} 
                item={item} 
                quantity={quantity} 
                onRemove={onRemoveFromCart} 
              />
            ))}
          </Items>
          <PriceSection>
            Total Price: ${totalPrice}
            <CheckoutButton onClick={onCheckout}>Checkout</CheckoutButton>
          </PriceSection>
        </>
      )}
      {cart.length == 0 && (
        <EmptyCartContainer>
          Need a wardrobe upgrade?
          <ShopButton onClick={() => navigate({ to: "/" })}>
            Take me shopping
          </ShopButton>
        </EmptyCartContainer>
      )}
    </CartContainer>
  );
};

const Header = styled.div`
  padding: 32px 0 0 32px;
  font-size: 32px;
  font-weight: 500;
`;

const EmptyCartContainer = styled.div`
  width: auto;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  flex-direction: column;
`;

const CartContainer = styled.div`
  padding-bottom: 100px;
`;

const PriceSection = styled.div`
  padding: 32px 250px 32px 32px;
  font-size: 28px;
  font-weight: 500;
  text-align: end;
  display: grid;
`;

const CheckoutButton = styled.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  height: auto;
  width: auto;
  font-size: 24px;
  margin-left: auto;
  margin-top: 18px;
`;
const ShopButton = styled.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  height: auto;
  width: auto;
  font-size: 24px;
  margin-top: 10px;
`;

export const Route = createFileRoute("/cart")({
  component: Cart,
});
