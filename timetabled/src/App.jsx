import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>
        This is a simple React-based calendar that displays events passed as
        props.
      </h2>
      <Calendar />
    </div>
  );
  
};

export default App;
