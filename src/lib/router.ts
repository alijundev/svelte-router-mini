import { writable, derived } from "svelte/store";

import type { Component } from "svelte";
export const currentRoute = writable(window.location.pathname);

interface Route {
  path: string;
  component: Component;
}

export let routes: Route[] = [];
let Fallback: Component;

export function createRouter(routeTable: Route[], fallback?: Component) {
  routes = routeTable;
  Fallback = fallback || routes.find((route) => route.path === "/")!.component;

  window.addEventListener("popstate", () => {
    console.log(window.location.pathname);
    currentRoute.set(window.location.pathname);
  });

  return {
    push(path: string) {
      window.history.pushState({}, "", path);
      currentRoute.set(path);
    },
    replace(path: string) {
      window.history.replaceState({}, "", path);
      currentRoute.set(path);
    },
  };
}

export const activeComponent = derived(currentRoute, ($path) => {
  const found = routes.find((r) => r.path === $path);
  return found ? found.component : Fallback;
});
