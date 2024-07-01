import { Outlet } from 'react-router-dom'

function DashboardLayout() {
    return (
        <div className='page dashboard'>
            <Outlet />
        </div>
    )
}

export default DashboardLayout
