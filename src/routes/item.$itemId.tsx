import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import styled from "styled-components";
import { items, SelectedItem, Size } from "../items";
import { BackIcon } from "../components/BackIcon";
import { useCart } from "./__root";
import toast from "react-hot-toast";
import "../fonts.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Item = () => {
  const { addToCart } = useCart();
  const { itemId } = useParams({ from: "/item/$itemId" });
  const item = items.find((item) => item.id === itemId);

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [size, setSize] = useState<Size | null>(null);

  if (!item) throw new Error("item not found");

  const onAddToCart = () => {
    if (item.sizeOptions && !size) {
      toast.dismiss();
      toast.error("Please select a size");
      return;
    }
    toast.dismiss();
    toast("Added to cart", {
      icon: "🛒",
    });
    addToCart({
      ...item,
      selectedSize: size,
      orderId: uuidv4(),
    } as SelectedItem);
  };

  return (
    <Shell>
      <Link to="/">
        <BackButton>
          <BackIcon />
        </BackButton>
      </Link>
      <ImagePicker>
        {item.images.map((image, index) => (
          <ImagePickerImageShell key={index} onClick={() => setImageIndex(index)}>
            <ImagePickerImage src={`../../public/${image}`} />
          </ImagePickerImageShell>
        ))}
      </ImagePicker>
      <Image src={`../../public/${item.images[imageIndex]}`} />
      <Details>
        <Header>{item.title}</Header>
        <Description>{item.description}</Description>
        {item.released != false && (<Price>$ {item.price}</Price>)}
        {item.sizeOptions && (
          <SizeOptions>
            <SizePrompt>Select a size:</SizePrompt>
            {item.sizeOptions.map((option) => (
              <button
                key={option}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: size === option ? "3px solid #222" : "1px solid #222",
                  borderRadius: "4px",
                  cursor: "pointer",
                  outline: "none",
                }}
                onClick={() => setSize(option)}
              >
                {option}
              </button>
            ))}
          </SizeOptions>
        )}
        <AddToCart onClick={onAddToCart}>Add to cart</AddToCart>
      </Details>
    </Shell>
  );
  
};

const SizePrompt = styled.div`
  margin: auto;
  font-size: 16px;
  font-weight: 400px;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
`;

const Shell = styled.div`
  display: flex;
  padding: 32px;
  gap: 32px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  transition: 0.2s;
`;

const ImagePickerImageShell = styled.div`
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  transition: 0.1s;

  &:hover {
    outline: 4px solid gray;
  }
`;

const ImagePickerImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ImagePicker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  height: 600px;
  border-radius: 16px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const AddToCart = styled.button`
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding-left: 25px;
  padding-right: 25px;
  height: 40px;
  width: 140px;
`;

export const Route = createFileRoute("/item/$itemId")({
  component: Item,
});
