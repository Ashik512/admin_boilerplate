import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {_routes.map((item) => (
            <Route
              path={item?.path}
              element={item?.element}
              key={item.id}
            >
              {item.child.map((i) => (
                <Route
                  path={i.path}
                  element={i.element}
                  key={i.id}
                />
              ))}
            </Route>
          ))}
          {/* <Route path={'*'} element={<PageNotFound />} /> */}
        </Route>
        {/* <Route path={'/login'} element={<Login />} />
				<Route path={'/reset-password'} element={<ResetPassword />} />
				<Route path={'/user-info'} element={<UserInfoResetPassForm />} /> */}
      </Routes>
    </>
  );
}

const _routes = [
  {
    id: 1,
    label: 'home',
    path: '/',
    element: <Dashboard />,
    child: [],
  },
  {
    id: 2,
    label: 'user',
    path: 'user-management/user',
    // element: <ProtectedComponent rootComponent={<User />} />,
    element: <User />,
    child: [
      {
        id: 2.1,
        label: 'user add',
        path: 'add',
        element: null,
        child: [],
      },
      {
        id: 2.2,
        label: 'user update',
        path: 'update/:id',
        element: null,
        child: [],
      },
    ],
  },
];

export default App;
