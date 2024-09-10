'use client'; // Necessary for client-side rendering

import { useRouter } from 'next/navigation'; // Correct import
import { useState } from 'react';

export default function StockPage() {
  const router = useRouter();

  return (
    <div className="stock-page-container">
      <h1>Stock Dashboard</h1>
      <p>Welcome to the stock management page. Here you can manage your stock information.</p>

      {/* The logout button below will trigger the logout process and redirect to the confirmation page */}
      <LogoutButton />

      {/* Responsive CSS */}
      <style jsx>{`
        .stock-page-container {
          background-color: black;
          border: 2px solid black;
          padding: 10vw;
          margin: 5vw;
          text-align: center;
          border-radius: 10px;
        }

        h1 {
          font-size: 2rem;
          color: white;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color:white;
        }

        button {
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          background-color: blue;
          color: white;
          border: none;
          cursor: pointer;
          width: 100%;
          max-width: 200px;
          margin: 10px auto; /* Center the button */
        }

        /* Media query for small screens */
        @media (max-width: 768px) {
          .stock-page-container {
            padding: 5vw;
            margin: 3vw;
          }

          h1 {
            font-size: 1.5rem;
          }

          p {
            font-size: 1rem;
          }

          button {
            font-size: 0.9rem;
            padding: 8px 16px;
          }
        }

        /* Media query for extra small screens like mobile phones */
        @media (max-width: 480px) {
          .stock-page-container {
            padding: 4vw;
            margin: 2vw;
          }

          h1 {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.9rem;
          }

          button {
            font-size: 0.8rem;
            padding: 6px 12px;
          }
        }
      `}</style>
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
    <button style={{padding:'8px'}} onClick={handleLogout}>
      Logout
    </button>
  );
};

