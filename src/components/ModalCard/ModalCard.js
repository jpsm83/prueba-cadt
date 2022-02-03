import React from "react";

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
    <div>
      <h2 className="modelTitle">Edit {typeOpt}</h2>
      <button onClick={closeModal}>close</button>
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
        {typeOpt === "Design" ? (
          <>
            <input
              type="number"
              name="wales"
              className=""
              value={wales}
              onChange={(e) => onChange(e)}
            />
            <input
              type="text"
              name="by"
              className=""
              value={user_id_last_update}
              onChange={(e) => onChange(e)}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="machine_name"
              className=""
              value={machine_name}
              onChange={(e) => onChange(e)}
            />
            <input
              type="number"
              name="machine_width"
              className=""
              value={machine_width}
              onChange={(e) => onChange(e)}
            />
          </>
        )}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
