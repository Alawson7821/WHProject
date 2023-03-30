<script>
    import {pb} from '../pocketbase';
    import { Progressbar, Spinner, Input, DarkMode, Button, FloatingLabelInput, Helper} from 'flowbite-svelte'
    import {usrData, currentPg, uid} from '../stores';
  
    var name;
    let nameOkay = true;
    let spinnerVis = false;
    let nameError;
   
    const loginHandler = async () => {
        spinnerVis = true;
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

        let playersls;

        if(name == ""){
            nameOkay=false
            nameError = "Please enter a name!"
            spinnerVis = false
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

        const record = pb.collection('players').create(data).then((record) => {
            uid.set(record.id);
            usrData.set({score: data.score, name: data.name, gender: data.gender, birthStatus: data.birthStatus, currentScoreEffect: data.currentScoreEffect, correctStreak: data.correctStreak});
            currentPg.set(1)
        }
        ).catch((error) => {
            nameOkay = false
            nameError = 'The name you enterd has already been used, please choose a different name!'
            spinnerVis = false
            return
        })
    }

</script>

<div id="Login" class="app flex flex-col items-center space-y-5 justify-center">
    <div class="w-80">
        {#if nameOkay}
            <FloatingLabelInput bind:value={name} style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Name"/>
        {:else if !nameOkay}
            <FloatingLabelInput bind:value={name} color="red" style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Name"/>
            <Helper color="red">{nameError}</Helper>
        {/if}
    </div>
    <Button on:click={loginHandler}>Go!</Button>
    {#if spinnerVis}<Spinner/>{/if}
</div>