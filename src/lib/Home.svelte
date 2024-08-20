<script lang="ts">
    import { showMenu, toggleMenu } from "../store";
    import { slide } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
</script>

<section>
    <button on:click={toggleMenu}>Menu</button>
    {#if $showMenu}
        <div class="menu left" transition:slide={{ duration: 300, easing: sineIn, axis: 'x' }}>
            <div class="box"></div>
        </div>
        <div class="menu right" transition:slide={{ duration: 300, easing: sineIn, axis: 'x' }}>
            <div class="box"></div>
        </div>
    {/if}
</section>

<style>
    section {
        background-color: #ffffff;
        position: relative;
    }

    .menu {
        height: 100%;
        width: calc(200% + 2px);
        position: absolute;
        top: 0;
        background-color: #ffffff;
        display: flex;
    }

    .box {
        width: 50%;
        height: 100%;
        /* background-color: red; */
        border-left: 2px solid #dfdfdf;
        border-right: 2px solid #dfdfdf;
    }

    .left {
        left: 0;
        transform: translateX(-100%);
        justify-content: flex-end;
    }

    .right {
        right: 0;
        transform: translateX(100%);
    }
</style>