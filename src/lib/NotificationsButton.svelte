<script>
    import {Button, Badge} from 'flowbite-svelte';
    import { alerts } from '../stores';
    import { createEventDispatcher } from 'svelte';

    let Alerts;
    let AlertsLength = 0;
    let ValidAlertsLength = 0;
    
    const dispatch = createEventDispatcher();

    const alertssub = alerts.subscribe((alerts) => {
        Alerts = alerts; 
        AlertsLength = Alerts.length;
        ValidAlertsLength = 0;
        for(let i = 0; i < AlertsLength; i++){
            if(Alerts[i].valid){
                ValidAlertsLength++;
            }
        }})
</script>

<div id="NotificationsButton" class="minWidths2 w-5 h-5">
    <Button class="ml-2" size="lg" on:click={()=> dispatch('openDrawer')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
        <span class="sr-only">Notifications</span>        
        {#if ValidAlertsLength> 0}<span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            2
          </span>{/if}
    </Button>
</div>

<style>
    .minWidths2{
        display: none;
    }
    @media (max-width: 1098px){
        .minWidths2{
            display: contents;
        }
    }
</style>