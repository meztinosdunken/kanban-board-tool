import React from 'react';

function Task({ task }) {
  return (
    <div className="task">
      <p>{task.name}</p>
      {/* Additional task details */}
    </div>
  );
}

export default Task;
