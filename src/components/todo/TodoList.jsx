import { useDispatch, useSelector } from 'react-redux'
// import { DeleteOneTodo } from '../../redux/oldredux'
import { DeleteOneTodo } from '../../redux/features/todoSlice';


const TodoList = () => {
  const todos = useSelector(state => state.tReducer.todos)
  console.log(todos)
  const dispatch = useDispatch()

  const deleteTodo = (index) => {
    dispatch(DeleteOneTodo(index))
  }
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <>
            <div key={i} className=" d-flex align-items-center w-75">
              <ul className="list-group w-100">
                <li className="list-group-item">
                  <div className="text">
                    <p className="fw-normal">Title : {todo.title}</p>
                    <p className="fw-light">Content : {todo.content}</p>
                  </div>
                </li>
              </ul>
              <button className="btn btn-danger btn-sm ms-auto" onClick={() => deleteTodo(i)}>x</button>
            </div>
            </>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      {todosList}
    </div>
  );
};

export default TodoList;
