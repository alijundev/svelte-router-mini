# 📘 `svelte-router-mini`

Lightweight, Vue Router–style SPA router for **Svelte 5**.
✨ Simple, minimal, and zero dependencies.

---

## 🚀 Features

* Vue Router–like API (`RouterView`, `RouterLink`, `createRouter`)
* History API (push/replace)
* Reactive Svelte store for route tracking
* Automatic active class on `<RouterLink>`
* 404 fallback
* Tiny footprint

---

## 📦 Installation

```bash
npm install svelte-router-mini
# or
pnpm add svelte-router-mini
```

---

## 🛠️ Usage

### 1. Define routes

```svelte
<script>
  import { createRouter, RouterView, RouterLink } from "svelte-router-mini";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Todos from "./routes/Todos.svelte";

  // init router
  const router = createRouter([
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/todos", component: Todos },
  ]);
</script>

<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/todos">Todos</RouterLink>
</nav>

<main>
  <RouterView />
</main>
```

---

### 2. Create pages

`src/routes/Home.svelte`

```svelte
<h1>Home Page</h1>
```

`src/routes/About.svelte`

```svelte
<h1>About Page</h1>
```

`src/routes/Todos.svelte`

```svelte
<h1>Todos Page</h1>
```

---

### 3. Navigation programmatically

```svelte
<script>
  import { createRouter } from "svelte-router-mini";

  const router = createRouter([]);

  function goDashboard() {
    router.push("/dashboard");
  }

  function redirectAfterLogin() {
    router.replace("/dashboard");
  }
</script>

<button on:click={goDashboard}>Go to Dashboard</button>
```

---

## ⚡ API

### `createRouter(routes: Route[])`

Initialize router with route table.

* `routes: { path: string, component: SvelteComponent }[]`

Returns:

* `router.push(path: string)` → navigate and add to history
* `router.replace(path: string)` → navigate without adding history

---

### `<RouterView />`

Render the active component based on current route.

---

### `<RouterLink to="path">`

Navigate to a path. Adds `"active"` class when route is current.

Props:

* `to: string` → path to navigate
* `className?: string` → optional custom class

---

## 📂 Project Structure Example

```
src/
 ├─ routes/
 │   ├─ Home.svelte
 │   ├─ About.svelte
 │   └─ Todos.svelte
 ├─ App.svelte
 └─ main.js
```

---

## 🌍 Roadmap

* [ ] Dynamic routes (`/todos/:id`)
* [ ] Nested routes
* [ ] Navigation guards (`beforeEach`)
* [ ] Lazy loading

---

## 🐞 Issues

If you find a bug or have feature requests, please open an [issue](https://github.com/alijundev/svelte-router-mini/issues).

---

## 📄 License

MIT © [alijundev](https://github.com/alijundev)
