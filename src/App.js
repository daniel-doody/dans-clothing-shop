
import "./index.css"
import Directory from "./components/directory";

const App = () => {
  const categories = [
    {
      title: "Hats",
      id: 1,
      CTA: "Shop Now",
      imageURL: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      title: "Jackets",
      id: 2,
      CTA: "Shop Now",
      imageURL: "",
    },
    {
      title: "Sneakers",
      id: 3,
      CTA: "Shop Now",
      imageURL: "",
    },
    {
      title: "Mens",
      id: 4,
      CTA: "Shop Now",
      imageURL: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      title: "Womens",
      id: 5,
      CTA: "Shop Now",
      imageURL: "",
    },
  ];

  return <Directory categories2={categories} />;
};

export default App;
