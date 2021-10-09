import React from 'react';

const TaskItem = ({_id, name, status,deleteTask}) => {
    return (
        <li key={_id}>
            <div className="w-full hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer" onDoubleClick={deleteTask}>
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <p className="text-md text-gray-700 dark:text-white md:truncate">
                            {name}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                            <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${status === "finished" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"} `}>
                                {status}
                            </p>
                        </div>
                    </div>
                    {/*<div className="mt-2 sm:flex sm:justify-between">*/}
                    {/*    <div className="sm:flex">*/}
                    {/*        <p className="flex items-center text-md font-light text-gray-500 dark:text-gray-300">*/}
                    {/*            January 7, 2020*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </li>
    );
};

export default TaskItem;
