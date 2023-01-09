import React from 'react'

import './CContainer.css'

const Container = ({ children }) => (
    <main className="app-container">
        {children}
    </main>
)

export default Container