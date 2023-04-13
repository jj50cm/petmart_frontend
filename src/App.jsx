import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
// router and routes
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<HomePage />} />
         <Route path="create" element={<div>create</div>} />
         <Route path="profile" element={<div>Profile</div>} />
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
