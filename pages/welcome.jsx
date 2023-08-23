import React from 'react';
import { useRouter } from 'next/router';

const WelcomePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform any additional logout operations you might need here,
    // such as clearing a token from localStorage, etc.

    // Redirect the user to the login page
    router.push('/login');
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Welcome, you are logged in!</h1>
        <button 
          onClick={handleLogout} 
          className="text-white bg-red-500 p-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
