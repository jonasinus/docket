import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Aside from './components/aside'
import Usermenu from './components/usermenu'
import { useEffect } from 'react'
import pages from './pages/pages'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <pages.layout />, children: [{ path: '/', element: <pages.index /> }] },
                { path: '/documents', element: <pages.documents.layout />, children: [{ path: '/documents', element: <pages.documents.index /> }] }
            ]
        }
    ])

    useEffect(() => {
        document.getElementById('pageLoader')!.style.display = 'none'

        return () => {
            document.getElementById('pageLoader')!.style.display = ''
        }
    }, [])

    return <RouterProvider router={router} />
}

function Layout() {
    return (
        <>
            <Aside />
            <Usermenu />
            <main id='main-content-container'>
                <Outlet />
            </main>
        </>
    )
}

export default App
