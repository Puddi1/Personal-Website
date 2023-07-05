<script>

</script>


<main id="main-chessAndAI">
    <div id="left-board">
        <div id="opponent-container">
            <img id="image-opponent" src="/favicon.png" alt=""/>
            <div id="description-opponent-container">
                <p id="name-opponent">Name</p>
                <p id="elo-opponent">elo</p>
            </div>
        </div>
        <div id="teams-container">
            <ul class="black-list">
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
                <li class="black-itemlist">
                    <img class="black-image" src="/favicon.png" alt=""/>
                </li>
            </ul>
            <ul class="white-list">
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
                <li class="white-itemlist">
                    <img class="white-image" src="/favicon.png" alt=""/>
                </li>
            </ul>
        </div>
    </div>

    <div id="canvas-container">
        <canvas id="canvas">
        </canvas>
    </div>

    <div id="right-board">
        <div id="points-container">
            <p id="points-text"><span id="left-point">1</span> / <span id="right-point">0</span></p>
        </div>
        <button id="restart-button">
            restart
        </button>
    </div>
</main>


<style>
    #main-chessAndAI {
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }


    #left-board {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 50px;
    }

    #opponent-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        background-color: purple;
        border-radius: 18px;
        padding: 10px 15px 10px 15px;
    }
    #image-opponent {
        width: 72px;
        height: 72px;
    }

    #description-opponent-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        gap: 5px;
    }
    #name-opponent {
        font-size: 36px;
    }
    #elo-opponent {
        font-size: 24px;
    }

    #teams-container {
        width: 100%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .black-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;

        gap: 2px;

        list-style-type: none;

        margin: 0;
        padding: 0;
    }
    .black-image {
        width: 30px;
        height: 30px;
    }
    .white-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 2px;

        list-style-type: none;

        margin: 0;
        padding: 0;
    }
    .white-image {
        width: 30px;
        height: 30px;
    }


    #canvas-container {
        width: 50vw;
        height: 50vw;
        background-color: violet;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #canvas {
        width: 90%;
        height: 90%;

        background-color: green;
    }


    #right-board {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 50px;
    }
    #points-container {
        font-size: 48px;
    }
    #restart-button {
        padding: 15px 30px 15px 30px;

        background-color: green;
        border: 2px solid black;

        transition: all .125s;
    }


    @media (max-width: 800px) {
        #main-chessAndAI {
            flex-direction: column
        }
        #left-board {
            gap: 20px;
        }
        #image-opponent {
            width: 48px;
            height: 48px;
        }
        #name-opponent {
            font-size: 26px;
        }
        #elo-opponent {
            font-size: 12px;
        }
        #teams-container {
            flex-direction: column;
        }
        .black-list {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .white-list {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .black-image {
            width: 18px;
            height: 18px;
        }
        .white-image {
            width: 18px;
            height: 18px;
        }

        #canvas-container {
            width: 80vw;
            height: 80vw;
        }

        #right-board {
            gap: 20px;
        }
        #points-container {
            font-size: 24px;
        }
        #restart-button {
            padding: 10px 20px 10px 20px;
        }
    }
</style>