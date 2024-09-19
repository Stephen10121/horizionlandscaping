<script lang="ts">
    import GalleryCard from "./GalleryCard.svelte";
</script>

<section>
    <div class="cards">
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img1.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img2.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img3.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img4.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img5.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img6.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img7.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img8.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img9.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img10.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img11.webp" alt="Very nice landscaping." />
        </GalleryCard>
        <GalleryCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../pics/optimised/img12.webp" alt="Very nice landscaping." />
        </GalleryCard>
    </div>
</section>

<style>
    section {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        gap: 15px;
        background-color: #000000;
        padding-bottom: 40px;
    }

    .cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    @media screen and (min-width: 800px) {
        section {
            padding: 20px 150px;
        }
    }

    @media screen and (min-width: 1100px) {
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }

    @media screen and (min-width: 1400px) {
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }
</style>