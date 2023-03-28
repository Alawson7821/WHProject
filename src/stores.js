import { writable } from "svelte/store";

export const usrData =  writable(
    {
        name: "",
        score: 0,
        gender: "",
        birthStatus: "",
        currentScoreEffect: 1,
        correctStreak: 0,
    }
);

export const uid = writable();

export const currentPg = writable(0);

export const alerts = writable([]);

export const alertComponentCount = writable(0);