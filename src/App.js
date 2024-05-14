import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import image1 from "./posters/1.jpg";
import image2 from "./posters/Django Unchained Poster.jpg";
import image3 from "./posters/Fight Club.jpg";
import image4 from "./posters/MOVCB79365__33104.jpg";
import image6 from "./posters/download.jpg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [allImages, setAllImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image1,
    image6,
    image1,
    image2,
    image3,
    image4,
  ]);
  const [addedVal, setAddedVal] = useState(1);
  const [fromVisible, setFromVisible] = useState(0);
  const [toVisible, setToVisible] = useState(3);
  const [totalSlideCnt, setTotalSlideCnt] = useState(0); //sabit

  function handleForwardCarousel() {
    if (toVisible > allImages.length - addedVal) return;
    // if (totalSlideCnt === 6) {
    if (totalSlideCnt === allImages.length / 2 + 1) {
      //sabit from here
      setAddedVal((prevVal) => {
        return prevVal === 1 ? -1 : 1;
      });
      setTotalSlideCnt(0);
    } else {
      setTotalSlideCnt((prevCnt) => prevCnt + 1);
    } //sabit to here
    setFromVisible((prev) => prev + addedVal);
    setToVisible((prev) => prev + addedVal);
  }

  function handleBackCarousel() {
    if (fromVisible <= 0) return;
    setFromVisible((prev) => prev - addedVal);
    setToVisible((prev) => prev - addedVal);
  }

  useEffect(
    function () {
      let intervalId = setInterval(handleForwardCarousel, 2000);
      return () => {
        clearInterval(intervalId);
      };
    },
    [fromVisible]
  );

  return (
    <div className="container">
      <div className="arrow-icon-container">
        <ArrowBackIosNewIcon
          style={{
            color: "white",
            width: "50px",
            height: "50PX",
          }}
          onClick={handleBackCarousel}
        />
      </div>
      <div className="image-container">
        {allImages.slice(fromVisible, toVisible).map((image, i) => (
          <img src={image} className="carousel__images" key={i} />
        ))}
      </div>
      <div className="arrow-icon-container">
        <ArrowForwardIosIcon
          style={{
            color: "white",
            width: "50px",
            height: "50PX",
          }}
          onClick={handleForwardCarousel}
        />
      </div>
    </div>
  );
}
export default App;
