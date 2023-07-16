<script>
    import "$lib/styles/root.css";
</script>

<header>
    <nav>
        <h1>
            <div>&#128540;</div>
            The Emoji App
            <div>&#128526;</div>
        </h1>
    </nav>
</header>

<main>
    <slot />
</main>

<style>
    nav{
        width: 100%;
        background: var(--primary-dark);
        padding: 1.5rem;
        display: grid;
        place-items: center;
    }

    h1{
        margin: 0;
        color: rgb(var(--primary-light));
        font-size: 3vw;
        position: relative;
    }

    h1 div{
        font-size: 4.5vw;
        position: absolute;
        top: -35%;
    }

    h1 div:nth-child(2){
        transform: rotate(20deg);
        right: -35%;
    }

    h1 div:nth-child(1){
        transform: rotate(-20deg);
        left: -35%;
    }

    @media only screen and (max-width: 600px){
        h1{
            font-size: 6vw;
        }

        h1 div{
            font-size: 8.5vw;
        }
    }
</style>