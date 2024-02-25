import React, { useState, useEffect } from 'react';
import {secondaryAuth} from "../firebaseSeller";

const Navbar = () => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = secondaryAuth.onAuthStateChanged((email) => {
      setEmail(email);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    secondaryAuth.signOut();
  };

  return (
    <nav>
      <h1>Navbar</h1>
      {user ? (
        <div>
          {/* Display a different icon or text when user is logged in */}
          <span>Logged in as: {user.email}</span>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          {/* Display a different icon or text when user is not logged in */}
          <span>Not logged in</span>
          {/* You can place your login icon or button here */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
