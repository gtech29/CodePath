import { useState } from "react";
import "./App.css";
// const apikey =
//   "live_07mK6K4yuFNIXKhRwvZt8F9vMi60ifgBICo8zatQWsHllLX8JukarcSmj1Sn9JXO";
const url = "https://api.thecatapi.com/v1/images/search";

function App() {
  const [catUrl, setCatUrl] = useState("");
  const getCat = () => {
    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
        console.log("Cats: ", cats);
        const catUrl = cats[0].url;
        setCatUrl(catUrl);
      })
      .catch((error) => console.log(error));
  };

  console.log("Cat URL: ", catUrl);


  return (
    <div className="app">
      <h1>Cat App</h1>
      <img src={catUrl} alt="" />
      <button onClick={getCat}>Generate Random Cat</button>
    </div>
  );
}

export default App;
