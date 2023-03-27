import { writable } from "svelte/store";

export const usrData =  writable(
    {
        name: "",
        score: 0,
        gender: "",
        birthStatus: "",
        currentScoreEffect: 1,
    }
);

export const uid = writable();

export const currentPg = writable(0);

export const alerts = writable([]);