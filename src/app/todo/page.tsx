'use client'
import React, { useEffect, useState, useCallback } from 'react'
import 'tippy.js/dist/tippy.css';
import Selected from '@/components/selectUser';
import FormData from '@/components/formData';
function Users() {
    const [data, setData] = useState([])


    const [idUser, setIdUser] = useState(null)
    useEffect(() => {

        const fetchApi = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setData(data)
        }
        fetchApi()
    }, [])

    const handleGetId = (id: any) => {
        setIdUser(id)
    }
    return (
        <div >
            <div className='wrap__heading'>
                <span className='heading_txt'>User</span>
                <div className="separate"></div>
            </div>

            <Selected dataUser={data} handleGetId={handleGetId} />

            <div className='wrap__heading'>
                <span className='heading_txt'>Tasks</span>
                <div className="separate"></div>
            </div>
            <FormData id={idUser} />


        </div>
    )
}

export default Users
