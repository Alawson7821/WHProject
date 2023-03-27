<script>
  import {pb} from './pocketbase';
  import {usrData, currentPg} from './stores'
  import { Progressbar, Spinner, Input, DarkMode, Button, Alert} from 'flowbite-svelte'
  import Login from './lib/Login.svelte';
  import TopBar from './lib/TopBar.svelte';
  import WaitingPg from './lib/WaitingPg.svelte';
  import Gameview from './lib/Gameview.svelte';
  import Alerts from './lib/Alerts.svelte';
  

  let namev;
  let scorev;
  let pg;

  usrData.subscribe(value => {
      scorev = value.score;
      namev = value.name;
    }
  ); 

  currentPg.subscribe(value => 
    pg = value
  )
</script>

<div class="app flex flex-col items-center space-y-5 w-screen h-screen bg-color">
  <TopBar/>
  <div class="flex flex-row w-screen pl-5"><Alerts/></div>
  <div class="absolute pt-20">
    {#if pg == 0}
      <Login/>
    {:else if pg == 1}
      <WaitingPg/>
    {:else if pg == 2}
      <Gameview/>
    {/if}
  </div>
</div>


<style>

</style>