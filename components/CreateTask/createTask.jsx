import React, {useState} from 'react';

const CreateTask = ({createTask}) => {
    const [name, setName] = useState("")
    return (
        <div className={"text-center mx-auto"}>
            <form onSubmit={(e) => {
                e.preventDefault();
                createTask(name)
            }}>
                <label htmlFor="email" className="block text-2xl font-medium text-gray-700">
                    New Task
                </label>
                <div className="mt-2 ">
                    <input
                        type="text"
                        name="task"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow-sm w-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md py-2"
                        placeholder="New Task..."
                    />
                    <button type="button" onClick={() => createTask(name)}
                            className="px-4 py-2 text-base border rounded-lg bg-green-500 text-white hover:bg-green-700 ">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
