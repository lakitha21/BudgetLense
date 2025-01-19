"use client";
import React from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
import { DevBundlerService } from 'next/dist/server/lib/dev-bundler-service';

function DashboardLayout({children}) {

  const CheckUserBudgets =async () => {
    const result=await db.select().from(Budgets).where(eq(Budgets.createdby))
  }
  return (
    <div>

        <div className='fixed md:w-64 hidden md:block'>
            <SideNav/>
        </div>

        <div className='md:ml-64'>
          <DashboardHeader/>
            {children}
        </div>

        </div>
  )
}

export default DashboardLayout