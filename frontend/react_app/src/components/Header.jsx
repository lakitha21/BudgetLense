import React from 'react'
import logo from 'D:/GUI_Project/BudgetLense/frontend/react_app/src/assets/th.png'
import Button from './Button'

export default function Header() {
  return (
    <div style={{ display: 'flex',          // Use Flexbox
        alignItems: 'left',     // Vertically center the items
        justifyContent: 'space-between', // Add spacing between logo and button
        padding: '1px 2px',
        boxShadow: '10px 60px 4px rgba(9, 2, 2, 0.35)',}}>
      {/* <img src={logo} alt="logo" width={150} height={120} />*/}
        <Button label='Get Started'/>
    </div>
  )
}

