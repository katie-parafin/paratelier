import { Link } from "@tanstack/react-router";
import { ItemType, SelectedItem as SelectedItemType, Size } from "../items";
import styled from "styled-components";

export const Item = ({ item, size }: { item: ItemType; size?: Size }) => {
  return (
    <Link to="/item/$itemId" params={{ itemId: item.id }}>
      <ItemShell>
        <Image src={`../../public/${item.thumb}`} />
        <SoloImage src={`../../public/${item.solo}`} />
        <LabelShell>
        <Name>{item.title + (size ? " " + size : "")}</Name>
          {item.released !== false && <Price>${item.price}</Price>}
        </LabelShell>
      </ItemShell>
    </Link>
  );
};

export const UnreleasedItem = ({ item, size }: { item: ItemType; size?: Size }) => {
  return (
      <ItemShell>
        <UnreleasedImage src={`../../public/${item.thumb}`} />
        <SoloImage src={`../../public/${item.solo}`} />
        <LabelShell>
        <Name>{item.title + (size ? " " + size : "")}</Name>
          {item.released !== false && <Price>${item.price}</Price>}
        </LabelShell>
      </ItemShell>
  );
};


const ItemShell = styled.div`
  box-sizing: border-box;
  height: 450px;
  width: 300px;
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  }
`;

const LabelShell = styled.div`
  padding: 0px 16px;
  position: relative;
  top: -408px;
  display: flex;
  flex-direction: row;
`;

const Name = styled.p`
  width: 100%;
  text-align: left;
`;

const Price = styled.p`
  text-align: right;
`;

const UnreleasedImage = styled.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  opacity: 0.7; /* Set initial opacity for a faded look */
  transition: opacity 0.2s ease-in-out; /* Smooth transition for opacity change */

  &:hover {
    opacity: 0.5; /* Further fades out on hover */
  }
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
