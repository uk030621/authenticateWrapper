
'use client'; // Necessary for client-side rendering

import { useRouter } from 'next/navigation'; // Correct import
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Check if the user is authenticated (replace with your actual logic)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/checkAuth'); // Adjust this route to your actual API
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push('/login'); // Redirect to login if not authenticated
        }
      } catch (error) {
        setIsAuthenticated(false);
        router.push('/login'); // Redirect to login on error
      }
    };

    checkAuth(); // Run on component mount
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  // Once authenticated, show the welcome message and logout button
  return (
    <div style={{ backgroundColor: 'lightblue', border: '2px solid black', padding: '120px', margin: '80px', textAlign: 'center' }}>
      <h1>Welcome to the Home Page</h1>

      {/* The logout button below will trigger the logout process and redirect to the confirmation page */}
      <LogoutButton />
    </div>
  );
}

// Define the LogoutButton component here
const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Call the API to log out the user
    const response = await fetch('/api/logout', {
      method: 'POST',
    });

    if (response.ok) {
      // If the logout is successful, redirect to the logout confirmation page
      router.push('/logout-confirmation');
    } else {
      console.error('Failed to log out');
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '10px 20px',
        marginTop: '20px',
        cursor: 'pointer',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
      }}
    >
      Logout
    </button>
  );
};
