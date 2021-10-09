import React from 'react';

const CreateTask = ({createTask}) => {
    return (
        <div className={"text-center w-96 mx-auto"}>
            <label htmlFor="email" className="block text-2xl font-medium text-gray-700">
                New Task
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    name="task"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="New Task..."
                />
            </div>
        </div>
    );
};

export default CreateTask;
