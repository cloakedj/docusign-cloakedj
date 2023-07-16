<div class="loader-container">
    <div class="loader"></div>
</div>

<style>
    .loader-container{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        place-items: center;
        background: var(--primary-dark);
        z-index: 2;
    }

    .loader{
        height: 3vw;
        width: 3vw;
        border: 3px solid rgba(var(--primary-light));
        border-top-color: red;
        background: transparent;
        border-radius: 1000rem;
        animation: 0.7s rotate infinite linear;
    }
</style>