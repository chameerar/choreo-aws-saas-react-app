import "./App.css";
import Button from '@mui/material/Button';

function App() {
  const handleButtonClick = (buttonName) => {
    alert(`${buttonName} button clicked!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SaaS AWS Test</h1>
        <div>
        <Button variant="outlined" color="primary" onClick={() => handleButtonClick("Button 1")}>
                Create component
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
