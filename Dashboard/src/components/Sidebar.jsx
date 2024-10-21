import "./Sidebar.css";

const Sidebar = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="sidebar">
      <h1>NASA Picture of the Day</h1>
      <div className="date-picker">
        <label htmlFor="date">Select a Date: </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          max={new Date().toISOString().split("T")[0]} // Ensure the date selected is not in the future
        />
        <p>
          Hi! Please select a date below and I&apos;ll show you the NASA picture
          of the day for that date. Enjoy exploring the universe!
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
