import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import Course from "./Course"
import NoMatch from "./NoMatch"
import Pensioners from "./Pensioners"
import RegistrationForm from "./RegistrationForm"
import Courses from "./Courses"
import Culture from "./Culture"

export default function MyRouter() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/pensioners" element={<Pensioners />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}