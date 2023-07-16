<script lang="ts">
  import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";

    let startIndex: number;
    afterNavigate(() => startIndex = parseInt($page.params.index));
    const pages = $page.data.pages;
</script>

<nav>
    {#if startIndex && startIndex !== 0 }
        <a href="/page/{startIndex - 1}">Go Back One Page</a>
    {/if}
    <ul>
        {#each Array.from(Array(pages).keys()) as page}
            {@const index = page + 1}
                {#if (index <= startIndex + 3 && index >= startIndex)}
                    <a href="/page/{index}">{index}</a>
                {:else if index === startIndex + 4}
                    <span>...</span>
                {:else if index >= pages - 3 && index <= pages}
                    <a href="/page/{index}">{index}</a>
                {/if}
        {/each}
    </ul>
    {#if startIndex && startIndex !== pages }
        <a href="/page/{startIndex + 1}">Go Forward One Page</a>
    {/if}
</nav>

<slot />

<style>
    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        background: #112;
        padding: 0.8rem 0rem;
        border-top: 1px solid var(--primary-gray);
    }

    nav > a{
        color: #fff;
        text-decoration: none;
    }

    nav > a:hover{
        opacity: 0.8;
        text-decoration: underline;
    }

    nav ul{
        display: flex;
        gap: 0.8rem;
        padding: 0;
    }

    nav ul a {
        color: #112;
        text-decoration: none;
        background: #fff;
        height: 3vw;
        width: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3vw;
        border-radius: 9999rem;
        font-weight: bold;
        border: 3px solid var(--primary-gray);
    }

    nav ul a:hover{
        text-decoration: underline;
        opacity: 0.8;
    } 
    
    nav ul span{
        color: rgb(var(--primary-light));
        font-size: 2.5vw;
    }

    @media only screen and (max-width: 800px){
        nav{
            flex-flow: column;
        }

        nav ul a{
            height: 7vw;
            width: 7vw;
            font-size: 3vw;
        }
    }
</style>