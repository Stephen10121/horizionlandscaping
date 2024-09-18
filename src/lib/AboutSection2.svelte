<section>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/about2.png" alt="A very nice looking fence." />
        </div>
    </div>
    <div class="p1">
        <h2 class="dm-serif-text-regular">What makes us different?</h2>
        <p>At Horizion Landscaping, we pride ourselves on our prompt and reliable service. Unlike other landscape companies that may keep you waiting for weeks, we typically schedule our services within a week or less. Our team is dedicated to being upfront and honest, ensuring that we address all your lawn and landscape needs efficiently. We promise a hassle-free experience and deliver on our commitments every time. <span><a href="/contact">Choose Horizion Landscaping</a></span> for a trustworthy and swift solution to your outdoor care needs.</p>
    </div>
</section>

<style>
    section {
        width: 100%;
        padding: 20px;
        background-color: #88665c;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column-reverse;
        gap: 40px;
    }

    .p1 {
        gap: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .p2 {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    h2 {
        font-weight: 700;
        color: #ffffff;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-weight: normal;
        font-family: sans-serif;
        color: #e5e6e9;
        font-size: 15px;
        line-height: 30px;
        max-width: 84ch;
        text-indent: 1em;
    }

    p span a {
        color: rgb(177, 176, 176)
    }

    .image-box {
        width: 100%;
        max-width: 540px;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
    }

    @media screen and (min-width: 1200px) {
        section {
            display: grid;
            grid-template-columns: 2fr 3fr;
            align-items: center;
            justify-content: center;
            padding: 150px;
        }

        .p1 {
            gap: 20px;
        }

        .p2 {
            justify-content: flex-start;
        }
    }
</style>