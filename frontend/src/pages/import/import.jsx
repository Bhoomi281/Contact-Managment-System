import React from 'react'
import Importicon from '../images/import.png'
import check from "../images/Check.png";
import fileicon from "../images/file.png"
import { useContext, useState } from "react";
import ContactContext from ''
import './import.css'
function Import() {
  const { getData } = useContext(ContactContext);
  const [state, setState] = useState(false);
  const [uploaded, setuploaded] = useState(false);
  const handleState = () => {
    setState(!state);
    // console.log(1)
  };

  const [file, setFile] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = { Authorization: localStorage.getItem("token") };
    let data = new FormData();

    data.append("contact", file[0]);

    const res = axios.post(
      "backend api endpoint foe uploading",
      data,
      { headers }
    );
    // window.location.reload(false)
    setState(false);
    setuploaded(true);

    setTimeout(() => {
      setuploaded(false);
      getData();
    }, 2000);
  };

  return (
    <>
      <div className="container" onClick={handleState}>
        <div className="icon-container">
          <img src={Importicon} alt="icon"></img>
        </div>
        <div>Import</div>
      </div>

      <div className="container-2">
        {state && (
          <div className="dialog">
            <div id="import-file" className="file-container">
              <div id="import-image">
                <img src={fileicon} />
              </div>
              <p className="import-text">Import File</p>
              <input
                id="file"
                type="file"
                onChange={(e) => {
                  setFile(e.target.files);
                }}
              />
              <button id="submit" onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </div>
        )}

        {uploaded && (
          <div className="dialog">
            <div id="import-icons" className="icons-container">
              <div id="icon-background">
                <img src={check} />
              </div>
              <div id="task-completed">
                <p className="completed-text">Import completed</p>
                <br />
                <p className="csv-text">Csv is Uploaded</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Import;