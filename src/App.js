import { Confirmation } from "./components/Confirmation";

import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Confirmation>Do you confirm?</Confirmation>
            </header>
        </div>
    );
}

export default App;
