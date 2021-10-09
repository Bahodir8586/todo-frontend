import Head from 'next/head'
import axios from "../components/axios";
import {useRouter} from "next/router";
import Profile from "../components/Profile";
import Cookies from 'js-cookie'
import TaskList from "../components/TaskList";
import CreateTask from "../components/CreateTask";

export async function getServerSideProps(context) {
    const jwt = context.req.headers.cookie?.split(';')[1]?.split('=')[1]
    if (!jwt) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    const response = await fetch("http://localhost:5000/api/users", {
        headers: {
            'Authorization': `Bearer ${jwt}`
        },
    })
    const data = await response.json()
    if (data.status === "error") {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    return {
        props: {
            user: data.data.user,
            tasks: data.data.user.tasks
        }
    }
}

export default function Home({user, tasks}) {
    const router = useRouter()
    const logoutHandler = () => {
        axios.get('/users/logout',).then(response => {
            Cookies.remove('token')
            router.replace('/')
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteUser = () => {
        axios.delete('/users').then(response => {
            console.log(response)
            router.replace('/')
        }).catch(error => {
            console.log(error)
        })
    }

    const createTask = (taskName) => {
        axios.post('/tasks', {name: taskName, status: "todo"}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    const doTask = (_id, status) => {
        console.log(status)
        const newStatus = status === "todo" ? "finished" : "todo"
        console.log(newStatus)
        axios.patch(`/tasks/${_id}`, {status: newStatus}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    const editTask = (_id, name) => {
        axios.patch(`/tasks/${_id}`, {name}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteTask = (_id) => {
        console.log(_id)
        axios.delete(`/tasks/${_id}`).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={'container p-4 bg-gray-50 min-h-screen flex'}>
                <Profile name={user.name}
                         email={user.email}
                         logout={logoutHandler}
                         editUser={() => {
                         }}
                         deleteUser={deleteUser}
                />
                <div className={"w-full mb-8"}>
                    <CreateTask createTask={(taskName) => createTask(taskName)}/>
                    <div className={"flex w-full"}>
                        <TaskList tasks={tasks?.filter(task => task.status === "todo")}
                                  deleteTaskHandler={(_id) => deleteTask(_id)}
                                  doTask={(_id,status) => doTask(_id,status)}
                                  editTask={(_id, name) => editTask(_id, name)}
                        />
                        <TaskList tasks={tasks?.filter(task => task.status === "finished")}
                                  deleteTaskHandler={(_id) => deleteTask(_id)}
                                  doTask={(_id, status) => doTask(_id, status)}
                                  editTask={(_id, name) => editTask(_id, name)}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
