import React from 'react'
import Image from 'next/image'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'

function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid
        },
        {
            id:2,
            name:'Budgets',
            icon:PiggyBank
        },
        {
            id:3,
            name:'Expenses',
            icon:ReceiptText
        },
        {
            id:4,
            name:'Upgrade',
            icon:ShieldCheck
        }
    ]
  return (
    <div className='h-screen p-5 shadow-sm border'>
        <Image src='/logo.png' alt='logo' width={160} height={10}/>

        <div className='mt-5'>
            {menuList.map((menu,index)=>(
                <h2 className='flex gap-2 items-centerkey={index} text-gray-600 font-semibold p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100'> 
                    <menu.icon size={24} />
                    {menu.name}
                </h2>
            ))}
        </div>
    </div>
    
  )
}

export default SideNav