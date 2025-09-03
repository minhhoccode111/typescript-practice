<script lang="ts">
  type Todo = {
    id: string;
    todo: string;
    done: boolean;
  };

  let todos = $state<Todo[]>([
    {
      id: Math.random().toString(36).slice(2, 9),
      todo: "Learn Svelte Basics",
      done: true,
    },
    {
      id: Math.random().toString(36).slice(2, 9),
      todo: "Create a Svelte App",
      done: false,
    },
    {
      id: Math.random().toString(36).slice(2, 9),
      todo: "Learn Svelte Advanced",
      done: false,
    },
  ]);

  let todo = $state("");

  let todoInput: HTMLInputElement;

  function addTodo(e: SubmitEvent) {
    e.preventDefault();
    const id = Math.random().toString(36).slice(2, 9);
    const currentTodo = {
      id,
      todo,
      done: false,
    };
    todos = [...todos, currentTodo];
    todo = "";
  }

  function toggleTodo(id: string): any {
    todos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });
  }

  function deleteTodo(id: string): any {
    todos = todos.filter((item) => item.id !== id);
  }

  function editTodo(item: Todo) {
    todo = item.todo;
    todoInput.focus();
    deleteTodo(item.id);
  }
</script>

<header>
  <h1>Todolist</h1>
</header>

<main>
  <form onsubmitcapture={addTodo}>
    <p>
      <label>
        <span>Create todo</span>
        <input
          type="text"
          bind:this={todoInput}
          bind:value={todo}
          placeholder="Input your todo"
          maxlength="100"
        />
      </label>
      {#if todo.trim() != ""}
        <input type="submit" value="Add" />
      {:else}
        <input type="submit" value="Add" disabled />
      {/if}
    </p>
  </form>
  <ul>
    {#each todos as item}
      <li>
        <p class={item.done ? "done" : ""}>
          {item.todo}
        </p>
        <p style="display: flex; align-items: center;">
          <input
            checked={item.done}
            onchange={() => toggleTodo(item.id)}
            type="checkbox"
          />
          <button class="edit" onclick={() => editTodo(item)}> ✎ </button>
          <button class="delete" onclick={() => deleteTodo(item.id)}>
            ✕
          </button>
        </p>
      </li>
    {/each}
  </ul>
</main>

<footer>
  <p>
    Made by
    <strong>
      <a href="https://github.com/minhhoccode111"> minhhoccode111 </a>
    </strong>
  </p>
</footer>

<style>
  /* .border { */
  /*   border: 1px solid red; */
  /* } */
  .edit {
    background: transparent;
    border: none;
    color: blue;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.2s;
  }
  .edit:hover {
    color: #555;
  }
  .delete {
    background: transparent;
    border: none;
    color: red;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.2s;
  }
  .delete:hover {
    color: #888;
  }
  ul {
    list-style: none; /* bỏ bullet */
    margin: 0; /* bỏ margin mặc định */
    padding: 0; /* bỏ padding trái mặc định */
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .done {
    text-decoration: line-through;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  footer p,
  header {
    text-align: center;
  }
</style>
