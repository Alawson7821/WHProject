<script>
    import {A, Alert, Button, Progressbar} from 'flowbite-svelte';
    import {createEventDispatcher } from 'svelte/internal';
    import { alerts } from '../stores';
    import { usrData } from '../stores';

    const d = Date;

    let Alerts;
    
    alerts.subscribe((alerts)=>{Alerts = alerts});

    let userData;
    const userDataSub = usrData.subscribe((value) => userData = value)

    const AlertsDisappear = async () => {
        let toBeRemoved = [];
        setInterval(function(){
        for(var i = 0; i<Alerts.length; i++){
            if(Alerts[i].time <= 0){
                toBeRemoved.push(Alerts[i].id)
                usrData.set({
                    name: userData.name,
                    score: userData.score,
                    gender: userData.gender,
                    birthStatus: userData.birthStatus,
                    currentScoreEffect: (userData.currentScoreEffect * Alerts[i].undomult)
                }
            )
            }else {
                Alerts[i].time = Alerts[i].time -1
            }
        }
        for(let i=0; i<toBeRemoved.length; i++){
            Alerts.splice((Alerts.indexOf(toBeRemoved[i])), 1);
            toBeRemoved.splice(i, 1)
        }

    }, 1000);
    }

    AlertsDisappear();
    console.log(Alerts)
</script>

<div id="Alerts" class="flex flex-col space-y-5">
    {#each Alerts as Alerts}
        {#if Alerts.time > 0}
            <Alert border color="red">
                <span slot="icon">
                </span>
                <p class="text-lg">{Alerts.title}</p>
                <p>{Alerts.context}</p>
            </Alert>
        {/if}
    {/each}
    
  </div>