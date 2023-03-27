<script>
    import GameCardsView from "./GameCardsView.svelte";
    import GameCountdown from "./GameCountdown.svelte";

    let gamePg = 0

    const countdownFinished = () => {
        gamePg = 1
    }

</script>

<div id="GameView">
    {#if gamePg == 0}
        <GameCountdown on:countdownfinished={countdownFinished}/>
    {:else if gamePg == 1}
        <GameCardsView/>
    {/if}
</div>