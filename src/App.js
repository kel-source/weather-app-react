import "./App.css";
import TodayOverview from "./TodayOverview";
import TodayData from "./TodayData";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div className="city-search">
          <form>
            <input
              className="city"
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              autoFocus
            />
            <input type="submit" className="btn btn-secondary" />
            <button type="button" className="btn btn-light" id="current-button">
              Current
            </button>
          </form>
        </div>
        <br />
        <TodayOverview />
        <TodayData />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
