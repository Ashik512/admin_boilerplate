import { Route, Routes } from 'react-router-dom';
import SubjectForm from './components/subject/SubjectForm';
import SubjectTable from './components/subject/SubjectTable';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {routes.map((route) => (
            <Route
              path={route?.path}
              element={route?.element}
              key={route.id}
            >
              {route.child.map((i) => (
                <Route
                  path={i.path}
                  element={i.element}
                  key={i.id}
                />
              ))}
            </Route>
          ))}
          <Route
            path={'*'}
            element={<PageNotFound />}
          />
        </Route>
        {/* <Route path={'/login'} element={<Login />} />
				<Route path={'/reset-password'} element={<ResetPassword />} />
				<Route path={'/user-info'} element={<UserInfoResetPassForm />} /> */}
      </Routes>
    </>
  );
}

const routes = [
  {
    path: '/',
    element: <Dashboard />,
    child: [],
  },
  {
    path: '/subjects',
    element: <SubjectTable />,
    child: [],
  },
  {
    path: '/subjects/add',
    element: <SubjectForm />,
    child: [],
  },
  {
    path: '/subjects/update/:id',
    element: <SubjectForm />,
    child: [],
  },
];

export default App;
