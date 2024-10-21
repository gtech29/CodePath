import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import PictureGrid from "../components/PictureGrid";
import "./NasaDashboard.css"; // optional for styling

const NasaDashboard = () => {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const params = {
          api_key: import.meta.env.VITE_NASA_API_KEY,
        };
        if (selectedDate) {
          params.date = selectedDate; // Use the selected date to fetch a specific picture
        } else {
          params.count = 10; // Fetch multiple images if no date is selected
        }
        console.log(import.meta.env.VITE_NASA_API_KEY);

        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          { params }
        );
        setPictures(selectedDate ? [response.data] : response.data);
      } catch (err) {
        setError("Failed to fetch pictures, please try again later.");
      }
    };

    fetchPictures();
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="nasa-dashboard">
      <Sidebar
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <div className="content">
        <PictureGrid pictures={pictures} />
      </div>
    </div>
  );
};

export default NasaDashboard;
