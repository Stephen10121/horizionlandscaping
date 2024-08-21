<script lang="ts">
    import { showMenu, toggleMenu } from "../store";
    import HomeMenu from "./HomeMenu.svelte";
</script>

<section>
    <button on:click={toggleMenu}>Menu</button>
    {#if $showMenu}
        <HomeMenu />
    {/if}
</section>

<style>
    section {
        background-color: #ffffff;
        position: relative;
    }
</style>