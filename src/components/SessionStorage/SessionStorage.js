import React, { useState, useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "react-bootstrap";

import "./sessionStorage.scss";

//to get the data from localhost
const getLocalItems = () => {
  let list = sessionStorage.getItem("list");
  if (list) {
    return JSON.parse(sessionStorage.getItem("list"));
  } else {
    return [];
  }
};

const SessionStorage = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    setItems([...items, data]);
    setData("");
  };

  const handleDelete = (id) => {
    setItems((item) => {
      return item.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  const handleUpdate = (id) => {
    let newEditItem = items.find((props, index) => {
      return index === id;
    });
    setData(newEditItem);
    setEditId(id);
  };

  const editItems = () => {
    let newItem = items;
    newItem.splice(editId, 1, data);
    setItems(newItem);
    setEditId(null);
    setData("");
  };

  //add data to localhost
  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(items));
  }, [items, data]);

  return (
    <form className="form">
      <div className="c_div">
        <input
          className="input"
          type="text"
          placeholder="Enter name.."
          value={data}
          onChange={handleChange}
        />
        {editId === null ? (
          <Button className="button" onClick={handleAdd}>
            Add
          </Button>
        ) : (
          <Button className="button" onClick={editItems}>
            Edit
          </Button>
        )}
        <ul>
          {items.map((value, id) => {
            return (
              <div key={id}>
                <div className="row">
                  {value}
                  <div>
                    <DeleteIcon onClick={() => handleDelete(id)} />
                    <EditIcon onClick={() => handleUpdate(id)} />
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </form>
  );
};

export default SessionStorage;
