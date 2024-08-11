import { HashRouter, Routes, Route } from 'react-router-dom';
import { DASHBOARD, STUDENTS, PAGE404 } from '../routes.js';

import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Students from './pages/Students.jsx';
import Page404 from './pages/Page404.jsx';


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={DASHBOARD.pathname} element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path={STUDENTS.pathname} element={<Students/>}/>
          <Route path={PAGE404.pathname} element={<Page404/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;