import "./App.css";
import Button from '@mui/material/Button';

function App() {
  const handleButtonClick = (buttonName) => {
    alert(`Create button clicked!`);
    sendPostRequest();
  };

  const sendPostRequest = () => {
    fetch('https://6c2c35f3-e2ee-4329-ba42-45b8ca5f8c23-prod.e1-us-east-azure.choreoapis.dev/0dut/choreo-aws-backend/v1.0/create-component', {
      method: 'POST',
      body: JSON.stringify({
        // Your request payload here
        key: 'value'
      })
    })
    .then(response => response.json())
    .then(data => {
      const componentName = data.componentName;
      alert(`Component created: ${componentName}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
