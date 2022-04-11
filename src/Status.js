import React from "react";

const Status = ({ todo, handleChange }) => {
  console.log("todo", todo);

  return (
    <div>

      <p style={{ margin: "25px" }}></p>
      <h3>Complted Todo</h3>
      <table className="table table-hover table-bordered table-striped">
        <thead className="tabHed">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {todo.slice(0, 10).map((ele, i) => { */}
          {todo.map((ele) => {
            if (ele.completed !== false) {
              return (
                <tr key={ele.i}>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={ele.completed}
                      onChange={() => {
                        handleChange(ele.id);
                      }}
                    />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Status;
