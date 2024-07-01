import icons from '@/assets/icons'

type ControlItem = {
    label: string
    uri: string
    icon: {
        url: string
        alt: string
    }
}

type MenuItem = {
    label: string
    uri: string
    icon: {
        url: string
        alt: string
    }
    children: MenuItem[] | null
}

const controlItems: ControlItem[] = [
    { label: 'Account', uri: '/account', icon: { url: icons.user, alt: '[]' } },
    { label: 'Settings', uri: '/settings', icon: { url: icons.cogwheel, alt: '[]' } },
    { label: 'Legal Info', uri: '/legal', icon: { url: icons.info, alt: 'I' } }
]

const menuItems: MenuItem[] = [
    {
        label: 'Fincance',
        uri: '/fincance',
        icon: {
            url: icons.banknote,
            alt: '[]'
        },
        children: []
    },
    {
        label: 'Inventory',
        uri: '/inventory',
        icon: {
            url: icons.list,
            alt: '[]'
        },
        children: []
    },
    {
        label: 'Keystore',
        uri: '/keystore',
        icon: {
            url: icons.key,
            alt: '[]'
        },
        children: null
    },
    {
        label: 'Documents',
        uri: '/documents',
        icon: {
            url: icons.document,
            alt: '[]'
        },
        children: null
    },
    {
        label: 'Files',
        uri: '/files',
        icon: {
            url: icons.cloud,
            alt: '[]'
        },
        children: null
    },
    {
        label: 'People',
        uri: '/people',
        icon: {
            url: icons.userGroup,
            alt: '[]'
        },
        children: null
    }
]

export type { ControlItem, MenuItem }
export { controlItems, menuItems }
