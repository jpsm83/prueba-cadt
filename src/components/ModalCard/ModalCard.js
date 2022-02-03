import React from "react";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

export default function ModelCard(props) {
  const { closeModal, typeOpt, onSubmit, onChange } = props;

  const { courses, name, wales, updated, user_id_last_update } = props.data;

  return (
    <div>
      <h2 className="modelTitle">Edit {typeOpt}</h2>
      <button onClick={closeModal}>close</button>
      <p>{courses}</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          className=""
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="number"
          name="courses"
          className=""
          value={courses}
          onChange={(e) => onChange(e)}
        />
        <input
          type="number"
          name="wales"
          className=""
          value={wales}
          onChange={(e) => onChange(e)}
        />
        <input
          type="date"
          name="updated"
          className=""
          value={updated}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="by"
          className=""
          value={user_id_last_update}
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
