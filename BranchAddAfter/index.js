import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// step-1 : รู้ว่า user กดปุ้มไหน ?

function App() {
  const [category, setCategory] = useState("");
  // useEffect ห้ามใช้ข้างนอก ต้องใช้ข้างใน function
  useEffect(() => {
    console.log("Effect Hook");
  });

  return (
    <div>
      <h1>Use Effect</h1>
      <div className="button__group">
        <button onClick={() => setCategory("posts")}>posts</button>
        <button onClick={() => setCategory("photos")}>photos</button>
        <button onClick={() => setCategory("todos")}>todos</button>
        <button onClick={() => setCategory("users")}>users</button>
      </div>

      <ul className="lists">
        <li className="list__item">item-1</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
