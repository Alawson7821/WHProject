<script>
    import { Card } from 'flowbite-svelte'
    import {events} from './events'
    import QuestionCard from './QuestionCard.svelte';
    import { usrData } from '../stores';


    let userData;
    let CardVis;

    const userDataSub = usrData.subscribe((value) => userData = value)

    let currentEvent

    const eventChooser = () => {
        CardVis = false;
        let rand = Math.round(Math.random() * (events.length -1) )
        currentEvent = events[rand]
        CardVis = true;
    }

    eventChooser();

    let counter = 50

    let increment = 0.25

    let decrementer = setInterval(function(){
        counter = counter + increment;
        if(counter >100){
            counter =0
        }
    }, 10);

    const nextEvent = () => {
        eventChooser();
    }

    console.log(currentEvent)
</script>

<div id="gameCardView" class="pl-10 pr-10">
    {#if CardVis}
        <Card>
            <div class="flex flex-col space-y-5">
                <div>
                    <h1 class="text-2xl text-black dark:text-white">{currentEvent.title}</h1>
                    <p>{currentEvent.context}</p>
                </div>
                <QuestionCard event={currentEvent} on:nextEvent={() => nextEvent()}/>
            </div>
        </Card>
    {/if}
</div>