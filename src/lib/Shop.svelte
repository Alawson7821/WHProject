<script>
    import {Card, Button} from 'flowbite-svelte'
    import { usrData } from '../stores';

    let userData;
    const scoreSub = usrData.subscribe( (usrData) => {
        userData = usrData;
    }
    )

    const mulltipliers = [
        {
            title: null,
            cost: null,
            gradient: null
        },
        {
            title: '1.5x points',
            cost: 50,
            gradient: "purpleToBlue",
        },
        {
            title: '2.0x points',
            cost: 100,
            gradient: "cyanToBlue",
        },
        {
            title: '2.5x points',
            cost: 100,
            gradient: "greenToBlue",
        },
        {
            title: '3.0x points',
            cost: 100,
            gradient: "purpleToPink",
        },
    ]

    const gradients = [
        "purpleToBlue",
        "cyanToBlue",
        "greenToBlue",
        "purpleToPink",
        "pinkToOrange",
        "tealToLime",
        "redToYellow"
    ]

    let style= "outline"
</script>

<div class="flex flex-column justify-center content-center flex-nowrap space-x-5" id="ShopView">
    <Card>
        <div class="flex flex-wrap space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>              
            <p class="text-2xl text-white">Multipliers</p>
        </div>
        <div class="grid grid-cols-2 pt-2 space-x-5 space-y-5">
            {#each mulltipliers as powerup}
                {#if powerup.title != null}
                    <div class="ml-0">
                        <Button outline class="min-h-72 min-w-10px overflow-hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                            <div class="flex flex-col">
                                <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                                <p class="text-white">{powerup.cost} points</p>
                            </div>
                        </Button>
                    </div>
                {:else if powerup.title == null}
                    <Button outline class="hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                        <div class="flex flex-col">
                            <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                            <p class="text-white">{powerup.cost} points</p>
                        </div>
                    </Button>
                {/if}
            {/each}
        </div>
    </Card>
    <Card>
        <div class="flex flex-wrap space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
                      
            <p class="text-2xl text-white">Security</p>
        </div>
        <div class="grid grid-cols-2 pt-2 space-x-5 space-y-5">
            {#each mulltipliers as powerup}
                {#if powerup.title != null}
                    <div class="ml-0">
                        <Button outline class="min-h-72 min-w-10px overflow-hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                            <div class="flex flex-col">
                                <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                                <p class="text-white">{powerup.cost} points</p>
                            </div>
                        </Button>
                    </div>
                {:else if powerup.title == null}
                    <Button outline class="hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                        <div class="flex flex-col">
                            <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                            <p class="text-white">{powerup.cost} points</p>
                        </div>
                    </Button>
                {/if}
            {/each}
        </div>
    </Card>
    <Card>
        <div class="flex flex-wrap space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>            
            <p class="text-2xl text-white">Harm</p>
        </div>
        <div class="grid grid-cols-2 pt-2 space-x-5 space-y-5">
            {#each  mulltipliers as powerup}
                {#if powerup.title != null}
                    <div class="ml-0">
                        <Button outline class="min-h-72 min-w-10px overflow-hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                            <div class="flex flex-col">
                                <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                                <p class="text-white">{powerup.cost} points</p>
                            </div>
                        </Button>
                    </div>
                {:else if powerup.title == null}
                    <Button outline class="hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                        <div class="flex flex-col">
                            <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                            <p class="text-white">{powerup.cost} points</p>
                        </div>
                    </Button>
                {/if}
            {/each}
        </div>
    </Card>
    <Card>
        <div class="flex flex-wrap space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>            
            <p class="text-2xl text-white">Pranks</p>
        </div>
        <div class="grid grid-cols-2 pt-2 space-x-5 space-y-5">
            {#each  mulltipliers as powerup}
                {#if powerup.title != null}
                    <div class="ml-0">
                        <Button outline class="min-h-72 min-w-10px overflow-hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                            <div class="flex flex-col">
                                <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                                <p class="text-white">{powerup.cost} points</p>
                            </div>
                        </Button>
                    </div>
                {:else if powerup.title == null}
                    <Button outline class="hidden" gradient color="{powerup.gradient}" on:click={() => {}}>
                        <div class="flex flex-col">
                            <p class="whitespace-nowrap text-white text-lg">{powerup.title}</p>
                            <p class="text-white">{powerup.cost} points</p>
                        </div>
                    </Button>
                {/if}
            {/each}
        </div>
    </Card>
</div>