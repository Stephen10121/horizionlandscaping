<script lang="ts">
    import { enhance } from '$app/forms';

    export let whereFrom: string;
</script>

<section id="contact">
    <div class="p1">
        <h2 class="dm-serif-text-regular">Contact us for a quote!</h2>
        <p>Fill out the form below to request a free quote or learn more about our services.</p>
        <form method="POST" use:enhance>
            <input type="hidden" name="whereFrom" value={whereFrom} />
            <input required name="name" type="text" placeholder="Name" />
            <input required name="email" type="enail" placeholder="Email" />
            <textarea required name="what" placeholder="Message"></textarea>
            <button>Submit</button>
        </form>
    </div>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/getintouch.png" alt="A very nice looking fence." />
        </div>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100vh;
        height: 100dvh;
        padding: 20px;
        background-color: #F3F4F6;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .p1 {
        gap: 15px;
        display: flex;
        flex-direction: column;
    }

    .p2 {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    h2 {
        font-weight: 700;
        color: #000000;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-weight: normal;
        color: #5b5f68;
        font-size: 15px;
        line-height: 20px;
        font-family: sans-serif;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 10px;
    }

    input,
    textarea {
        background-color: #ffffff;
        border: 1px solid #B8BCC0;
        border-radius: 6px;
        font-weight: normal;
        color: #6B7280;
        font-size: 13px;
        padding: 7px;
        font-family: sans-serif;
    }

    textarea {
        resize: vertical;
        max-height: 250px;
        min-height: 36px;
    }

    input:focus,
    textarea:focus {
        outline: 1px solid #B8BCC0;
        outline-offset: 1px;
    }

    button {
        width: 135px;
        border: none;
        background-color: #794f42;
        color: #ffffff;
        font-weight: normal;
        font-size: 13px;
        padding: 5px;
        border-radius: 6px;
        font-family: sans-serif;
    }

    .image-box {
        width: 100%;
        max-width: 540px;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
    }
    
    .image-box-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50.1%, -50.1%);
        object-fit: cover;
        width: 100%;
        height: 100%;
        animation: unzoom 0.25s linear forwards;
    }

    .image-box-image:hover {
        animation: zoom 0.25s linear forwards;
    }

    @keyframes zoom {
        0% {
            width: 100%;
            height: 100%;
        }
        60% {
            width: 135%;
            height: 135%;
        }
        100% {
            width: 130%;
            height: 130%;
        }
    }

    @keyframes unzoom {
        0% {
            width: 130%;
            height: 130%;
        }
        40% {
            width: 135%;
            height: 135%;
        }
        100% {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 800px) {
        section {
            display: grid;
            grid-template-columns: 3fr 2fr;
            align-items: center;
            justify-content: center;
            padding: 70px;
        }

        .p1 {
            gap: 20px;
        }

        .p2 {
            justify-content: flex-end;
        }

        form {
            padding-right: 100px;
        }
    }

    @media screen and (min-width: 1200px) {
        section {
            padding: 150px;
        }
    }
</style>