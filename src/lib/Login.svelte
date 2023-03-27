<script>
    import {pb} from '../pocketbase';
    import { Progressbar, Spinner, Input, DarkMode, Button} from 'flowbite-svelte'
    import {usrData, currentPg, uid} from '../stores';
  
    var name;
   
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

        const data = {
            "name": name,
            "score": 0,
            "gender": gender,
            "birthStatus": birthStatus,
            "currentScoreEffect": 1,
        };
        const record = await pb.collection('players').create(data);
        uid.set(record.id);
        usrData.set({score: data.score, name: data.name, gender: data.gender, birthStatus: data.birthStatus, currentScoreEffect: data.currentScoreEffect});
        currentPg.set(1)
    }

</script>

<div id="Login" class="app flex flex-col items-center space-y-5 justify-center">
    <div class="w-80">
        <Input bind:value={name} required id="large-input" size="lg" placeholder="Name"/>
    </div>
    <Button on:click={loginHandler}>Go!</Button>
</div>