import { Route, Routes } from 'react-router-dom';
import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import './globals.css';
import RootLayout from './root/RootLayout';
import { Home, LikedPosts } from './root/pages';

import { Toaster } from "@/components/ui/toaster";
import AllUsers from './root/pages/AllUsers';
import CreatePost from './root/pages/CreatePost';
import EditPost from './root/pages/EditPost';
import Explore from './root/pages/Explore';
import PostDetails from './root/pages/PostDetails';
import Profile from './root/pages/Profile';
import Saved from './root/pages/Saved';
import UpdateProfile from './root/pages/UpdateProfile';



const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*Public routes*/}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/*Private routes*/}
        <Route element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path='/explore' element={<Explore />}/>
        <Route path='/saved' element={<Saved />}/>
        <Route path='/all-users' element={<AllUsers />}/>
        <Route path='/create-post' element={<CreatePost />}/>
        <Route path='/update-post/:id' element={<EditPost />}/>
        <Route path='/post/:id' element={<PostDetails />}/>
        <Route path='/profile/:id/*' element={<Profile />}/>
        <Route path='/update-profile/:id' element={<UpdateProfile />}/>
        <Route path='/liked-posts' element={<LikedPosts />}/>
        </Route>
      </Routes>

      <Toaster/>
    </main>
  )
}

export default App
