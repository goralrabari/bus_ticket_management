import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SearchBus from "./components/SearchBus"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchBus />} />
      <Route path="*" element={<Home />} />   
    </Routes>
  )
}