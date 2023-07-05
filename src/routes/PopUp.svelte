<script>
    import { onMount } from 'svelte';
    export let title = "";
    export let paragraph = "";

    onMount(() => {

    })
</script>

<div id="popup-container">
    <h1>{title}</h1>
    <p>{paragraph}</p>
</div>

<style>
    #popup-container {
        z-index: 1000;
        position: fixed;

        width: auto;
        min-width: 300px;
        max-width: 450px;
        height: auto;
        min-height: 150px;

        border: 2px solid purple;
        background-color: rgba(12, 35, 67, 1);

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 13px;

        right: -450px;
        top: 100px;

        padding: 7px 15px 7px 15px;

        transition: all .5s;
    }

    .show {
        animation: 6s 1 normal show;
    }

    @keyframes show {
        0%, 100% {
            transform: translateX(0px);
        }
        25%, 75% {
            transform: translateX(calc(-450px + -50px));
        }
    }
</style>