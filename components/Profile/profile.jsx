import React from 'react';

const Profile = ({name, email, logout, editUser, deleteUser}) => {
    return (

        <div className="shadow-lg rounded-2xl w-80 p-4 bg-white dark:bg-gray-800">
            <div className="flex flex-row items-start gap-4">
                <img src="https://www.tailwind-kit.com/images/person/1.jpg" className="w-28 h-28 rounded-lg"/>
                <div className="h-28 w-full flex flex-col justify-between">
                    <div>
                        <p className="text-gray-800 dark:text-white text-xl font-medium">
                            {name}
                        </p>
                        <p className="text-gray-400 text-xs">
                            {email}
                        </p>
                    </div>
                    <div className="rounded-lg w-full">
                        <button type="button" onClick={logout}
                                className="w-full px-4 py-2 text-base border rounded-lg bg-pink-500 text-white hover:bg-pink-700 ">
                            Log out
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-6">
                <button type="button" onClick={editUser}
                        className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
                    Edit
                </button>
                <button type="button" onClick={deleteUser}
                        className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-red-500 hover:bg-red-700 ">
                    Delete
                </button>
            </div>
        </div>

    );
};

export default Profile;
