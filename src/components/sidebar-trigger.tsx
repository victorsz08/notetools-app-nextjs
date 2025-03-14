"use client";



import { IoMenu } from 'react-icons/io5'
import { useSidebar } from './ui/sidebar';

export function SidebarTriggerButton() {
    const { toggleSidebar } = useSidebar()
    return (
        <button
            onClick={toggleSidebar} 
            className='bg-transparent p-1 w-fit rounded-sm hover:bg-slate-200 duration-150 cursor-pointer'
        >
            <IoMenu className='w-6 h-6 text-slate-600'/>
        </button>
    )
}