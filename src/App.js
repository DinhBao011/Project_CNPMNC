import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { route } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {route.map((route) => {
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            const Page = route.page
            return(
              <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            }/>
            )
          })}
          
        </Routes>
      </Router>
    </div>
  )
}

export default App