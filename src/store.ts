import { writable } from "svelte/store";

export const showMenu = writable(false);

export function toggleMenu() {
    showMenu.update((prev) => {
        return !prev;
    });
}