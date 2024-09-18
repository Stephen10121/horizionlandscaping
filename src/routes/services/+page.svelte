<script lang="ts">
    import GetInTouch from "$lib/GetInTouch.svelte";
    import ServicesSection2 from "$lib/ServicesSection2.svelte";
    import Toast from "$lib/Toast.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/services" />
    <!-- Primary Meta Tags -->
    <title>Horizion Landscaping LLC: Services</title>
    <meta name="title" content="Horizion Landscaping LLC: Services" />
    <meta name="description" content="Horizion Landscaping LLC offers yard cleanups, lawn maintenance, trimming, gutter cleaning, pressure washing, and more to keep your outdoor spaces pristine." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://horizionlandscaping.llc/services" />
    <meta property="og:title" content="Horizion Landscaping LLC: Services" />
    <meta property="og:description" content="Horizion Landscaping LLC offers yard cleanups, lawn maintenance, trimming, gutter cleaning, pressure washing, and more to keep your outdoor spaces pristine." />
    <meta property="og:image" content="https://horizionlandscaping.llc/previewpic.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://horizionlandscaping.llc/services" />
    <meta property="twitter:title" content="Horizion Landscaping LLC: Services" />
    <meta property="twitter:description" content="Horizion Landscaping LLC offers yard cleanups, lawn maintenance, trimming, gutter cleaning, pressure washing, and more to keep your outdoor spaces pristine." />
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
        <enhanced:img class="img" src="../../pics/barkandrock.png" alt="Finished Landscape photos." />
        <div class="content">
            <div class="inner">
                <h2 class="dm-serif-text-regular">Services</h2>
                <p>At Horizion Landscaping LLC, we pride ourselves on providing comprehensive landscaping services to the Vancouver and Portland areas. Our team of skilled professionals is dedicated to transforming your outdoor spaces into beautiful, functional, and well-maintained environments. Our services include:</p>
            </div>
        </div>
    </div>
</section>

<ServicesSection2 />
<GetInTouch whereFrom="services-section" />

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
        text-indent: 1em;
    }

    @media screen and (min-width: 800px) {
        .content {
            padding: 190px 150px 125px 150px;
        }
    }
</style>