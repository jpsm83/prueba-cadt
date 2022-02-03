import React from "react";
import "./ModalCard.css";

export default function ModelCard(props) {
  const {
    name,
    courses,
    wales,
    user_id_last_update,
    machine_name,
    machine_width,
    closeModal,
    typeOpt,
    onSubmit,
    onChange,
  } = props;

  return (
    <div className="modalContainer">
      <h2>Edit {typeOpt}</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="formContainer">
        <div className="inputType">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            className=""
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="inputType">
          <label htmlFor="name">Courses: </label>
          <input
            type="number"
            name="courses"
            className=""
            value={courses}
            onChange={(e) => onChange(e)}
          />
        </div>
        {typeOpt === "Design" ? (
          <>
            <div className="inputType">
              <label htmlFor="name">Wales: </label>
              <input
                type="number"
                name="wales"
                className=""
                value={wales}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="inputType">
              <label htmlFor="name">By: </label>
              <input
                type="text"
                name="by"
                className=""
                value={user_id_last_update}
                onChange={(e) => onChange(e)}
              />
            </div>
          </>
        ) : (
          <>
            <div className="inputType">
              <label htmlFor="name">Machine Name: </label>
              <input
                type="text"
                name="machine_name"
                className=""
                value={machine_name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="inputType">
              <label htmlFor="name">Machine Width: </label>
              <input
                type="number"
                name="machine_width"
                className=""
                value={machine_width}
                onChange={(e) => onChange(e)}
              />
            </div>
          </>
        )}
        </div>
        <div className="buttonsContainer">
          <button type="submit">Update</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
