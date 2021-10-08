import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({tasks}) => {
    return (

        <div className="px-4 py-5 border-b rounded-t sm:px-6">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {tasks.map(({id, name, status}) =>
                        <TaskItem key={id} id={id} name={name} status={status}/>
                    )}
                </ul>
            </div>
        </div>

    );
};

export default TaskList;
