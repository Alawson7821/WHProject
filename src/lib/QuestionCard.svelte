<script>
    import {Button, Progressbar} from 'flowbite-svelte'
    import {ArrowRightIcon} from '@rgossiaux/svelte-heroicons/outline'
    import { createEventDispatcher, getContext, onDestroy, onMount } from "svelte";
    import { pb } from '../pocketbase'
    import { alerts, usrData, uid } from '../stores';
    import { v4 as uuidv4 } from 'uuid';

    export let event;

    const dispatch = createEventDispatcher();

    let answered = false;
    let selectedAnswer;

    let userData;
    const userDataSub = usrData.subscribe((usrData) => userData = usrData )

    let uidVar;
    const uidSub = uid.subscribe((uid) => uidVar = uid)

    const checkAnswer = (answer) => {
        answered = true
        selectedAnswer = answer
        if(answer == event.answer){
            usrData.set({
                name: userData.name,
                score: userData.score + (event.correctBenefit * userData.currentScoreEffect),
                gender: userData.gender,
                birthStatus: userData.birthStatus,
                currentScoreEffect: userData.currentScoreEffect,
                correctStreak: userData.correctStreak + 1,
            })
            if(userData.correctStreak > 20){
                alerts.update(
                    alerts => [...alerts, {id: uuidv4(), title: 'Absolutely Cracked My Man', context: 'Answer streak of 20!', time: 5, undomult: 1, valid: true}]
                ) 
            } else if(userData.correctStreak > 15){
                alerts => [...alerts, {id: uuidv4(), title: 'You\'re crazy!', context: 'Answer streak of 15!', time: 5, undomult: 1, valid: true}]

            } else if(userData.correctStreak > 10){
                alerts => [...alerts, {id: uuidv4(), title: 'Alright!', context: 'Answer streak of 10!', time: 5, undomult: 1, valid: true}]

            } else if(userData.correctStreak > 5){
                alerts => [...alerts, {id: uuidv4(), title: 'A', context: 'Answer streak of 20!', time: 5, undomult: 1, valid: true}]

            }
        } else if(answer != event.answer){
            usrData.set({
                name: userData.name,
                score: userData.score + (event.incorrectLoss * userData.currentScoreEffect),
                gender: userData.gender,
                birthStatus: userData.birthStatus,
                currentScoreEffect: (userData.currentScoreEffect / 2),
                correctStreak: 0,
            })
            
            alerts.update(
                alerts => [...alerts, {id: uuidv4(), title: event.incorrectEffect.name, context: event.incorrectEffect.context, time: event.incorrectEffect.time, undomult: 2, valid: true}, {id: uuidv4(), title: 'Streak Lost', context: '', time: 5, undomult: 1, valid: true}]
            ) 
        }
        const record = pb.collection('players').update(uidVar, userData)
    }


    const next = () => {
        answered = false;
        selectedAnswer = null;
        dispatch('nextEvent')
    }
</script>

<div id="QuestionCard">
    <p class="text-lg text-black dark:text-white">{event.question}</p>
    <div>
        {#if !answered}
            <div class="grid grid-cols-2 max-h-84 overflow-clip">
                {#each event.options as option}
                    <Button outline class="m-1" on:click={() => checkAnswer(option)}>{option}</Button>
                {/each}
            </div>
        {:else if answered}
            <div class="flex flex-col space-y-5">
                <div class="grid grid-cols-2 max-h-84 overflow-clip">
                    {#each event.options as option}
                        {#if option == event.answer && option == selectedAnswer}
                            <Button color="green" class="m-1">{option}</Button>
                        {:else if option == event.answer}
                            <Button color="green" outline class="m-1">{option}</Button>
                        {:else if option != event.answer && option == selectedAnswer}
                            <Button color="red" class="m-1">{option}</Button>
                        {:else if option != event.answer}
                            <Button color="red" outline class="m-1">{option}</Button>
                        {/if}
                    {/each}
                </div>
                <div>
                    {#if selectedAnswer == event.answer}
                        <p>{event.correctStatement}</p>
                    {:else if selectedAnswer != event.answer}
                        <p>{event.incorrectStatement}</p>
                    {/if}
                </div>
                <div class="flex flex-row content-center justify-center">
                    <Button outline={true} on:click={() =>{next()}} class="!p-2" size="lg"><ArrowRightIcon class="w-5"/></Button>
                </div>
            </div>
        {/if}
    </div>
</div>