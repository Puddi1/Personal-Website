<script>

</script>


<main id="main-Webscraping">
    <div id="padding-container">
    <div class="container" id="productHunt-cotainer">
        <div>
            <div>
                <h1>ProductHunt Trending Products</h1>
            </div>
            <div>
                <div>
                    product one
                </div>
                <div>
                    product two
                </div>
                <div>
                    product three
                </div>
            </div>
        </div>
    </div>
    <div class="container" id="github-container">
        <div>
            <div>
                <h1>Github Trending Repos</h1>
            </div>
            <div>
                <div>
                    repo one
                </div>
                <div>
                    repo two
                </div>
                <div>
                    repo three
                </div>
            </div>
        </div>
    </div>
    <div class="container" id="hugghingFace-container">
        <div>
            <div>
                <h1>HuggingFace Trending Models</h1>
            </div>
            <div>
                <div>
                    model one
                </div>
                <div>
                    model two
                </div>
                <div>
                    model three
                </div>
            </div>
        </div>
    </div>
    </div>
</main>


<style>
    #main-Webscraping {
        width: 100vw;
        min-height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #padding-container {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        gap: 25px;

        margin: 10px 25px 10px 25px;
    }

    .container {
        max-width: 300px;
        max-height: 500px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        background-color: magenta;
    }

</style>