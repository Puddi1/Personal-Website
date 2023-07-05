<script></script>


<main id="main-WebdevAndDesign">
    <div class="box" id="box-1">design tiype 1</div>
    <div class="box" id="box-2">..2</div>
    <div class="box" id="box-3">..3</div>
    <div class="box" id="box-4">..4</div>
    <div class="box" id="box-5">..5</div>
</main>

<style>
    #main-WebdevAndDesign {
        width: 100vw;
        height: 100vh;

        display: grid;
        justify-items: center;
        align-items: center;

        grid-template-columns: 24% 14% 29%;
        grid-template-rows: 50% 50%;
    }

    .box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #box-1 {
        height: 100%;
        width: 100%;

        grid-row: 1 / 2;
        grid-column: 1 / 3;

        background-color: blue;
    }
    #box-2 {
        height: 100%;
        width: 100%;
        
        grid-row: 1 / 2;
        grid-column: 3 / 4;

        background-color: green;
    }
    #box-3 {
        height: 100%;
        width: 100%;
        
        grid-row: 2 / 3;
        grid-column: 1 / 2;

        background-color: purple;
    }
    #box-4 {
        height: 100%;
        width: 100%;
        
        grid-row: 2 / 3;
        grid-column: 2 / 4;

        background-color: yellow;
    }
    #box-5 {
        height: 100%;
        width: 100%;
        
        grid-row: 1 / 3;
        grid-column: 4 / 5;

        background-color: orange;
    }
</style>