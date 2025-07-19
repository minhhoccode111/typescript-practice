import { useDispatch, useSelector } from "react-redux";
import {
  incrementSliceCounterActions,
  decrementSliceCounterActions,
  resetSliceCounterActions,
} from "./counterSlice";
import {
  addSliceTodoActions,
  updateSliceTodoActions,
  deleteSliceTodoActions,
  toggleSliceTodoActions,
} from "./todoSlice";
import type { RootState } from "./reduxStore";
import { useState } from "react";
import { nanoid } from "nanoid";
import type { Todo } from "./todoModel";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const todos = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();
  const [inputNewTodo, setInputNewTodo] = useState("");
  return (
    <div className="bg-gray-800 h-screen">
      <div className="text-white py-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold uppercase">counter</h2>
          <h2>{count}</h2>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button onClick={() => dispatch(incrementSliceCounterActions())}>
            increment
          </button>
          <button onClick={() => dispatch(decrementSliceCounterActions())}>
            decrement
          </button>
          <button onClick={() => dispatch(resetSliceCounterActions())}>
            reset
          </button>
        </div>
      </div>
      <hr />
      <div className="text-white py-8 flex flex-col items-center">
        <div className="min-w-xl">
          <h2 className="text-xl font-bold uppercase text-center">Todolist</h2>
          <div className="flex items-center justify-between gap-2">
            <div>
              <input
                onChange={(e) => setInputNewTodo(e.target.value)}
                placeholder="new todo"
                type="text"
                className="flex-1"
                value={inputNewTodo}
              />
            </div>
            <button
              onClick={() => {
                if (inputNewTodo !== "") {
                  dispatch(
                    addSliceTodoActions({
                      todo: {
                        id: nanoid(),
                        title: inputNewTodo,
                        done: false,
                      } as Todo,
                    }),
                  );
                  setInputNewTodo("");
                }
              }}
              className=""
            >
              add
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <ul className="">
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <div className="flex justify-between gap-2 min-w-xl">
                    {todo.done ? (
                      <p className="flex-1 line-through">{todo.title}</p>
                    ) : (
                      <input
                        type="text"
                        className="flex-1"
                        value={todo.title}
                        onChange={(e) => {
                          dispatch(
                            updateSliceTodoActions({
                              id: todo.id,
                              todo: { ...todo, title: e.target.value },
                            }),
                          );
                        }}
                      />
                    )}
                    <button
                      onClick={() =>
                        dispatch(toggleSliceTodoActions({ id: todo.id }))
                      }
                      className=""
                    >
                      tog
                    </button>
                    <button
                      onClick={() =>
                        dispatch(deleteSliceTodoActions({ id: todo.id }))
                      }
                      className=""
                    >
                      del
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
