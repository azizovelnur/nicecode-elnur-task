import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import "./styles/app.scss"
import { Home } from "./pages/Home/Home"
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
