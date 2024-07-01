import Documents from './documents'
import Dashboard from './dashboard'
import DashboardLayout from './dashboard/layout'
import DocumentsLayout from './documents/layout'

const pages = {
    layout: DashboardLayout,
    index: Dashboard,
    documents: {
        layout: DocumentsLayout,
        index: Documents
    }
}

export default pages
