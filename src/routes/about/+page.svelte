<script lang="ts">
    import GetInTouch from "$lib/GetInTouch.svelte";

</script>
<div class="box"></div>
<section>
    <div class="imageParent">
        <enhanced:img class="img" src="../../pics/barkandrock.png" alt="Finished Landscape photos." />
        <div class="content">
            <div class="inner">
                <h2 class="dm-serif-text-regular">About Us</h2>
                <p>Welcome to Horizon Landscaping, your trusted partner for all your yard care needs in the Portland metropolitan area. We specialize in yard cleanups, lawn maintenance, trimming, hauling, gutter cleaning, pressure washing, and more. Our dedicated team is committed to transforming your outdoor spaces into beautiful, well-maintained landscapes. With a focus on quality and customer satisfaction, we strive to exceed your expectations with every project. Let us help you create the perfect outdoor oasis!</p>
            </div>
        </div>
    </div>
</section>

<GetInTouch whereFrom="about-section" />

<style>
    section {
        height: 100vh;
        height: 100dvh;
        width: 100%;
    }

    .imageParent {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
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

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #794f4241;
        left: 0;
        top: 0;
        padding: 90px 15px 25px 15px;
    }

    .content .inner {
        width: 100%;
        height: 100%;
        background-color: #00000067;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        text-decoration: none;
        flex-direction: column;
        padding: 15px;
    }

    .content h2 {
        color: #ffffff;
        font-size: 2.5rem;
        /* text-shadow: 1px 1px 3px #000000; */
    }

    .content p {
        color: #ffffff;
        font-size: 1.15rem;
        /* text-shadow: 1px 1px 3px #000000; */
        line-height: 4ch;
    }

    @media screen and (min-width: 800px) {
        .content {
            padding: 190px 150px 125px 150px;
        }
    }
</style>