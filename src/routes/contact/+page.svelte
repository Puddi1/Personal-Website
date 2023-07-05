<script>
    import { goto } from '$app/navigation';

    function sendToHome () {
        goto('../');
    }
</script>

<header id="header">
    <div id="header-innersection">
        <div on:click={sendToHome} id="header-image-div">
            <img id="header-image" src="/favicon.png" alt="Profile"/>
        </div>
    <div>
    </div>
    </div>
</header>

<main id="main-form">
    cv
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
        height: 75px;

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
    #header-image {
        width: 48px;
        height: 48px;
    }

    #main-form {
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
