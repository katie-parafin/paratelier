import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import { useNavigate } from "@tanstack/react-router";

const SuccessfulPurchase = () => {
  const navigate = useNavigate();

  return (
    <SuccessContainer>
      Your items are on the way 🖤
      <ShopButton onClick={() => navigate({ to: "/" })}>I want more</ShopButton>
    </SuccessContainer>
  );
};

const SuccessContainer = styled.div`
  width: auto;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  flex-direction: column;
  padding-bottom: 100px;
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
  margin-top: 20px;
`;

export const Route = createFileRoute("/successfulPurchase")({
  component: SuccessfulPurchase,
});
