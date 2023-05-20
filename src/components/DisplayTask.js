import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const DisplayTask = ({ toggle, setToggle }) => {
  // const todoRef = collection(db, auth.currentUser.uid);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const todoRef = userInfo && collection(db, userInfo.user.uid);

  const [newTaskList, setNewTaskList] = useState([]);

  useEffect(() => {
    if (todoRef) {
      async function getPosts() {
        const data = await getDocs(todoRef);
        setNewTaskList(
          data.docs.map((document) => ({ ...document.data(), id: document.id }))
        );
      }
      getPosts();
    }
  }, [toggle, todoRef]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, userInfo.user.uid, id));
    setToggle(!toggle);
  };
  const handleClear = async () => {
    newTaskList.map((document) => {
      return deleteDoc(doc(db, userInfo.user.uid, document.id));
    });
    setToggle(!toggle);
    setUserInfo(userInfo);
  };
  // const handleEdit = (id) => {
  //   // const editingTask = taskList.find((task) => task.id === id);
  //   // setTask(editingTask);
  // };

  return (
    <section className="showTask">
      <div className="head">
        <div className="">
          <span className="title">Todo</span>
          <span className="count">{newTaskList.length}</span>
        </div>
        <button onClick={handleClear} className="clearAll">
          Clear ALL
        </button>
      </div>
      <ul>
        {newTaskList.map((task) => {
          return (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              {/* <i
                onClick={() => {
                  handleEdit(task.id);
                }}
                className="bi bi-pencil-square"
              ></i> */}
              <i
                onClick={() => {
                  handleDelete(task.id);
                }}
                className="bi bi-trash"
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DisplayTask;
