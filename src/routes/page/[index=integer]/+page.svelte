<script lang="ts">
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import type { Emoji } from "$lib";
    import Loader from "$clientComponents/Loader.svelte";
    import EmojiCard from "./EmojiCard.svelte";
    export let data;
    let emojis: Array<Emoji>;

    afterNavigate(() => emojis = data.emojis);
    beforeNavigate(() => emojis = []);
</script>


<div class="emoji-container">
    {#if emojis?.length}
            {#each emojis as emoji}
                <EmojiCard {emoji} />
            {/each}
    {:else}
        <Loader />
    {/if}
</div>

<style>
    .emoji-container{
        display: flex;
        min-height: 100vh;
        gap: 3rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 2rem 0rem;
    }

    @media only screen and (max-width: 800px){
        .emoji-container{
            gap: 1rem;
        }
    }
</style>

