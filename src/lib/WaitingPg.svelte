<script>
    import { Card } from "flowbite-svelte";
    import {pb} from '../pocketbase'
    import {usrData, currentPg} from '../stores'

    let pg;
    let userData;

    let waitingRecordID = '1wfcjxv3pfw5zok';

    usrData.subscribe((usrData) =>
        userData = usrData
    )

    currentPg.subscribe(value => 
      pg = value
    )

    const watchState = async () => {pb.collection('gameState').subscribe(waitingRecordID, function (e) {
    if(e.record.gameActive){
      currentPg.set(2)
      pb.collection('gameState').unsubscribe(waitingRecordID);
    }else if(!e.record.gameActive){
      console.log('change detected, not true tho')
    }else{
      console.log('unknown error')
    }
  })}

  const checkActive = async() => {
    const record = await pb.collection('gameState').getOne(waitingRecordID, {})
    if(record.gameActive){
      currentPg.set(2)
    }else if(!record.gameActive){
      watchState();
    }
  }

  checkActive();
</script>

<div id="WaitingPg" class="app flex flex-col items-center space-y-5 justify-center">
    <p class="waitingAnim text-black dark:text-white">Waiting for game to start...</p>
</div>

<style>
    @keyframes loadingText {
  0% {
    font-size: 20px;
  }
  50% {
    font-size: 25px;
  }
  100% {
    font-size: 20px;
  }
}

  .waitingAnim{
    animation-name: loadingText;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    min-height: 50px;
    max-height: 50px;
  }
</style>