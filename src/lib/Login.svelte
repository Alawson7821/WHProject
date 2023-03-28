<script>
    import {pb} from '../pocketbase';
    import { Progressbar, Spinner, Input, DarkMode, Button, FloatingLabelInput, Helper} from 'flowbite-svelte'
    import {usrData, currentPg, uid} from '../stores';
  
    var name;
    let nameOkay = true;
   
    const loginHandler = async () => {
        const genderNum = Math.round(Math.random());

        let gender;
        if (genderNum == 0){
            gender = 'male'
        } else if(genderNum == 1){
            gender = 'female'
        }

        const birthStatusNum = Math.random();

        let birthStatus;
        if(birthStatusNum <= .33){
            birthStatus = 'Slave'
        } else if(birthStatusNum <= .66){
            birthStatus = 'Lower/Middle class'
        } else if(birthStatusNum <= 1){
            birthStatus = 'Aristocratic'
        }

        birthStatus = 'Slave'

        if(name == ""){
            nameOkay=false
            return
        }

        const data = {
            "name": name,
            "score": 0,
            "gender": gender,
            "birthStatus": birthStatus,
            "currentScoreEffect": 1,
            "correctStreak": 0,
        };
        const record = await pb.collection('players').create(data);
        uid.set(record.id);
        usrData.set({score: data.score, name: data.name, gender: data.gender, birthStatus: data.birthStatus, currentScoreEffect: data.currentScoreEffect, correctStreak: data.correctStreak});
        currentPg.set(1)
    }

</script>

<div id="Login" class="app flex flex-col items-center space-y-5 justify-center">
    <div class="w-80">
        {#if nameOkay}
            <FloatingLabelInput bind:value={name} style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Name"/>
        {:else if !nameOkay}
            <FloatingLabelInput bind:value={name} color="red" style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Name"/>
            <Helper color="red">Please enter a name!</Helper>
        {/if}
    </div>
    <Button on:click={loginHandler}>Go!</Button>
</div>