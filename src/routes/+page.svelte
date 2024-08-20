<script lang="ts">
    import Home from "$lib/Home.svelte";
</script>

<main>
    <section>1</section>
    <section>2</section>
    <Home />
    <section>4</section>
    <section>5</section>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        background-color: #dfdfdf;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 1px;
    }
    
    section {
        background-color: red;
    }
</style>