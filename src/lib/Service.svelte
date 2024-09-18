<script lang="ts">
    export let name: string;
    export let description: string;
    export let icon: string;
</script>

<div>
    <img src={icon} alt={name} />
    <h3 class="dm-serif-text-regular">{name}</h3>
    <p class="dm-serif-text-regular-italic">{description}</p>
</div>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
        gap: 10px;
    }

    div img {
        height: 70px !important;
        max-height: 70px;
        min-height: 70px;
    }

    div h3 {
        font-size: 2rem;
    }

    div p {
        font-size: 0.8rem;
        color: #505050;
    }
</style>