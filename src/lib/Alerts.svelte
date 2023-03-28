<script>
    import {A, Alert, Button, Progressbar} from 'flowbite-svelte';
    import {createEventDispatcher, onDestroy } from 'svelte/internal';
    import { alerts, usrData, alertComponentCount } from '../stores';

    const d = Date;

    let Alerts;
    
    alerts.subscribe((alerts)=>{Alerts = alerts});

    let userData;
    const userDataSub = usrData.subscribe((value) => userData = value)

    let alertComponents;
    const alertComponentCountSub = alertComponentCount.subscribe((value) => alertComponents = value)

    alertComponentCount.update((value) => value +1)

    onDestroy(
        () => {alertComponentCount.update((value) => value -1)}
    )

    const AlertsDisappear = async () => {
        let toBeRemoved = [];
        setInterval(function(){
        for(var i = 0; i<Alerts.length; i++){
            if(Alerts[i].time <= 0 && Alerts[i].valid){
                Alerts[i].valid = false
                usrData.set({
                    name: userData.name,
                    score: userData.score,
                    gender: userData.gender,
                    birthStatus: userData.birthStatus,
                    currentScoreEffect: (userData.currentScoreEffect * Alerts[i].undomult),
                    correctStreak: userData.correctStreak,
                }
            )
            }else {
                if(Alerts[i].valid){
                    Alerts[i].time = Alerts[i].time -1
                }
            }
        }
        alerts.set(Alerts)

    }, 1000);
    }
    
    if(alertComponents <= 1){
        AlertsDisappear();
    }
</script>

<div id="Alerts" class="flex flex-col-reverse space-y-5">
    {#each Alerts as Alerts}
        {#if Alerts.time > 0 && Alerts.valid}
            <Alert border color="red" class="mt-5">
                <p class="text-lg">{Alerts.title}</p>
                <p>{Alerts.context}</p>
                <p>{Alerts.time}</p>
            </Alert>
        {/if}
    {/each}
  </div>