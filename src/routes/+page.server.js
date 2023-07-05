import Hyperswarm from 'hyperswarm'

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const swarm1 = new Hyperswarm()
    const swarm2 = new Hyperswarm()

    // console.log(swarm1);

    return {
        swarm: "test"
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    createSwarm: async ({ request }) => {
        const data = await request.formData();
        const swarmTopic = data.get('swarmTopic');

        // console.log(swarmTopic);

        return { topic: swarmTopic };
    },
    register: async (event) => {
        // TODO register the user
    }
};