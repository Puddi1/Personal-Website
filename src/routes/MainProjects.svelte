<script>
    import ProjectCard from "$lib/ProjectCard.svelte"

    let Project = {
        title: "",
        image: "",
        description: "",
        mainTech: ["", "", ""],
        url: "",
    }
</script>

<main id="main-MainProjects">
    <div id="projects-container">
        <div id="projects-container-grid">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
</main>

<style>
    #main-MainProjects {
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: blue;
    }
    #projects-container {
        width: 80vw;
        height: 85vh;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 15px 30px 15px 30px;

        background-color: red;
    }
    #projects-container-grid {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 25px;

        overflow-y: scroll;
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;
    }
    #projects-container-grid::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
</style>