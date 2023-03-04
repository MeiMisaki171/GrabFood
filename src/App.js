

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoutes } from "./routes"
import { Fragment } from "react"
//import Layout from "./components/Layout/Layout"

import './components/GlobalStyles/GlobalStyles.scss'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,id) => {
            const Page = route.component;
            let Layout = Fragment;
            
            if (route.layout) {
              Layout = route.layout;
            } else {
              Layout = Fragment;
            }
            return (
              <Route
                key = {route.id}
                path = {route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App