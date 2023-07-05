<script>
    function redirectToUrl() {

        // window.redirectToUrl
    }

</script>

<div on:click={redirectToUrl} on:keydown={redirectToUrl} role="button" tabindex="0" id="card-container">
    <div id="title-container">
        <h1 id="title">Title</h1>
    </div>
    <div id="image-container">
        <img id="image" src="/d.png" alt="" />
    </div>
    <div id="description-container">
        <p id="description">
            This is a very short description thanks for reading all of this is very unusualy long
        </p>
    </div>
    <div id="mainTech-container">
        <div class="mainTech-image-container">
            <img class="mainTech-image" src="/favicon.png" alt="" />
        </div>
        <div class="mainTech-image-container">
            <img class="mainTech-image" src="/favicon.png" alt="" />
        </div>
        <div class="mainTech-image-container">
            <img class="mainTech-image" src="/favicon.png" alt="" />
        </div>
    </div>
</div>

<style>
    #card-container {
        background-color: purple;

        height: 100%;
        width: 100%;
        max-width: 175px;
        max-height: 300px;

        display: grid;
        align-items: center;
        justify-items: center;

        grid-template-rows: 15% 30% 43% 12%;

        border-radius: 18px;
        padding: 10px 20px 10px 20px;

        cursor: pointer;
    }

    #title-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #image-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        object-fit: fill;

        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    #description-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #mainTech-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 2.5px;
    }

    #title {

    }
    #image {
        max-width:100%;
        max-height:100%;
        object-fit:contain;
    }
    #description {

    }
    .mainTech-image-container {
        background-color: green;
        border-radius: 18px;

        padding: 3.5px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mainTech-image {
        width: 24px;
        height: 24px;
    }
</style>