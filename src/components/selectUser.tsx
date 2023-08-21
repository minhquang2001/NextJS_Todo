'use client'
import React, { useEffect, useState, useRef } from 'react'
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


function Selected({ dataUser, handleGetId }: any) {


    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("Selected User:")
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => {
        setVisible(!visible)
    }
    const handleClickOutSide = (e: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('click', handleClickOutSide)

        return () => {
            window.removeEventListener('click', handleClickOutSide)
        }
    }, [])

    const handleOnclick = (e: any) => {
        setValue(e.target.textContent)
        setVisible(false)
    }

    const handleCombinedClick = (id: number, e: any) => {
        handleOnclick(e);
        handleGetId(id);
    };
    // console.log(dataUser)
    return (
        <div>
            <div className="dropdown">
                <div className='dropdown__select' onClick={toggleDropdown} ref={dropdownRef}>
                    <input type="text" placeholder={value} readOnly />
                    <FontAwesomeIcon icon={faAngleDown} className={`icon ${visible ? "rotate" : ""}`} />
                </div>
                <div className={`option ${visible ? "active" : ""}`}>
                    {dataUser.map((user: any) => (
                        <div className='option__selected' onClick={(e) => handleCombinedClick(user.id, e)} key={user.id}>{user.name}

                        </div>

                    ))}
                </div>
            </div>



        </div>
    )
}

export default Selected
