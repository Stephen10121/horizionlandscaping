<div class="card">
    <div class="image-box">
        <slot />
    </div>
</div>

<style>
    .card {
        width: 100%;
        /* max-width: 450px; */
        height: 355px;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        border-radius: 10px;
        overflow: hidden;
    }

    .image-box {
        width: 100%;
        height: 100%;
        /* max-width: 540px; */
        /* aspect-ratio: 1; */
        /* overflow: hidden; */
        position: relative;
    }

    @media screen and (min-width: 800px) {
        .card {
            height: 355px;
        }
    }
</style>