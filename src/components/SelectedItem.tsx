import { Link } from "@tanstack/react-router";
import { SelectedItem as SelectedItemType } from "../items";
import styled from "styled-components";
export const SelectedItem = ({
  item,
  quantity,
  onRemove,
}: {
  item: SelectedItemType;
  quantity: number;
  onRemove: (item: SelectedItemType) => void;
}) => {
  return (
    <SelectedItemShell>
      <Image src={`../../public/${item.images[0]}`} />
      <SoloImage src={`../../public/${item.solo}`} />
      <LabelShell>
        <TitleAndRemove>
          <div>
            {item.title + (item.selectedSize ? " - " + item.selectedSize : "")}
            <QuantityLabel>Quantity: {quantity}</QuantityLabel>
          </div>
          <RemoveButton
            onClick={(e) => {
              e.stopPropagation();
              onRemove(item);
            }}
          >
            -
          </RemoveButton>
        </TitleAndRemove>
      </LabelShell>
    </SelectedItemShell>
  );
};

const LabelShell = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -418px;
`;

const TitleAndRemove = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuantityLabel = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #555;
`;
const SelectedItemShell = styled.div`
  box-sizing: border-box;
  height: 450px;
  width: 300px;
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
`;

const RemoveButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
`;

const SoloImage = styled.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  position: relative;
  top: -401px;
  opacity: 0;
  z-index: 2;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;
