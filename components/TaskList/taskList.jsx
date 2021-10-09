import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({tasks, editTask, doTask, deleteTaskHandler}) => {
    return (
        <div className="px-4 py-5 border-b rounded-t w-full sm:px-6">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {tasks?.map(({_id, name, status}) =>
                        <TaskItem key={_id}
                                  _id={_id}
                                  name={name}
                                  status={status}
                                  deleteTask={() => deleteTaskHandler(_id)}
                                  doTask={() => doTask(_id, status)}
                            // editTask={(name) => editTask(_id, name)}
                        />
                    )}
                </ul>
            </div>
        </div>

    );
};

export default TaskList;
