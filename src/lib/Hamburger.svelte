<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";

    export let color = "#000000";
    export let checked: boolean = false;

    $: {
        $page.url.pathname;
        if (browser) {
            const checkbox = document.querySelector("#menuCheckBox") as HTMLInputElement;
            if (checkbox) checkbox.checked = false;
        }
    }
</script>

<form action="javascript:void(0);">
    <input type="checkbox" id="menuCheckBox" class="sr-only noSelect" bind:checked={checked} />
    <label class="noSelect" for="menuCheckBox" title="Menu" style="--color: {color};">
        <span />
        <span />
        <span />
        <p class="sr-only">Menu</p>
    </label>
</form>

<style>
    .sr-only {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;  /* 2 */
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;            /* 3 */
    }

    form {
        width: fit-content;
        padding: 10px 0;
    }

    label {
        display: block;
        overflow: hidden;
        border: none;
        background: none;
    }

    span {
        --animation-speed: 0.3s;
        width: 40px;
        height: 4px;
        display: block;
        background-color: var(--color);
        margin: 7px auto;
        border-radius: 2px;
        -webkit-transition: all var(--animation-speed) ease-in-out;
        -o-transition: all var(--animation-speed) ease-in-out;
        transition: all var(--animation-speed) ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
        span {
            --animation-speed: 0s;
        }
    }

    label:hover {
        cursor: pointer;
    }

    input:checked + label span:nth-child(2) {
        opacity: 0;
    }

    input:checked + label span:nth-child(1) {
        -webkit-transform: translateY(10px) rotate(45deg);
        -ms-transform: translateY(10px) rotate(45deg);
        -o-transform: translateY(10px) rotate(45deg);
        transform: translateY(10px) rotate(45deg);
    }

    input:checked + label span:nth-child(3) {
        -webkit-transform: translateY(-12px) rotate(-45deg);
        -ms-transform: translateY(-12px) rotate(-45deg);
        -o-transform: translateY(-12px) rotate(-45deg);
        transform: translateY(-12px) rotate(-45deg);
    }
    
    .noSelect {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .noSelect:focus {outline: none !important}
</style>