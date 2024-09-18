<script lang="ts">
    import { page } from "$app/stores";
import Footer from "$lib/Footer.svelte";
import Hamburger from "$lib/Hamburger.svelte";
    import { fade } from 'svelte/transition';

    let showMenu = false;
    let cl = "show";

    let prevScrollPos = 0;
    function scrolling(event: any) {
        let currentScrollPos = event.target.scrollingElement.scrollTop;
        if(currentScrollPos > 250) {
            if (currentScrollPos < prevScrollPos) {
                cl = "show";
            } else {
                cl = "hide";
            }
        } else {
            cl = "show";
        }
        prevScrollPos = currentScrollPos;
    }
</script>

<svelte:window on:scroll={scrolling} />

<header class={cl}>
    <a href="/" on:click={() => {showMenu = false}}>
        <h1 class="dm-serif-text-regular">H<span class="large" style="display: none;">orizion</span> L<span class="large" style="display: none;">andscaping</span></h1>
    </a>
    <Hamburger bind:checked={showMenu} />
</header>
{#if showMenu}
    <div class="menu" transition:fade={{ duration: 150 }}>
        <enhanced:img class="logo" src="../pics/logo.png" alt="The logo of our company." />
        <ul>
            <li>
                <a href="/about" class="dm-serif-text-regular-italic" on:click={() => {showMenu = false}}>About</a>
            </li>
            <li>
                <a href="/services" class="dm-serif-text-regular-italic" on:click={() => {showMenu = false}}>Services</a>
            </li>
            <li>
                <a href="/gallery" class="dm-serif-text-regular-italic" on:click={() => {showMenu = false}}>Gallery</a>
            </li>
            <li>
                <a href="/contact" class="dm-serif-text-regular-italic" on:click={() => {showMenu = false}}>Contact</a>
            </li>
        </ul>
    </div>
{/if}
<main>
    <slot />
</main>

{#if $page.url.pathname !== "/"}
    <Footer />
{/if}

<style>
    main {
        width: 100%;
        background-color: #dfdfdf;
    }

    header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 70px;
        width: 100vw;
        background-color: #ffffff7e;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        /* z-index: -1; */
        z-index: 201;
        transition: transform 0.1s linear 0.5s;
        overflow-x: hidden;
    }

    header.hide {
        transform: translate(0, -100%);
        transition: transform 0.1s linear 0.5s;
    }

    header.show {
        transform: translate(0, 0);
        transition: transform 0.1s linear 0.2s;
    }

    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        height: 100dvh;
        background-color: white;
        z-index: 200;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
    }

    .menu .logo {
        position: absolute;
        max-width: 90%;
        width: auto;
        height: auto;
        max-height: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.1;
        z-index: -1;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .menu li {
        list-style: none;
    }

    header a {
        text-decoration: none;
    }

    .menu a {
        color: #000000;
        font-size: 1.25rem;
    }

    h1 {
        font-size: 1.75rem;
        color: #000000;
    }

    @media screen and (min-width: 800px) {
        .large {
            display: inline-block !important;
        }

        header {
            padding: 0 150px;
        }
    }
</style>