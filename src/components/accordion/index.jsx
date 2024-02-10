// * Style import
import "./styles.css";
// * Data import
import data from "./data";
// * Modules import
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  // * Single Selection
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // * Multiple Selection
  function handleMultiSelection(getCurrentId) {
    let cpMultipleSelected = [...multipleSelected];
    const findIndexOfCurrentId = cpMultipleSelected.indexOf(getCurrentId);

    // // console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpMultipleSelected.push(getCurrentId);
    } else {
      cpMultipleSelected.splice(findIndexOfCurrentId, 1);
    }

    setMultipleSelected(cpMultipleSelected);
  }
  // // console.log(selected, multipleSelected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Toggle Multi-Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multipleSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
