import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [showReloadPopup, setShowReloadPopup] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

  const handleReloadConfirmation = () => {
    setHasError(false);
    setShowReloadPopup(true);
  };

  return (
    <div>
      {hasError ? (
        <div>
          <h1>Something went wrong!</h1>
          <button onClick={handleReloadConfirmation}>Reload</button>
          {showReloadPopup && (
            <div className="popup">
              <p>Are you sure you want to reload the application?</p>
              <button onClick={handleReload}>Yes</button>
              <button onClick={() => setShowReloadPopup(false)}>No</button>
            </div>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ErrorBoundary;