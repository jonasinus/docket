import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Aside from './components/aside'
import Usermenu from './components/usermenu'
import { useEffect, useState } from 'react'
import pages from './pages/pages'

function App() {
    const [uiReady, setUiReady] = useState<boolean>(false)
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
        if (uiReady) document.getElementById('pageLoader')!.classList.remove('loading')
        else document.getElementById('pageLoader')!.classList.add('loading')

        return () => {
            document.getElementById('pageLoader')!.classList.add('loading')
        }
    }, [uiReady])

    useEffect(() => {
        setUiReady(true)
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
