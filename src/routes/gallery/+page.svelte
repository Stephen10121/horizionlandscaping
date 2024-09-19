<script lang="ts">
    import GallerySection2 from "$lib/GallerySection2.svelte";
    import GetInTouch from "$lib/GetInTouch.svelte";
    import Toast from "$lib/Toast.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/gallery" />
    <!-- Primary Meta Tags -->
    <title>Horizion Landscaping LLC: Gallery</title>
    <meta name="title" content="Horizion Landscaping LLC: Gallery" />
    <meta name="description" content="Explore our gallery to see stunning transformations and beautiful landscapes we've created. Get inspired by our work and envision your dream outdoor space!" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://horizionlandscaping.llc/gallery" />
    <meta property="og:title" content="Horizion Landscaping LLC: Gallery" />
    <meta property="og:description" content="Explore our gallery to see stunning transformations and beautiful landscapes we've created. Get inspired by our work and envision your dream outdoor space!" />
    <meta property="og:image" content="https://horizionlandscaping.llc/previewpic.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://horizionlandscaping.llc/gallery" />
    <meta property="twitter:title" content="Horizion Landscaping LLC: Gallery" />
    <meta property="twitter:description" content="Explore our gallery to see stunning transformations and beautiful landscapes we've created. Get inspired by our work and envision your dream outdoor space!" />
    <meta property="twitter:image" content="https://horizionlandscaping.llc/previewpic.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<div class="box"></div>
<section>
    <div class="imageParent">
        <enhanced:img class="img" src="../../pics/services.png" alt="Finished Landscape photos." />
        <div class="content">
            <div class="inner">
                <h2 class="dm-serif-text-regular">Gallery</h2>
                <p>Here, you'll find a showcase of our finest work, highlighting the transformation of outdoor spaces in the Vancouver and Portland areas. Browse through our collection of stunning landscapes, from lush gardens to elegant patios, and see the quality and creativity that define our services.</p>
            </div>
        </div>
    </div>
</section>

<GallerySection2 />
<GetInTouch
    whereFrom="gallery-section"
    h2message="Want more pictures?"
    description="Contact us for a free quote and some pics if you want."
/>

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
        font-size: clamp(0.95rem, 0.8676rem + 0.3765vw, 1.15rem);
        /* text-shadow: 1px 1px 3px #000000; */
        line-height: 4ch;
        text-indent: 1em;
    }

    @media screen and (min-width: 800px) {
        .content {
            padding: 190px 150px 125px 150px;
        }
    }
</style>