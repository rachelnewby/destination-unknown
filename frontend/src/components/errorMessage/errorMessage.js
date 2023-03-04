import React from 'react';

function ErrorMessage( {error} ) {
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  )
}

export default ErrorMessage;