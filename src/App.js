import "./App.css";
import SearchBar from "./Components/MarvelApp";
import ErrorBoundary from "./Components/ErrorBoundry";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <SearchBar />
      </ErrorBoundary>
    </div>
  );
}

export default App;
