<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    import PopUp from "./PopUp.svelte";
    let PopUpObject = {
        title: "",
        body: ""
    }

    import GeneralPresentation from "./GeneralPresentation.svelte";
    import Blockchain from "./Blockchain.svelte";
    import ChessAndAI from "./ChessAndAI.svelte";
    import P2P from "./P2P.svelte";
    import WebdevAndDesign from "./WebdevAndDesign.svelte";
    import Webscraping from "./Webscraping.svelte";
    import MainProjects from "./MainProjects.svelte";

    export let data;
    export let form;
    $: form && console.log('form: ' + JSON.stringify(form));
    $: data && console.log('data: ' + JSON.stringify(data));

    function sendToContact() {
        goto('/contact');
    }
    function sendToCV() {
        goto('/CV');
    }

    let headerSection;
    let lastScrollPosition = 0;
    let generalPresentationOffsetHeight;

    let mounted = false;
    onMount(() => {
        mounted = true;
        window.addEventListener('scroll', onScroll);

        function onScroll() {
            let downScroll = lastScrollPosition < window.scrollY;
            let inGeneralPresentation = (generalPresentationOffsetHeight / 2) > window.scrollY;
            lastScrollPosition = window.scrollY;

            if (!mounted) {
                return;
            }

            if (inGeneralPresentation) {
                return;
            }

            if (!downScroll) {
                headerSection.style.transform = "translateY(0px)";
                return;
            }

            headerSection.style.transform = "translateY(-75px)";
        }
    })
</script>

<header bind:this={headerSection} id="header">
    <div id="header-innersection">
        <div id="header-image-div">
            <img id="header-image" src="/favicon.png" alt="Profile"/>
        </div>
        <div id="header-buttons-div">
            <button id="header-button" on:click={sendToCV}>
                CV
            </button>
            <button id="header-button" on:click={sendToContact}>
                Contact me
            </button>
        </div>
    </div>
</header>

<PopUp />

<GeneralPresentation bind:generalPresentationOffsetHeight />
<Blockchain />
<ChessAndAI />
<!-- Quant trading and markets -->
<P2P formTopic={form} />
<WebdevAndDesign />
<Webscraping />
<MainProjects />

<footer id="footer">
    <div id="footer-main-container">
        <div id="footer-info-container">
            <div id="footer-info-text">
                me
            </div>
            <div id="footer-info-images">
                <div class="footer-image-background">
                    <img class="footer-image" src="/favicon.png" alt="Profile"/>
                </div>
                <div class="footer-image-background">
                    <img class="footer-image" src="/favicon.png" alt="Profile"/>
                </div>
                <div class="footer-image-background">
                    <img class="footer-image" src="/favicon.png" alt="Profile"/>
                </div>
            </div>
        </div>
        <div id="footer-button-container">
            <button id="header-button" on:click={sendToCV}>
                CV
            </button>
            <button id="header-button" on:click={sendToContact}>
                Contact me
            </button>
        </div>
    </div>
</footer>

<style>
    :global(body, h1, h2, h3, p) {
        margin: 0;
        font-family: Helvetica;
    }
    :global(button) {
        cursor: pointer;
    }

    #header {
        z-index: 999;
        
        position: fixed;
        width: 100vw;
        height: 75px;

        background-color: rgba(117, 19, 255, 0.3);
        
        display: flex;
        align-items: center;

        transition: all .5s;
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
    #header-buttons-div {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 25px;
    }
    #header-image {
        width: 48px;
        height: 48px;
    }
    #header-button {
        background: transparent;
        border: 2px solid black;

        width: 100px;
        height: 40px;
    }

    #footer {
        height: 300px;

        background-color: yellow;

        padding: 25px 45px 25px 45px;
    }

    #footer-main-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;

        background-color: green;
    }
    #footer-button-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 30px;

        background-color: blue;
    }
    #footer-info-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 30px;

        background-color: blue;
    }
    #footer-info-images {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 25px;
    }
    .footer-image-background {
        background-color: orange;
        border-radius: 50%;

        padding: 5px;
    }
    .footer-image {
        width: 36px;
        height: 36px;
    }
</style>
