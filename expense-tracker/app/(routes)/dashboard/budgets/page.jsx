import React from 'react'
import BudgetList from './_components/BudgetList'

function Budget() {
  return (
    <div className='p-10'>
      <h2 className='font bold text text-3xl'>My Budget</h2>
      <BudgetList/>
    </div>
  )
}

export default Budget