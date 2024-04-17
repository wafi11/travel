import Grid from "./components/home/Grid";
import { ImagesSliderDemo } from "./components/home/ImageSlider";
import { ScrollAnimation } from "./components/home/scollAnimation";
import Banner from "./components/home/Banner";

function App({}) {
  const imageList = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Collaborative Editi",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beach kutai",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Patanol",
    },
  ];

  return (
    <>
      <ImagesSliderDemo imageList={imageList} />
      <Grid />
      <ScrollAnimation />
      <Banner />
    </>
  );
}

export default App;
