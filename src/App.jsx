import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import ProfilePage from "./pages/ProfilePage";

// router and routes
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<HomePage />} />
         <Route path="create" element={<div>create</div>} />
         <Route path="products/:id" element={<PostDetail />} />
         <Route path="profile" element={<ProfilePage />} />
         <Route path="login" element={<LoginPage />} />
         <Route path="register" element={<RegisterPage />} />
         <Route path="create-post" element={<CreatePost />} />
         {/* <Route index element={<LoginPage />} /> */}
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
