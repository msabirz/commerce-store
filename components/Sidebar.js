"use client";
// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {  useRouter } from 'next/navigation'

import { SlHome } from 'react-icons/sl'
import { BsInfoSquare, BsEnvelopeAt, BsList } from 'react-icons/bs'
import { FaTshirt, FaRedhat } from 'react-icons/fa'


export default function Sidebar({ show, setter }) {
    const router = useRouter();
    const [toggleSidebar, setToggleSidebar] = useState(true)

    // Define our base class
    const className = `bg-black width-${toggleSidebar ? 100 : 950 }px  transition-all duration-900 transform -translate-x-0 fixed md:static top-0 bottom-0 left-0 z-40 h-full`;
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    const close = () => {
        
    }

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <BsList  color='red' height={'5px'} onClick={()=>setToggleSidebar(!toggleSidebar)}/>
                <div className="flex flex-col">
                    <MenuItem
                        name={!toggleSidebar && "Home"}
                        route="/"
                        icon={<SlHome />}
                    />
                    <MenuItem
                        name={!toggleSidebar &&  "T-Shirts"}
                        route="/t-shirts"
                        icon={<FaTshirt />}
                    />
                    <MenuItem
                        name={!toggleSidebar &&  "Hats"}
                        route="/hats"
                        icon={<FaRedhat />}
                    />
                    <MenuItem
                        name={!toggleSidebar && "About Us" }
                        route="/about"
                        icon={<BsInfoSquare />}
                    />
                    <MenuItem
                        name={!toggleSidebar && "Contact"}
                        route="/contact"
                        icon={<BsEnvelopeAt />}
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}