import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                //  element={<Home />}
                 />
                <Route path="/login"
                //  element={<Login />}
                 />
                <Route path="/register"
                //  element={<Register />}
                 />
            </Routes>
        </BrowserRouter>
  )
}
