import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/class_component/Greet";

function App() {
  return (
    <div className="App">
      {/* <h1>Class Component</h1>
      <Greet surname="konahamaru" /> */}
      <button
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?text= https://mu-dev.c2cassets.com/"
          )
        }
      >
        {" "}
        Open WhatsApp{" "}
      </button>
    </div>
  );
}

export default App;
