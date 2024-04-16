import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Alert from "./components/Alert";
import Button from "./components/Button";
import SongList from "./components/SongList";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSongClick = (index: number) => {
    setSelectedIndex(index);
  };

  const songs = [
    "Smarter",
    "Unforgiven",
    "Antifragile",
    "Perfect Night",
    "Easy",
  ];
  const videos = [
    "https://www.youtube.com/embed/KNexS61fjus?si=I-u25aXgvhP3Ow25",
    "https://www.youtube.com/embed/UBURTj20HXI?si=AHeRJvbKJ30PhQsu",
    "https://www.youtube.com/embed/pyf8cbqyfPs?si=pE4WgkSHsEo1aAfD",
    "https://www.youtube.com/embed/hLvWy2b857I?si=lSRv5Xmi6UBJ4xsb",
    "https://www.youtube.com/embed/bNKXxwOQYB8?si=mA3wcbaEZUN5m0tU",
  ];

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            Hello React! Let's not try to be too Reactive...
          </Alert>
        )}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>
          Click on the list and it will take you to the respective music video!
        </h2>
        <Button btnColor="pink" onClick={() => setAlertVisible(true)}>
          Press me!
        </Button>
        <br></br> <br></br>
        <SongList SongList={songs} onClick={handleSongClick} />
        <br></br> <br></br>
        {selectedIndex !== -1 && (
          <VideoPlayer videoUrl={videos[selectedIndex]} />
        )}
      </div>
    </>
  );
}

export default App;
