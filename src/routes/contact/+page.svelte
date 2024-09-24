<script lang="ts">
    import GetInTouch from "$lib/GetInTouch.svelte";
    import Toast from "$lib/Toast.svelte";
    import phone from "../../pics/phone.svg";
    import mail from "../../pics/mail.svg";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://horizionlandscaping.llc/contact" />
    <!-- Primary Meta Tags -->
    <title>Horizion Landscaping LLC: Contact</title>
    <meta name="title" content="Horizion Landscaping LLC: Contact" />
    <meta name="description" content="Get in touch with Horizion Landscaping LLC for all your landscaping needs. Contact us via phone, email, or our online form. We’re here to help!" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://horizionlandscaping.llc/contact" />
    <meta property="og:title" content="Horizion Landscaping LLC: Contact" />
    <meta property="og:description" content="Get in touch with Horizion Landscaping LLC for all your landscaping needs. Contact us via phone, email, or our online form. We’re here to help!" />
    <meta property="og:image" content="https://horizionlandscaping.llc/previewpic.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://horizionlandscaping.llc/contact" />
    <meta property="twitter:title" content="Horizion Landscaping LLC: Contact" />
    <meta property="twitter:description" content="Get in touch with Horizion Landscaping LLC for all your landscaping needs. Contact us via phone, email, or our online form. We’re here to help!" />
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
        <enhanced:img class="img" src="../../pics/optimised/img2.webp" alt="Finished Landscape photos." />
        <div class="content">
            <div class="inner">
                <h2 class="dm-serif-text-regular">Contact Us</h2>
                <p class="inf"><span><img src={phone} width="17" height="20" alt="An icon of location pin." /></span> <a class="arimo" href="tel:360-772-1155" target="_blank">(360)-772-1155</a></p>
        <p class="inf"><span><img src={mail} width="20" height="16" alt="An icon of a mail letter." /></span> <a class="arimo" href="mailto:contact@horizionlandscaping.llc" target="_blank">contact@horizionlandscaping.llc</a></p>
            </div>
        </div>
    </div>
</section>

<GetInTouch
    whereFrom="contact-section"
    h2message="Contact us directly!"
/>

<style>
    section {
        height: 100vh;
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

    .inf {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
    }

    .inf span img {
        width: fit-content;
    }

    a {
        font-family: sans-serif;
        color: #ffffff;
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