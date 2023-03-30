<script>
  import {usrData, currentPg} from './stores'
  import {Drawer, CloseButton} from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';
  import Login from './lib/Login.svelte';
  import TopBar from './lib/TopBar.svelte';
  import WaitingPg from './lib/WaitingPg.svelte';
  import Gameview from './lib/Gameview.svelte';
  import Alerts from './lib/Alerts.svelte';
  import ShopView from './lib/Shop.svelte'

  let namev;
  let scorev;
  let pg;
  let appWidth =2000;
  let drawerContent = "Shop";

  usrData.subscribe(value => {
      scorev = value.score;
      namev = value.name;
    }
  ); 

  currentPg.subscribe(value => 
    pg = value
  )

  let hidden1 = true; 
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  const openDrawer = (e) => {
    drawerContent = e.detail.view;
    console.log(drawerContent)
    hidden1 =false;
  }
</script>

<div class="app flex flex-col items-center space-y-5 w-screen h-screen bg-color" bind:clientWidth={appWidth}>
  <TopBar on:openDrawer={(e) => openDrawer(e)}/>
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
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id='sidebar1' width="w-screen">
  <div class="flex flex-row-reverse w-"><CloseButton on:click={() => (hidden1 = true)} class='mb-4 dark:text-white'/></div>
  {#if drawerContent == "Alerts"}
    <Alerts/>
  {:else if drawerContent == "Shop"}
    <ShopView/>
  {/if}
</Drawer>

<style>
  @media (min-width: 1098px){
    .minWidths{
      display:flex;
    }
  }
</style>