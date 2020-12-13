import './App.css';
import TodayData from './TodayData';
import TodayOverview from './TodayOverview';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
