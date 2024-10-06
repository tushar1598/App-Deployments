import { createBrowserRouter } from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import Profile from "./profile";
import SignOut from "./sign-out";
import Forgotpassword from "./reset-password";
import Resetpassword from "./password";
import Update from "./update-profile";
import SearchResults from "./search";
import Updatepassword from "./update-password";

import {
  AuthProfile,
  AuthSignIn,
  AuthSignUp,
  AuthResetPasswordLink,
  AuthResetPassword,
  AuthLogOut,
  AuthUpdate,
  AuthUpdatePassword,
} from "./auth";
import NotFound from "./invalid";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "https://app-deployments-frontend.onrender.com",
      element: <Nav />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "https://app-deployments-frontend.onrender.com/users/sign-in",
          element: (
            <AuthSignIn>
              <SignIn />
            </AuthSignIn>
          ),
        },
        {
          path: "https://app-deployments-frontend.onrender.com/users/sign-up",
          element: (
            <AuthSignUp>
              <SignUp />
            </AuthSignUp>
          ),
        },
        {
          path: "https://app-deployments-frontend.onrender.com/users/profile",
          element: (
            <AuthProfile>
              <Profile />
            </AuthProfile>
          ),
        },

        {
          path: "/users/reset-password-link",
          element: (
            <AuthResetPasswordLink>
              <Forgotpassword />
            </AuthResetPasswordLink>
          ),
        },
        {
          path: "/users/reset-password/:id",
          element: (
            <AuthResetPassword>
              <Resetpassword />
            </AuthResetPassword>
          ),
        },
        {
          path: "/users/update-password/:id",
          element: (
            <AuthUpdatePassword>
              <Updatepassword />
            </AuthUpdatePassword>
          ),
        },

        {
          path: "/users/search", // "/users/update/:id"
          element: <SearchResults />,
        },
        {
          path: "/users/update", // "/users/update/:id"
          element: (
            <AuthUpdate>
              <Update />
            </AuthUpdate>
          ),
        },
        {
          path: "/users/sign-out",
          element: (
            <AuthLogOut>
              <SignOut />
            </AuthLogOut>
          ),
        },
        {
          path: "*", // Wildcard for any unmatched routes
          element: <NotFound />,
        },
      ],
    },
  ]);

  return router;
}
