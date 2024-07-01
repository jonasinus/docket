import React from 'react'
import ReactDOM from 'react-dom/client'
import '@style/index.css'
import App from '@/app'

setTimeout(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}, 5000)
