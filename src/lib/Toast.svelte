<script lang="ts">
    export let message: string;

    export let borderColor = "#794f42";
</script>

<div style="--border-color: {borderColor}">
    <p>{message}</p>
</div>

<style>
    div {
        position: fixed;
        background-color: #ffffff;
        border: 4px solid var(--border-color);
        border-radius: 5px;
        bottom: 10px;
        right: 10px;
        padding: 15px;
        color: rgb(0, 0, 0);
        animation: slidein 3000ms ease-in forwards;
        z-index: 200;
    }

    p {
        color: #000000;
        font-family: sans-serif;
    }

    div:hover {
        animation-play-state: paused;
    }

    @keyframes slidein {
        0% {
            transform: translateX(calc(100% + 10px));
        }

        7% {
            transform: translateX(-20px);
        }

        10% {
            transform: translateX(0);
        }
        90% {
            transform: translateX(0);
        }
        93% {
            transform: translateX(-20px);
        }
        100% {
            transform: translateX(calc(100% + 10px));
        }
    }
</style>