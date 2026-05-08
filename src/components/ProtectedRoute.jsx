import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

// ProtectedRoute: if user is not authenticated, redirect to login page; otherwise, render the children components.
function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined)
    return <div className="text-white p-6">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  return children;
}

export default ProtectedRoute;
