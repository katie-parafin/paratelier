import { createFileRoute, Link } from "@tanstack/react-router";
import { items, unreleasedItems } from "../items";
import { Item, UnreleasedItem } from "../components/Item";
import { Items } from "../components/items";
import { styled } from "styled-components";

const Home = () => {
  return (
    <Container>
      <Items>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Items>
      <SectionHeader>Anticipated drops</SectionHeader>
      <Items>
        {unreleasedItems.map((item) => (
          <UnreleasedItem key={item.id} item={item} />
        ))}
      </Items>
      <BottomBanner>
        <BottomLeft>
          <BottomText>Created at</BottomText>
          <Image src={"../../public/camp.png"} />
        </BottomLeft>
        <SiteLink>
          <a href="https://parafin.com" target="_blank">
            Parafin ↗
          </a>
        </SiteLink>
      </BottomBanner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  display: flex;
  flex-wrap: wrap;
`;

const SectionHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Route = createFileRoute("/")({
  component: Home,
});

const BottomBanner = styled.div`
  height: 200px;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0px;
`;

const SiteLink = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomText = styled.div`
  font-size: 24px;
  font-weight: 500;
  display: inline-block;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const BottomLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
