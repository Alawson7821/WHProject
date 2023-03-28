<script>
    import {usrData, uid} from '../stores';
    import { DarkMode} from 'flowbite-svelte';
    import NotificationsButton from './NotificationsButton.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let namev;
    let scorev;
    
    usrData.subscribe(value => {
      scorev = value.score;
      namev = value.name;
    }
    ); 

    let uidVar;
    uid.subscribe(uid => {
      uidVar = uid
    })

</script>

<div class="flex flex-row w-screen bg-zinc-900 p-2 content-center space-x-5" id="TopBar">
    {#if uidVar != null}
      <div class="flex flex-row space-x-2 pt-2 rounded-lg bg-zinc-500 p-2">
        <p>{namev}</p>
        <p>{scorev}</p>
      </div>
    {/if}
    <NotificationsButton on:openDrawer={()=> dispatch('openDrawer')}/>
    <div class="grow"></div>
    <DarkMode/>
</div>
