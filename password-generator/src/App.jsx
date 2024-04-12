import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [password, setPassword] = useState();
  const [upper, setUpper] = useState(false)
  const [lower, setLower] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [length, setLength] = useState(8)
  const [strength, setStrength] = useState(false)


  return (
    <div className="App">
      <div className="container">
        <div className="flex-between">
          <span>password</span>
          <button>Copy</button>
        </div>
        <div className="flex-between">
          <span>character lenghth</span>
          <span>{length}</span>
        </div>
        <input type="range" 
                style={{ width: "100%" }}
                min={8}
                max={25}
                step={1}
                onChange={(e)=>setLength(e.target.value)}
         />
        <div className="flex-evenly">
          <div>
            <div class="form-check mb-3">
              <input
                id="numbers"
                name="numbers"
                type="checkbox"
                class="form-check-input"
                value=""
              />
              <label id="numbers_label" class="form-check-label" for="numbers">
                Include Numbers
              </label>
            </div>
            <div class="form-check mb-3">
              <input
                id="symbols"
                name="symbols"
                type="checkbox"
                class="form-check-input"
                value=""
              />
              <label id="symbols_label" class="form-check-label" for="symbols">
                Include Special Character
              </label>
            </div>
          </div>
          <div>
            <div class="form-check mb-3">
              <input
                id="uppercase"
                name="uppercase"
                type="checkbox"
                class="form-check-input"
                value=""
              />
              <label
                id="uppercase_label"
                class="form-check-label"
                for="uppercase"
              >
                Include Upper Case
              </label>
            </div>
            <div class="form-check mb-3">
              <input
                id="lowercase"
                name="lowercase"
                type="checkbox"
                class="form-check-input"
                value=""
              />
              <label
                id="lowercase_label"
                class="form-check-label"
                for="lowercase"
              >
                Include Lower Case
              </label>
            </div>
          </div>
        </div>
        <div className="flex-between">
          <span>Strength</span>
          <span>moderate</span>
        </div>
        <div className="button">
          <button>Generate Password</button>
        </div>
      </div>
    </div>
);
}
export default App;
