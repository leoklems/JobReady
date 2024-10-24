import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useModal } from "./context/ModalContext";
import './App.css'

import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";

function App() {
  const { appLoading, setAppLoading } = useModal()

  useEffect(() => {
    setAppLoading(false)
  }, [])

  return (
    <>
      <main className="min-h-screen ">
        <h2>Hello</h2>
        <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* All static pages (homepage, about, contact and disclaimer routes here) */}
          <Route index element={<Homepage />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="disclaimer" element={<Disclaimer />} /> */}
        </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
