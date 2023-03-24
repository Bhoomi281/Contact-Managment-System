import React from 'react'
import '../delete/delete.css'
import Deleteicon from '../images/delete.png'
function Delete({ selectContact, deleteUser }) {
  const [state, setState] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    deleteUser(selectContact);
    setDeleted(true);
    setState(false);
  };

  return (
    <>
      <div className="container" onClick={() => setState(!state)}>
        <div>
          <img src={Deleteicon} alt="delete" />
        </div>
        <div>Delete</div>
      </div>

      <div className="container-2">
        {state && (
          <div className="dialog">
            <div id="delete-file" className="wrapper">
              <div className="box">
                <img src={deleteIcon} />
              </div>
              <p style={{ fontSize: '24px' }}>Delete Contact</p>
              <p style={{ fontSize: '16px', color: '#2DA5FC' }}>
                Sure you want to delete this Contact?
              </p>
              <div className="box" id="delete-confirm">
                <button onClick={() => setState(false)}>Cancel</button>
                <p onClick={handleDelete}>OK</p>
              </div>
            </div>
          </div>
        )}

        {deleted && (
          <div className="dialog">
            <div id="delete-file" className="wrapper">
              <div className="box">
                <img src={check} />
              </div>
              <p style={{ fontSize: '24px' }}>Deleted Contact</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Delete;