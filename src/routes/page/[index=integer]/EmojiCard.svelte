<script lang="ts">
    import type { Emoji } from "$lib";
    import ExpandedObject from "./ExpandedObject.svelte";

    export let emoji: Emoji;
    let expandModal = false;
</script>

<article>
    <h4>{emoji.name}</h4>
    <h1 class="avatar">
        <!-- Ideally below would be sanitized before injecting -->
        <span>{@html emoji.htmlCode[0]}</span>
    </h1>
    <div class="rest-props">
        <p class="unicode">
            <span>Unicode</span>
            <span>{emoji.unicode}</span>
        </p>
        <p class="group">
            <span>Group</span>
            <span>{emoji.group}</span>
        </p>
        <p class="category">
            <span>Category</span>
            <span>{emoji.category}</span>
        </p>
    </div>
    <button on:click|preventDefault={(e) => expandModal = true}>
        <span>Expand Details</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>          
    </button>
</article>

{#if expandModal}
    <ExpandedObject {emoji} on:hide={(e) => expandModal = false}/>
{/if}

<style>
    article{
        width: 29%;
        background: var(--primary-dark);
        border-radius: 0.4rem;
        color: var(--primary-light);
        border: 2px solid var(--primary-gray);
        overflow: hidden;
    }

    .avatar{   
        display: grid;
        place-items: center;
    }

    h4{
        background: #fff;
        color: black;
        padding: 1rem;
        font-weight: semibold;
        margin-bottom: 2rem;
        text-transform: capitalize;
    }

    .avatar span{
        padding: 1rem;
        font-size: 6vw;
        min-width: 7vw;
        display: grid;
        place-items: center;
        border-radius: 0.4rem;
        background: rgba(var(--primary-light), 0.2);
        backdrop-filter: blur(5px);
    }

    .rest-props p{
        color: #fff;
        text-align: center;
        text-wrap: balance;
        margin: 0;
        border-radius: 0.2rem;
        border: 2px solid #fff;
        text-transform: capitalize;
        font-size: 1vw;
        overflow: hidden;
        padding: 0.1rem 0rem;
    }

    .rest-props p span:nth-child(1){
        padding: 0.5rem;
        border-right: 2px solid #fff;
        background: var(--primary-gray);
    }

    .rest-props p span:nth-child(2){
        padding: 0.5rem;
    }

    .category{
        background: rebeccapurple;
    }

    .unicode{
        background: purple;
    }

    .group{
        background: cornflowerblue;
    }

    .rest-props{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem 0.8rem;
    }

    button{
        width: 100%;
        border: none;
        height: 100%;
        margin-top:2rem;
        padding: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        cursor: pointer;
        background: cyan;
        transition: all 0.3s ease;
    }

    button:hover{
        opacity: 0.7;
    }

    button span{
        font-size: 1.2vw;
    }

    button svg{
        height: 1.5vw;
        width: 1.5vw;
    }

    @media only screen and (max-width: 800px){
        article{
            width: 47%;
        }

        .rest-props p span{
            font-size: 1.5vw;
        }

        button span{
            font-size: 2vw;
        }

        button svg{
            height: 3vw;
            width: 3vw;
        }

        .avatar span{
            font-size: 12vw;
        }
    }

    @media only screen and (max-width: 600px){
        article{
            width: 90%;
        }

        .avatar span{
            font-size: 12vw;
        }

        .rest-props p span{
            font-size: 2.3vw;
        }

        button span{
            font-size: 3vw;
        }

        button svg{
            height: 4vw;
            width: 4vw;
        }
    }
</style>