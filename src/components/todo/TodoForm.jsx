import { useState } from "react";
import { useDispatch } from 'react-redux'
// import { addNewTodo } from '../../redux/oldredux'
import { addNewTodo } from "../../redux/features/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (task) => {
    dispatch(addNewTodo(task))
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Add a TODO</h3>
      <form onSubmit={handleSubmission}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          className="ms-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="">Content</label>
        <textarea
          name="content"
          value={content}
          className='mt-2'
        
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-success btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
