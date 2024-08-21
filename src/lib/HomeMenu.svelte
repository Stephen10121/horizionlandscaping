<script lang="ts">
    import { slide, fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
</script>

<div class="menu left" transition:slide={{ duration: 300, easing: sineIn, axis: 'x' }}>
    <div class="box" transition:slide={{ delay: 150, duration: 300, easing: sineIn, axis: 'x' }}>
        <div class="options options-left" in:fade={{ delay: 400, duration: 300 }} out:fade={{ delay: 0, duration: 150 }}>
            <a class="dm-serif-text-regular" href="/about">About</a>
            <a class="dm-serif-text-regular" href="/design">Design</a>
            <a class="dm-serif-text-regular" href="/services">Services</a>
        </div>
    </div>
</div>
<div class="menu right" transition:slide={{ duration: 300, easing: sineIn, axis: 'x' }}>
    <div class="box box-right" transition:slide={{ delay: 150, duration: 300, easing: sineIn, axis: 'x' }}>
        <div class="options options-right" in:fade={{ delay: 400, duration: 300 }} out:fade={{ delay: 0, duration: 150 }}>
            <a class="dm-serif-text-regular" href="/difference">Difference</a>
            <a class="dm-serif-text-regular" href="/gallery">Gallery</a>
            <a class="dm-serif-text-regular" href="/contact">Contact</a>
        </div>
    </div>
</div>

<style>
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
        border-left: 2px solid #dfdfdf;
        border-right: 2px solid #dfdfdf;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .box-right {
        justify-content: flex-start;
    }

    .options {
        display: flex;
        flex-direction: column;
        row-gap: 2px;
    }

    .options-left {
        border-right: 5px solid #7d9558;
        align-items: flex-end;
        padding-right: 15px;
    }

    .options-right {
        border-left: 5px solid #7d9558;
        align-items: flex-start;
        padding-left: 15px;
    }

    .options a {
        color: #7d9558;
        font-size: 1.75rem;
        width: fit-content;
        cursor: pointer;
        text-decoration: none;
        transition: margin-right 0.15s linear, margin-left 0.15s linear;
    }

    .options-left a:hover {margin-right: 10px;}
    .options-right a:hover {margin-left: 10px;}

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