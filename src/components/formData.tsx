'use client'
import { useEffect, useState, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'


function FormData({ id }: any) {

    const [tasks, setTasks] = useState<any>(null)
    const [loading, setLoading] = useState<any>({})


    useEffect(() => {

        const fetchApi = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            const data = await res.json()

            data.length > 0 ? setTasks(data) : setTasks(null)
        }
        fetchApi()
    }, [id])

    const handleCompleted = async (task: any) => {
        setLoading((prevLoading: any) => ({
            ...prevLoading,
            [task.id]: true,
        }));

        // Simulate a delay of 2 seconds using setTimeout
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Update task.completed after the delay
        setLoading((prevLoading: any) => ({
            ...prevLoading,
            [task.id]: false,
        }));
        setTasks((prevTasks: any) =>
            prevTasks.map((t: any) =>
                t.id === task.id ? { ...t, completed: true } : t
            )
        );

    };


    const sortedTasks = tasks?.slice().sort((a: any, b: any) => {
        if (a.completed && !b.completed) {
            return 1; // Di chuyển các công việc đã hoàn thành xuống dưới
        } else if (!a.completed && b.completed) {
            return -1; // Di chuyển các công việc chưa hoàn thành lên trên
        } else {
            return 0; // Giữ nguyên thứ tự cho các công việc khác
        }
    });

    const completedCount = tasks?.reduce((count: any, task: any) => {
        return task.completed ? count + 1 : count;
    }, 0);
    // console.log(loading)
    // console.log(tasks)
    return (
        <>
            <div className="wrap__form">
                {tasks ?
                    (sortedTasks?.map((task: any) => (
                        <div className="wrap__content" key={task.id}>
                            <div className="wrap__content-todo">
                                {task.completed ?
                                    <FontAwesomeIcon icon={faCheck} className='icon checked' />
                                    :
                                    <FontAwesomeIcon icon={faXmark} className='icon xmark' />
                                }
                                <p>{task.title}</p>
                            </div>
                            <div className='btn' onClick={() => handleCompleted(task)}>
                                {loading[task.id] ? <div className="spinner"></div> : ""}
                                Done</div>
                        </div>
                    )))
                    :
                    <p className='nodata'>No data</p>
                }
            </div>
            <div className="wrap__done">
                <p>Done: {completedCount}/</p>
                <p>{tasks?.length} tasks</p>
            </div>
        </>
    )
}

export default memo(FormData)
