<script>
    import { createEventDispatcher } from "svelte";
    import { pb } from '../pocketbase'
    import { Card } from 'flowbite-svelte';
    import { usrData } from "../stores";

    const dispatch = createEventDispatcher();

    let userData;
    const userDataSub = usrData.subscribe((value) => userData = value)
    
    let counter = 5

    let decrementer = setInterval(function(){
        counter = counter -1;
        if(counter <= 0){
            dispatch('countdownfinished');
        }
    }, 1000);
</script>

<div id="GameCountdown" class="flex flex-col items-center space-y-5">
    <p class="text-black dark:text-white text-3xl">Get Ready!</p>
    <p class="text-black dark:text-white text-3xl">{counter}</p>
    <Card>
        <p class="text-2xl text-black dark:text-white">You are ...</p>
        <p>A {userData.gender} born into a {userData.birthStatus} family</p>
    </Card>
</div>