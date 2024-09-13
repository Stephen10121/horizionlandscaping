<section>
    <div class="rest">
        <div class="text">
            <div class="box">
                <p class="dm-serif-text-regular catch">Where green thumb goes hand in hand with great care</p>
                <a class="dm-serif-text-regular" href="https://maps.app.goo.gl/ywuXjyBe9uTCjR9U8">Google Profile</a>
            </div>
        </div>
        <div class="text">
            <div class="box">
                <p class="dm-serif-text-regular catch">Where green thumb goes hand in hand with great care</p>
                <a class="dm-serif-text-regular" href="https://maps.app.goo.gl/ywuXjyBe9uTCjR9U8">Google Profile</a>
            </div>
        </div>
    </div>
    <enhanced:img class="img" src="../pics/yard.jpg" alt="Finished Landscape photos." />
    <div class="black"></div>
</section>

<style>
    section {
        height: 100vh;
        height: 100dvh;
        width: 100%;
        /* padding: 150px 350px 150px 350px; */
        position: relative;
        isolation: isolate;
    }

    .rest {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 175px 0 150px;
    }

    .text {
        width: 40%;
        height: 50%;
        display: flex;
        align-items: center;
    }

    .box {
        width: 100%;
        height: 100%;
        background-color: #ffffff7e;
        z-index: 200;
        border-radius: 5px;
        padding: 15px;
    }

    .black {
        background-color: #0000005b;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50.1%, -50.1%);
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .catch {
        color: #000000;
        font-size: 4rem;
        font-weight: 100 !important;
    }

    @media screen and (min-width: 800px) {
        section {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr;
        }
    }
</style>