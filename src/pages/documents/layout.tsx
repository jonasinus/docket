import { Outlet } from 'react-router-dom'
import './documents.css'

function DocumentsLayout() {
    return (
        <div className='page documents'>
            <Outlet />
        </div>
    )
}

export default DocumentsLayout
