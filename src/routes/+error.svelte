<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    function sendToContact () {
        goto('/contact');
    }
    function sendToHome () {
        goto('/contact');
    }
</script>


<header id="header">
    <div id="header-innersection">
    <div on:click={sendToHome} id="header-image-div">
        <img src="/favicon.png" alt="Profile"/>
    </div>
    <div>
        <button on:click={sendToContact}>
            Contact me
        </button>
    </div>
    </div>
</header>

<main id="main-error">
    <h1>{$page.status}: {$page.error.message}</h1>
</main>


<style>
    :global(body, h1, h2, h3, p) {
        margin: 0;
    }
    :global(button) {
        cursor: pointer;
    }

    #header {
        position: absolute;
        width: 100vw;
        height: 125px;

        background-color: rgba(45, 45, 45, 0.3);
        
        display: flex;
        align-items: center;
    }
    #header-innersection {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-left: 10%;
        padding-right: 10%;
    }
    #header-image-div {
        cursor: pointer;
    }

    #main-error {
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
