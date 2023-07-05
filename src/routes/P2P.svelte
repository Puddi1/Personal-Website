<script>
    import { enhance, applyAction } from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let formTopic = "";
    if (formTopic == null) {
        formTopic = {
            topic: "",
        }
    }

    $: formTopic && console.log('formtopic: ' + formTopic.topic);
</script>


<main id="main-P2P">
    <div id="intro-container">
        <div>
            <p>Select a topic, join groups based on the topic and start chatting!</p>
        </div>
        <div>   
            <form method="POST" action="?/createSwarm" use:enhance={({ formElement, formData, action, cancel }) => {
                return async ({ result }) => {
                    // `result` is an `ActionResult` object
			        if (result.type === 'success') {
                        console.log(result.data)
				        await applyAction(result);
			        }
                };
            }}
            >
                <input id="join-topic-input" name="swarmTopic" type="text" />
                <button id="join-topic-button">
                    join
                </button>
            </form>
        </div>
    </div>
    <div id="chat-container">
        <div id="chat-topic-container">
            <h1 id="topic">topic</h1>
        </div>
        <div id="chat-chat-container">
            <div>
                <p>m1</p>
                <p>m2</p>
                <p>m3</p>
            </div>
        </div>
        <div id="chat-input-container">
            <div id="chat-input-background">
                <input id="input" type="text" />
                <div id="send-icon-container">
                    <img id="send-icon" src="/favicon.png" alt="Send">
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    #main-P2P {
        width: 100vw;
        min-height: 100vh;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        gap: 50px;

        margin-top: 20px;
        margin-bottom: 20px;
    }

    #intro-container {
        width: 350px;
        height: 280px;

        background-color: darksalmon;
    }
    #chat-container {
        width: 40vw;
        height: 85vh;

        background-color: darkmagenta;

        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-rows: 5% 80% 15%;
    }
    @media (max-width: 900px) {
        #chat-container {
            width: 60vw;
        }
    }
    @media (max-width: 400px) {
        #chat-container {
            width: 60vw;
        }
        #intro-container {
            width: 250px;
            height: 150px;
        }
    }

    /* #chat-topic-container {

    }
    #chat-chat-container {

    } */

    #chat-input-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #chat-input-background {
        background-color: aqua;
        border-radius: 18px;

        padding: 5px 10px 5px 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    #send-icon {
        width: 24px;
        height: 24px;
    }
</style>