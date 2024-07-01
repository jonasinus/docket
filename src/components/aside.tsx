import '@style/aside.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import icons from '@/assets/icons'
import { controlItems, MenuItem, menuItems } from '@/config/sidebar'

function Aside() {
    const [isOpen, setOpen] = useState<boolean>(true)
    const navigate = useNavigate()
    return (
        <aside id='aside' data-collapsed={!isOpen}>
            <div className='top'>
                <button className='aside-toggle' onClick={() => setOpen(!isOpen)}>
                    <img src={icons.hamburger} alt='|||' />
                </button>
                <h2 onClick={() => navigate('/')}>Docket</h2>
            </div>
            <div className='menus'>
                {menuItems.map((e) => {
                    return <CollapsableMenuItem {...e} key={e.uri} />
                })}
            </div>
            <div className='control'>
                <div className='line'></div>
                {controlItems.map((e) => (
                    <Link to={e.uri} title={e.label} key={e.uri}>
                        <img src={e.icon.url} alt={e.icon.alt} />
                        <p>{e.label}</p>
                    </Link>
                ))}
            </div>
        </aside>
    )
}

function CollapsableMenuItem(item: MenuItem) {
    if (item.children === null || item.children.length === 0)
        return (
            <Link className='menu item' to={item.uri} title={item.label}>
                <img src={item.icon.url} alt={item.icon.alt} />
                <p>{item.label}</p>
            </Link>
        )

    return (
        <div className='menu parent'>
            <Link to={item.uri} title={item.label}>
                <img src={item.icon.url} alt={item.icon.alt} />
                <p>{item.label}</p>
            </Link>
            <button title={'open ' + item.label}>
                <img src={icons.chevron.down} alt='↓' />
            </button>
            <div className='children'>{item.children?.map((c) => CollapsableMenuItem(c))}</div>
        </div>
    )
}

export default Aside
