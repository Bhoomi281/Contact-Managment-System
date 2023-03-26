import React from "react";
import deletelogo from "../pages/images/deletelogo.png";
import ToolTip from "./tooltip/tooltip";
const Table = ({data})=>{
    return(
        <div>
        <table className="table">
                    <tr className="table-heading">
                        <td className="checkbox"> <input type="checkbox" /></td>
                        <td className="column">Name</td>
                        <td className="column">Designation</td>
                        <td className="column">Company</td>
                        <td className="column">Industry</td>
                        <td className="column">Email</td>
                        <td className="column">Phone number</td>
                        <td className="column">Country</td>
                        <td>Action</td>
                    </tr>
                {
                    data.map((item)=>
                    <tr className="table-data">
                        <td className="checkbox"><input type="checkbox" /></td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>....</td>
                        <td>...</td>
                        <ToolTip content={item.email}>
                        <td id="Email">{item.email}</td>
                        </ToolTip>
                        <td>...</td>
                        <td>...</td>
                        <td>
                        <img src={deletelogo} class="fa fa-pencil" aria-hidden="true"></img>
                            <img style={{backgroundColor: " #F81D1D"}} src={deletelogo} 
                            class=" fa fa-trash-o" aria-hidden="true"></img>
                        </td>
                    </tr>
                   
                    )
                }
                </table>
                </div>
    )
}

export default Table