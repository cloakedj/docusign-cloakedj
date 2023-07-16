<script lang="ts">
    import type { Emoji } from "$lib";
    import { createEventDispatcher } from "svelte";
    import { quintOut } from "svelte/easing";
    import { fade, scale } from "svelte/transition";

    export let emoji: Emoji;
    const dispatch = createEventDispatcher();
</script>

<dialog open in:scale = {{ start: 0.7, opacity: 0.7, easing: quintOut }} out:fade={{ duration: 200 }}>
    <article>
        <h1>
            <button on:click|preventDefault={(e) => dispatch("hide")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>                  
            </button>
            <span>{@html emoji.htmlCode}</span>
        </h1>
        <p class="bracket">&lbrace;</p>
        <div class="content">
            <p>Name - {emoji.name}</p>
            <p>Category - {emoji.category}</p>
            <p>Html Code - {emoji.htmlCode}</p>
            <p>Unicode - {emoji.unicode}</p>
            <p>Group - {emoji.group}</p>
        </div>
        <p class="bracket">&rbrace;</p>
    </article>
</dialog>

<style>
    dialog{
        position: fixed;
        border: none;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(var(--primary-light), 0.9);
        display: grid;
        place-items: center;
        z-index: 10;
    }

    article{
        width: 50%;
        padding-bottom: 2rem;
        background: var(--primary-dark);
        border-radius: 0.8rem;
        display: flex;
        flex-flow: column;
        overflow: hidden;
        text-transform: capitalize;
    }

    article p{
        color: rgb(var(--primary-light));
    }

    .content{
        padding: 0.2rem 3rem;
    }

    .content p{
        font-size: 1.5vw;
        border-bottom: 1px solid #f1f1f191;
        padding: 0.4rem 0.3rem 0.9rem 0.9rem;
        background: #ffffff31;
        border-radius: 0.2rem;
    }

    .bracket{
        font-size: 5vw;
        margin: 0;
        padding-left: 1rem;
    }

    h1{
        background: var(--primary-dark);
        color: #fff;
        padding: 0.4rem;
        font-size: 4vw;
        border-bottom: 2px solid #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button{
        background: maroon;
        border: none;
        border-radius: 0.3rem;
        display: grid;
        place-items: center;
        margin-left: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button:hover{
        opacity: 0.7;
    }

    button svg{
        color: #fff;
        width: 4vw;
        height: 4vw;
    }

    @media only screen and (max-width: 800px){
        article{
            width: 90%;
        }
    }

    @media only screen and (max-width: 600px){
        article{
            width: 100%;
        }

        .content p{
            font-size: 3vw;
        }

        button{
            margin-left: 0;
        }

        button svg{
            height: 6vw;
            width: 6vw;
        }

        h1 span{
            font-size: 6vw;
        }

        .bracket{
            font-size: 10vw;
        }
    }
</style>