<script>
    import { onMount } from 'svelte';

    let generalPresentation;
    export let generalPresentationOffsetHeight = 0;

    let mounted = false;
    onMount(() => {
        mounted = true;
        generalPresentationOffsetHeight = generalPresentation.offsetHeight;
        window.addEventListener('resize', onResize);

        function onResize () {
            generalPresentationOffsetHeight = generalPresentation.offsetHeight;
        }
    })
</script>

<main bind:this={generalPresentation} id="main-generalPresentation">
    <div id="personal-info">
        <div class="infos" id="infos-0">
            <div class="center-children" id="image-div-infos-0">
                <img id="image-infos-0" src="/favicon.png" alt="a">
            </div>
            <div class="center-children" id="text-container-infos-0">
                <h1 class="text-infos-0">Elia Riva</h1>
                <h2 class="text-infos-0" id="developer-text">Developer</h2>
            </div>
        </div>
        <div class="infos" id="infos-1">
            <div class="containers-infos-1">
                <img class="image-infos-1" src="/favicon.png" alt="">
                <p class="text-infos-1">1 year of experience</p>
            </div>
            <div class="containers-infos-1">
                <img class="image-infos-1" src="/favicon.png" alt="">
                <p class="text-infos-1">main experience</p>
            </div>
            <div class="containers-infos-1">
                <img class="image-infos-1" src="/favicon.png" alt="">
                <p class="text-infos-1">currently tinkering with</p>
            </div>
            <div id="main-plug-container">
                <div class="main-plug-background">
                    <img class="main-plug-image" src="/favicon.png" alt="">
                </div>
                <div class="main-plug-background">
                    <img class="main-plug-image" src="/favicon.png" alt="">
                </div>
                <div class="main-plug-background">
                    <img class="main-plug-image" src="/favicon.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="knowledge-summary">
        <div class="carouselle" id="carouselle-0">
            <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
        </div>
        <div class="carouselle" id="carouselle-1">
            <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
        </div>
        <div class="carouselle" id="carouselle-2">
            <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
        </div>
    </div>
</main>

<style>
    .center-children {
        z-index: 1;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
    }

    #main-plug-container {
        width: 100%;

        margin-top: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
    }
    .main-plug-background {
        background-color: deepskyblue;
        border-radius: 50%;

        padding: 5px;
    }
    .main-plug-image {
        width: 36px;
        height: 36px;
    }

    #main-generalPresentation {
        height: 100vh;

        display: grid;
        grid-template-rows: 65% 30%;
    }
    #personal-info {
        width: 100vw;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    @media (max-width: 900px) {
        #personal-info {
            flex-direction: column;
        }
        #infos-1 {
            transform: translateY(0%);
        }
    }
    @media (max-width: 350px) {
        #infos-0 {
            width: 100%;
        }
    }
    @media (min-width: 900px) {
        #infos-1 {
            transform: translateY(60%);
        }
    }
    #developer-text {
        font-size: 30px;
    }
    .infos {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }
    .containers-infos-1 {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 5px;
    }
    #text-container-infos-0 {
        white-space: nowrap;
        transform: translateX(-20%);
    }
    #image-div-infos-0 {
        z-index: 0;

        width: 100%;
        height: 100%;
    }
    .text-infos-0 {
        font-size: 50px;
    }
    .text-infos-1 {
        font-size: 22px;
    }
    .image-infos-1 {
        width: 36px;
        height: 36px;
    }
    #infos-0 {
        flex-direction: row;
    }
    #infos-1 {
        gap: 10px;
    }
    #image-infos-0 {
        width: 96px;
        height: 96px;
    }
    #knowledge-summary {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 100vw;
        gap: 20px;
    }
    .carouselle {
        height: 60px;
    }
</style>