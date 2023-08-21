'use client'
import React, { useEffect, useState, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function formData({ id }: any) {

    const [tasks, setTasks] = useState<any>(null)

    useEffect(() => {

        const fetchApi = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            const data = await res.json()

            data.length > 0 ? setTasks(data) : setTasks(null)
        }
        fetchApi()
    }, [id])
    // console.log(tasks)
    return (
        <div className="wrap__form">
            {tasks ?
                (tasks?.map((task: any) => (
                    <div className="wrap__content" key={task.id}>
                        <div className="wrap__content-todo">
                            <FontAwesomeIcon icon={faXmark} className='icon' />
                            <p>{task.title}</p>
                        </div>
                        <div className='btn'>Done</div>
                    </div>
                )))
                :
                <p className='nodata'>No data</p>
            }



        </div>
    )
}

export default memo(formData)
