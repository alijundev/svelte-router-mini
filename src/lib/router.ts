import { writable, derived } from "svelte/store";

import type {Component} from 'svelte'
export const currentRoute = writable(window.location.pathname);

interface Route {
  path: string;
  component: Component;
}
// daftar routes
export let routes: Route[] = [];
let Fallback: Component;

// setup router
export function createRouter(routeTable: Route[], fallback: Component) {
  routes = routeTable;
  Fallback = fallback;

  // listen back/forward
  window.addEventListener("popstate", () => {
    console.log(window.location.pathname);
    currentRoute.set(window.location.pathname);
    
  });

  return {
    push(path) {
      window.history.pushState({}, "", path);
      currentRoute.set(path);
    },
    replace(path) {
      window.history.replaceState({}, "", path);
      currentRoute.set(path);
    },
  };
}

// cari komponen berdasarkan route
export const activeComponent = derived(currentRoute, ($path) => {
  const found = routes.find((r) => r.path === $path);
  return found ? found.component : Fallback;
});
