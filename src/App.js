// import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    let currentNum1 = document.querySelector("#num1").value;
    if (currentNum === "") return;
    let sum = parseInt(currentNum1) + parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
    document.querySelector("#num1").value = "";
  };
  const Sub = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    let currentNum1 = document.querySelector("#num1").value;
    if (currentNum === "") return;
    let sum = parseInt(currentNum) - parseInt(currentNum1);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
    document.querySelector("#num1").value = "";
  };

  const Mul = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    let currentNum1 = document.querySelector("#num1").value;
    if (currentNum === "") return;
    let sum = parseInt(currentNum) * parseInt(currentNum1);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
    document.querySelector("#num1").value = "";
  };
  const Div = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    let currentNum1 = document.querySelector("#num1").value;
    if (currentNum === "") return;
    let sum = parseInt(currentNum) / parseInt(currentNum1);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
    document.querySelector("#num1").value = "";
  };
  const Clear = (e) => {
    e.preventDefault();
    console.log("sum:", currentSum);
    document.querySelector("form").reset();
    setClear(true);
    setCurrentSum(0);
  };
  return (
    <div className="App">
      <div className="container">
        <div
          className="section shadow  w-50  m-auto d-flex flex-column my-5 p-2 p-md-5"
          style={{ background: "#F7F7F9" }}
        >
          <h1 className="text-center fs-2">Calculator</h1>

          <div className="row my-4">
            <div className="col">
              <label for="inputEmail4" className="form-label">
                Number 1
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Number eg: 2554"
                aria-label="First number"
                id="num"
              />
            </div>
            <div className="col">
              <label for="inputEmail4" className="form-label">
                Number 2
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Number eg: 2554"
                aria-label="second number"
                id="num1"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <button className="btn btn-secondary my-1" onClick={Add}>
                + Add
              </button>
            </div>
            <div class="col">
              <button className="btn btn-secondary my-1" onClick={Sub}>
                - Subtract
              </button>
            </div>
            <div class="col">
              <button className="btn btn-secondary my-1" onClick={Mul}>
                x Multiply
              </button>
            </div>
            <div class="col">
              <button className="btn btn-secondary my-1" onClick={Div}>
                / Divide
              </button>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-9">
              <div className="input-group">
                <div className="input-group-text">=</div>
                <input
                  type="text"
                  className="form-control "
                  id="inlineFormInputGroupUsername result"
                  placeholder="Result"
                  readOnly
                  value={currentSum}
                />
              </div>
            </div>
            <div className="col">
              <button className="btn btn-danger my-1 my-md-0" onClick={Clear}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
