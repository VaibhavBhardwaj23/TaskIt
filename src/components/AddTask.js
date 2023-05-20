import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, db, provider } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const AddTask = ({ toggle, setToggle }) => {
  const [todoAuth, setTodoAuth] = useState(
    JSON.parse(localStorage.getItem("todoAuth")) || false
  );
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoAuth) {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      addDoc(collection(db, auth.currentUser.uid), newTask);
      setToggle(!toggle);
      e.target.task.value = "";
    } else {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("todoAuth", JSON.stringify(true));
        localStorage.setItem("userInfo", JSON.stringify(result));
        setTodoAuth(true);
        window.location.reload();
      });
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Enter Task"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTask;
