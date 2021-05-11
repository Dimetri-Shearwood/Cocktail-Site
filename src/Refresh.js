import React from 'react';

function App() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <button className="morebutton" onClick={refreshPage}>More Drinks</button>
    </div>
  );
}

export default App;