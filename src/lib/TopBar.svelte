<script>
    import {usrData, uid, currentPg} from '../stores';
    import { DarkMode} from 'flowbite-svelte';
    import NotificationsButton from './NotificationsButton.svelte';
    import { createEventDispatcher } from 'svelte';
    import ShopButton from './ShopButton.svelte';
    import { pb } from '../pocketbase';
    import { fade } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    let namev;
    let scorev;
    let correctStreak;
    
    usrData.subscribe(value => {
      scorev = value.score;
      namev = value.name;
      correctStreak = value.correctStreak;
    }
    ); 

    let uidVar;
    uid.subscribe(uid => {
      uidVar = uid
    })

    let pg;
    currentPg.subscribe(currentPg => {pg = currentPg})

    /*let rank
    pb.collection('players').subscribe('*', async () => {
      const records = await pb.collection('players').getFullList({
        sort: '-score'
      }).then((records) => {
      let recordsAbbr = [];
      for(let i = 0; i < records.length; i++){
        recordsAbbr.push(records[i].name)
      }
      rank = recordsAbbr.indexOf(namev)
      })
    });*/

</script>

<div class="flex flex-row w-screen bg-zinc-900 p-2 content-center space-x-5" id="TopBar">
    {#if uidVar != null}
      <div class="flex flex-row space-x-2 pt-2 rounded-lg bg-zinc-500 p-2">
        <p>{namev}</p>
        <p>{scorev}</p> 
      </div>
        {#if correctStreak > 1}
        <div class="flex flex-row space-x-2 pt-2 rounded-lg bg-zinc-500 p-2" transition:fade>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          <p>{correctStreak}</p>
        </div>
        {/if}
    {/if}
    <NotificationsButton on:openDrawer={()=> dispatch('openDrawer', {view: 'Alerts'})}/>
    {#if false}<ShopButton on:openShop={()=> dispatch('openDrawer', {view: 'Shop'})}/>{/if}
    <div class="grow"></div>
    <DarkMode/>
</div>
