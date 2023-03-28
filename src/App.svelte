<script>
  import {usrData, currentPg} from './stores'
  import {Drawer, CloseButton} from 'flowbite-svelte'
  import Login from './lib/Login.svelte';
  import TopBar from './lib/TopBar.svelte';
  import WaitingPg from './lib/WaitingPg.svelte';
  import Gameview from './lib/Gameview.svelte';
  import Alerts from './lib/Alerts.svelte';

  let namev;
  let scorev;
  let pg;
  let appWidth =2000;

  usrData.subscribe(value => {
      scorev = value.score;
      namev = value.name;
    }
  ); 

  currentPg.subscribe(value => 
    pg = value
  )

  import { sineIn } from 'svelte/easing';
  let hidden1 = true; 
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="app flex flex-col items-center space-y-5 w-screen h-screen bg-color" bind:clientWidth={appWidth}>
  <TopBar on:openDrawer={()=> hidden1 = false}/>
  <div class="minWidths hidden flex-row w-screen pl-5"><Alerts/></div>
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
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id='sidebar1'>
  <div class="flex flex-row-reverse"><CloseButton on:click={() => (hidden1 = true)} class='mb-4 dark:text-white'/></div>
  <Alerts/>
</Drawer>

<style>
  @media (min-width: 1098px){
    .minWidths{
      display:flex;
    }
  }
</style>