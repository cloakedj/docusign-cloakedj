<script>
    import { page } from "$app/stores";

</script>

<article>
    <h1>{$page.error?.statusCode}</h1>
    <hr />
    <p class="error-message">{$page.error?.message}</p>
</article>

<style>
    article{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background: var(--primary-dark);
        color: rgb(var(--primary-light));
    }

    h1{
        font-size: 5rem;
        font-weight: bold;
        margin: 0;
    }

    hr{
        width: 50%;
    }
</style>