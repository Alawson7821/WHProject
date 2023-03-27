<script>
    import {usrData} from '../stores';
    import { DarkMode, Button } from 'flowbite-svelte';

    let namev;
    let scorev;
    
    usrData.subscribe(value => {
      scorev = value.score;
      namev = value.name;
    }
    ); 

</script>

<div class="flex flex-row w-screen bg-zinc-900 p-2 content-center" id="TopBar">
    <div class="flex flex-row space-x-2 pt-2 rounded-lg bg-zinc-500 p-2">
      <p>{namev}</p>
      <p>{scorev}</p>
    </div>
    <div class="grow"></div>
    <DarkMode/>
</div>