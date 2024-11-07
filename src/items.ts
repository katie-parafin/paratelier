export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
  ExtraLarge = "xl",
}
export interface ItemType {
  id: string;
  images: string[];
  thumb: string;
  solo: string;
  title: string;
  description: string;
  price: number;
  sizeOptions?: Size[];
  released?: boolean;
}

export interface SelectedItem extends ItemType {
  selectedSize?: Size;
  orderId: string;
}

export const items: ItemType[] = [
  {
    id: "101",
    images: ["hat3.jpg", "hat2.jpg", "hat4.jpg"],
    thumb: "hat3.jpg",
    solo: "hat4.jpg",
    title: "Mint cream cap",
    description: "Bring a touch of quiet luxury to any look.",
    price: 25,
  },
  {
    id: "102",
    images: ["yeti1.jpg", "yeti2.jpg"],
    thumb: "yeti1.jpg",
    solo: "yeti2.jpg",
    title: "Yeti Tumbler",
    description:
      "Ultra durable. Built for peak performance and every-day use. ",
    price: 50,
  },
  {
    id: "110",
    images: ["blackshirt1.jpg", "blackshirt2.jpg"],
    thumb: "blackshirt1.jpg",
    solo: "blackshirt2.jpg",
    title: "The Davis Tee",
    description: "Classic yet stylish streetwear",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    price: 45,
  },
  {
    id: "103",
    images: ["notebook.jpg", "happynotebook.jpg"],
    thumb: "happynotebook.jpg",
    solo: "notebook.jpg",
    title: "Joyous Tabula",
    description: "You feel so happy - so much you're already smiling.",
    price: 15,
  },
  {
    id: "121",
    images: ["arcteryx1.jpg", "arcteryx2.jpg", "arcteryx3.jpg"],
    thumb: "arcteryx1.jpg",
    solo: "arcteryx3.jpg",
    title: "Matt-teryx Jacket",
    description: "All-weather all-terrain luxury jacket",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    price: 200,
  },
  {
    id: "108",
    images: ["creamsweater1.jpg", "creamsweater2.jpg", "creamsweatersolo.jpg"],
    thumb: "creamsweater1.jpg",
    solo: "creamsweatersolo.jpg",
    title: "Parafin FC Pullover",
    description: "isn't josh so handsome ❤️",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    price: 45,
  },
  {
    id: "109",
    images: ["candle1.jpg", "candle2.jpg"],
    thumb: "candlethumb.jpg",
    solo: "candle2.jpg",
    title: "Hand Poured Candle",
    description: "Hand-poured in-house by new Parafin hires.",
    price: 8,
  },
  {
    id: "104",
    images: ["mayagreyshirt.jpg", "mayagreyshirt2.jpg"],
    thumb: "mayagreyshirt.jpg",
    solo: "mayagreyshirt2.jpg",
    title: "The Original",
    description: "Simplicity brings many pleasures.",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    price: 25,
  },

  {
    id: "105",
    images: ["parafinhacks.jpg", "parafinhacks1.jpg"],
    thumb: "parafinhacks.jpg",
    solo: "parafinhacks1.jpg",
    title: "Hacking Space",
    description: "From the 2024 Spring Collection.",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    price: 25,
  },
  {
    id: "107",
    images: ["greensweater1.jpg", "greensweater2.jpg", "greensweater3.jpg"],
    thumb: "greensweater1.jpg",
    solo: "greensweater2.jpg",
    title: "Forest Green Jumper",
    description: "Trademark green jumper",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    price: 50,
  },
  {
    id: "131",
    images: ["sweatpants1.jpg", "sweatpants2.jpg"],
    thumb: "sweatpants1.jpg",
    solo: "sweatpants2.jpg",
    title: "Limited Edition Sweatpants",
    description: "From Parafin's Luxury Fitness Line",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    price: 80,
  },

  {
    id: "120",
    images: ["babytee1.jpg", "babytee2.jpg"],
    thumb: "babytee1.jpg",
    solo: "babytee2.jpg",
    title: "Next Gen Onesie",
    sizeOptions: [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge],
    description: "For the next generation of creators",
    price: 50,
  },
  {
    id: "106",
    images: ["backpack1.jpg", "backpack2.jpg"],
    thumb: "backpack1.jpg",
    solo: "backpack2.jpg",
    title: "Nema Backpack",
    description: "Exclusively from our winter 2024 collection",
    price: 110,
  },
];

export const unreleasedItems = [
  {
    id: "200",
    images: ["blackstreetwear.jpg"],
    thumb: "blackstreetwear.jpg",
    solo: "comingsoon.jpg",
    title: "Obsidean wear",
    description: "Oversied",
    price: 50,
    released: false,
  },
  {
    id: "201",
    images: ["bluewindbreaker.jpg"],
    thumb: "bluewindbreaker.jpg",
    solo: "comingsoon.jpg",
    title: "Royal Windbreaker",
    description: "Alaskan influence with dual layer insulation",
    price: 80,
    released: false,
  },
  {
    id: "202",
    images: ["parafinhoodie.jpg"],
    thumb: "parafinhoodie.jpg",
    solo: "comingsoon.jpg",
    title: "Cobalt pullover hoodie",
    description: "Oversied",
    price: 50,
    released: false,
  },
];
