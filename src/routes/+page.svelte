<script lang="ts">
    import HomeSection1 from "$lib/HomeSection1.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://horizionlandscaping.llc/" />
    <!-- Primary Meta Tags -->
    <title>Horizion Landscaping LLC: Home</title>
    <meta name="title" content="Horizion Landscaping LLC: Home" />
    <meta name="description" content="Horizion Landscaping LLC offers high quality services for your landscaping needs. Yard cleanups, lawn maintenance, trimming, hauling, gutter cleaning, etc." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://horizionlandscaping.llc/" />
    <meta property="og:title" content="Horizion Landscaping LLC: Home" />
    <meta property="og:description" content="Horizion Landscaping LLC offers high quality services for your landscaping needs. Yard cleanups, lawn maintenance, trimming, hauling, gutter cleaning, etc." />
    <meta property="og:image" content="https://horizionlandscaping.llc/previewpic.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://horizionlandscaping.llc/" />
    <meta property="twitter:title" content="Horizion Landscaping LLC: Home" />
    <meta property="twitter:description" content="Horizion Landscaping LLC offers high quality services for your landscaping needs. Yard cleanups, lawn maintenance, trimming, hauling, gutter cleaning, etc." />
    <meta property="twitter:image" content="https://horizionlandscaping.llc/previewpic.png" />
</svelte:head>

<section>
    <!-- <p class="dm-serif-text-regular">Under Construction</p>
    <a class="dm-serif-text-regular" href="https://maps.app.goo.gl/ywuXjyBe9uTCjR9U8">Google Profile</a> -->
    <div class="imageParent">
        <enhanced:img class="img" src="../pics/house.jpg" alt="Finished Landscape photos." />
        <a class="content" href="/about">
            <p class="dm-serif-text-regular">About</p>
        </a>
    </div>
    <div class="imageParent">
        <enhanced:img class="img" src="../pics/path.jpg" alt="Finished Landscape photos." />
        <a class="content" href="/services">
            <p class="dm-serif-text-regular">Services</p>
        </a>
    </div>
    <div class="imageParent">
        <enhanced:img class="img" src="../pics/sidewalk.jpg" alt="Finished Landscape photos." />
        <a class="content" href="/gallery">
            <p class="dm-serif-text-regular">Gallery</p>
        </a>
    </div>
    <div class="imageParent">
        <enhanced:img class="img" src="../pics/yard.jpg" alt="Finished Landscape photos." />
        <a class="content" href="/contact">
            <p class="dm-serif-text-regular">Contact</p>
        </a>
    </div>
</section>

<!-- <HomeSection1 /> -->

<style>
    section {
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        position: relative;
        isolation: isolate;
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
        filter: grayscale(1);
        transition: filter 0.15s linear;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        /* background-color: rgba(16, 158, 16, 0.267); */
        background-color: #254d373f;
        /* background-color: rgba(83, 83, 83, 0.411); */
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .imageParent:hover .img {
        filter: grayscale(0);
    }

    .content p {
        color: #ffffff;
        font-size: 2rem;
        text-shadow: 1px 1px 3px #000000;
    }

    @media screen and (min-width: 800px) {
        section {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr;
        }

        .content p {
            font-size: 2.5rem;
        }
    }
</style>