<script>
    import { onMount } from 'svelte';

    let mainBlockchain;
    let walletContainer;
    let walletButton;
    let defaultOffsetWidth;
    let defaultOffsetHeight;
    let translateLeft;
    let translateTop;
    let logged = false;
    function loginWallet() {
        if (!mounted) {
            return
        }

        if (logged) {
            logoutWallet();
            return;
        }

        walletContainer.style.backdropFilter = "blur(0px)";
        walletContainer.style.backgroundColor = "rgba(0, 0, 0, 0)";

        defaultOffsetWidth = walletContainer.offsetWidth;
        defaultOffsetHeight = walletContainer.offsetHeight;
        translateLeft = Math.floor((defaultOffsetWidth / 2) - 150);
        translateTop = Math.floor((defaultOffsetHeight / 2) - 50);

        walletContainer.style.width = "0%";
        walletContainer.style.height = "0%";

        walletButton.style.transform = "translate("+ translateLeft + "px, -" + translateTop + "px)";

        logged = true;
    }
    function logoutWallet() {
        walletButton.style.transform = "translate("+ 0 + "px, -" + 0 + "px)";

        walletContainer.style.backdropFilter = "blur(25px)";
        walletContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

        walletContainer.style.width = "100vw";
        walletContainer.style.height = "100vh";

        logged = false;
    }

    let mounted = false;
    onMount(() => {
        mounted = true;
        window.addEventListener('resize', onResize);

        function onResize () {
            if (!mounted) {
                return;
            }

            if (logged) {
                defaultOffsetWidth = mainBlockchain.offsetWidth;
                defaultOffsetHeight = mainBlockchain.offsetHeight;

                translateLeft = Math.floor((defaultOffsetWidth / 2) - 150);
                translateTop = Math.floor((defaultOffsetHeight / 2) - 50);

                walletButton.style.transform = "translate("+ translateLeft + "px, -" + translateTop + "px)";
            }
        }
    })
</script>

<main bind:this={mainBlockchain} id="main-blockchain">
    <div bind:this={walletContainer} id="wallet-container">
        <button bind:this={walletButton} on:click={loginWallet} id="wallet-button">
            metamask
        </button>
    </div>
    <div id="blockchain-container">
        <div id="message-creation">
            <div id="message-title-container">
                <h3>Title</h3>
                <input type="text" />
            </div>
            <div id="message-body-container">
                <h3>Message Body</h3>
                <input type="text" />
            </div>
            <div id="message-url-container">
                <h3>Image url</h3>
                <input type="text" />
            </div>
            <div id="message-button-container">
                <button>
                    deploy
                </button>
            </div>
        </div>
        <div id="message-display">
            
        </div>
    </div>
</main>

<style>
    #main-blockchain {
        position: relative;

        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #wallet-container {
        position: absolute;
        
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(25px);

        transition: all .25s;
    }
    #wallet-button {
        padding: 30px 60px 30px 60px;

        background-color: green;
        border: 2px solid black;

        transition: all .125s;
    }

    #blockchain-container {
        width: 90%;
        height: 85%;

        display: grid;
        grid-template-columns: 25% 75%;
    }
    @media (max-width: 900px) {
        #blockchain-container {
            grid-template-rows: 30% 70%;
            grid-template-columns: 100%;
        }
        #message-title-container {
            grid-row: 1 / 2;
        }
        #message-display {
            grid-row: 2 / 3;
        }
    }

    #message-creation {
        width: 100%;
        height: 100%;

        display: grid;

        grid-template-rows: 20% 45% 20% 15%;

        background-color: blue;
    }
    @media (max-width: 900px) {
        #message-creation {
            grid-template-rows: 50% 50%;
            grid-template-columns: 25% 50% 25%;
        }

        #message-title-container {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
        }
        #message-url-container {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
        }
        #message-body-container {
            grid-row: 1 / 3;
            grid-column: 2 / 3;
        }
        #message-button-container {
            grid-row: 1 / 3;
            grid-column: 3 / 4;
        }
    }

    #message-display {
        background-color: green;
    }
</style>