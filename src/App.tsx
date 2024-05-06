import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import './styles/app.scss'
import { ClientProfileNotes } from './pages/ClientProfileNotes/ClientProfileNotes'
import { ClientProfileConsultations } from './pages/ClientProfileConsultations/ClientProfileConsultations'
import { ClientProfileVideos } from './pages/ClientProfileVideos/ClientProfileVideos'
import { ClientProfileEvents } from './pages/ClientProfileEvents/ClientProfileEvents'
import { ClientProfileLayout } from './components/layout/ClientProfileLayout'
function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route path="/client/:id" element={<ClientProfileLayout />}>
                    <Route index element={<ClientProfileNotes />} />
                    <Route path="notes" element={<ClientProfileNotes />} />
                    <Route
                        path="consultations"
                        element={<ClientProfileConsultations />}
                    />
                    <Route path="videos" element={<ClientProfileVideos />} />
                    <Route path="events" element={<ClientProfileEvents />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
