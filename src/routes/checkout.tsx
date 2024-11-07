import { createFileRoute } from "@tanstack/react-router";
import { useCart } from "./__root";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { SelectedItem } from "../items";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(0);

  const onPurchase = () => {
    toast.dismiss();
    toast("You just got 100x more fashionable", {
      icon: "😉",
    });
    clearCart();
    navigate({ to: "/successfulPurchase" });
  };

  const totalPrice = useMemo(() => {
    return Math.max(
      cart
        .map((item) => item.price)
        .reduce((sum, current) => sum + current, 0) - discount,
      0
    );
  }, [cart, discount]);

  const groupedCart = useMemo(() => {
    const itemMap = new Map<string, { item: SelectedItem; quantity: number }>();
    cart.forEach((item) => {
      const key = `${item.id}-${item.selectedSize || "default"}`;
      if (itemMap.has(key)) {
        itemMap.get(key)!.quantity += 1;
      } else {
        itemMap.set(key, { item, quantity: 1 });
      }
    });
    return Array.from(itemMap.values()).sort((a, b) =>
      a.item.id.localeCompare(b.item.id)
    );
  }, [cart]);

  return (
    <CheckoutContainer>
      <Header>Checkout</Header>
      <ColumnContainer>
        <div>
          <InputSection>
            <InputSectionTitle>User Information</InputSectionTitle>
            <InputContainer>
              <label htmlFor="name">Full Name:</label>
              <Input type="text" id="name" name="name" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email:</label>
              <Input type="email" id="email" name="email" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="phone">Phone:</label>
              <Input type="tel" id="phone" name="phone" required />
            </InputContainer>
          </InputSection>

          <InputSection>
            <InputSectionTitle>Shipping Address</InputSectionTitle>
            <InputContainer>
              <label htmlFor="address">Address:</label>
              <Input type="text" id="address" name="address" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="city">City:</label>
              <Input type="text" id="city" name="city" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="zipCode">Zip Code:</label>
              <Input type="text" id="zipCode" name="zipCode" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="country">Country:</label>
              <Input type="text" id="country" name="country" required />
            </InputContainer>
          </InputSection>

          <InputSection>
            <InputSectionTitle>Payment Information</InputSectionTitle>
            <InputContainer>
              <label htmlFor="cardNumber">Card Number:</label>
              <Input type="text" id="cardNumber" name="cardNumber" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="expiryDate">Expiration Date:</label>
              <Input type="month" id="expiryDate" name="expiryDate" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="cvv">CVV:</label>
              <Input type="text" id="cvv" name="cvv" required />
            </InputContainer>
          </InputSection>
        </div>
        <SummarySection>
          <InputSectionTitle>Order Summary</InputSectionTitle>
          <ItemListContainer>
            {groupedCart.map((item) => (
              <p>
                {item.quantity} {item.item.title}{" "}
                {item.item.selectedSize && `- ${item.item.selectedSize}`}
              </p>
            ))}
          </ItemListContainer>
          {totalPrice >= 10 && (
            <ParafinCreditBox>
              <label htmlFor="cardNumber">Use Parafin credits - $10?</label>
              <Checkbox
                type="checkbox"
                id="toggle"
                onClick={() => setDiscount(discount == 0 ? 10 : 0)}
              />
            </ParafinCreditBox>
          )}
          <p>Total Amount: ${totalPrice}</p>
          <PurchaseButton onClick={onPurchase}>Purchase</PurchaseButton>
        </SummarySection>
      </ColumnContainer>
    </CheckoutContainer>
  );
};

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  /* When checked, change the background color */
  &:checked {
    accent-color: #000;
  }
`;

const ParafinCreditBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 100px;
`;

const ItemListContainer = styled.div`
  border: 1px solid #222;
  max-width: 60vh;
  padding: 0px 0 0 24px;
`;

const Input = styled.input`
  width: 80vh;
  height: 3vh;
`;

const PurchaseButton = styled.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  height: auto;
  width: 60vh;
  font-size: 24px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}`;

const Header = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const InputSectionTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const SummarySection = styled.div`
  padding: 40px 0 0 0px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const InputSection = styled.div`
  padding: 40px 0 0 80px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const CheckoutContainer = styled.div`
  padding: 32px 0 100px 80px;
`;

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});
