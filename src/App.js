import React from 'react';
import './App.css';
import './webcomponents/my-resume';
function App() {
  return (
    <div className="container">
      <h1>Implementing WebComponents inside react</h1>
      <div>
        <my-resume url="http://demo9617924.mockable.io/myresume"></my-resume>
      </div>

    </div>
  );
}

export default App;
