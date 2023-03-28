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
        let rand = Math.random()
        let status = userData.birthStatus
        if(status == 'Slave'){
            rand = Math.round(rand * (events.peasant.length -1) )
            console.log(rand)
            currentEvent = events.peasant[rand]
        } else if(status == 'Lower/Middle Class'){
            rand = rand * events.middleClass.length
            currentEvent = events.middleClass[rand]
        }else if(status == 'Aristocratic'){
            rand = rand * events.aristocracy.length
            currentEvent = events.aristocracy[rand]
        }
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
                    <p>{events.peasant[0].context}</p>
                </div>
                <QuestionCard event={currentEvent} on:nextEvent={() => nextEvent()}/>
            </div>
        </Card>
    {/if}
</div>