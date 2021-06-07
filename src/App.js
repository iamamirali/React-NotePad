import React, { useState } from "react";
import Form from "./form";
import Notes from "./notes";
import { useGlobalContext } from "./context";
import { FaPlus } from "react-icons/fa";

function App() {
  const { addClicked, setAddClicked, plus, setPlus } = useGlobalContext();

  const inputAdder = () => {
    setAddClicked(true);
    setPlus(false);
  };

  return (
    <section className="container">
      <main>
        <h1 className="title">NotePad</h1>
        <div className="addPart">
          {plus && (
            <button className="addBtn" onClick={inputAdder}>
              <FaPlus />
            </button>
          )}
          {addClicked && <Form />}
          <Notes />
        </div>
      </main>
    </section>
  );
}

export default App;
