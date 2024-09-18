<script lang="ts">
    import Service from "./Service.svelte";
    import ServicesCard from "./ServicesCard.svelte";
    import rake from "../pics/svgs/rake.svg";
    import mower from "../pics/svgs/mower.svg";
    import trim from "../pics/svgs/trim.svg";
    import truck from "../pics/svgs/truck.svg";
    import house from "../pics/svgs/house.svg";
    import hose from "../pics/svgs/hose.svg";
</script>

<section>
    <div class="cards">
        <ServicesCard>
            <Service
                icon={rake}
                name="Yard Cleanup"
                description="We ensure your yard is free of debris, leaves, and clutter, giving it a fresh and tidy appearance."
            />
        </ServicesCard>
        <ServicesCard>
            <Service
                icon={mower}
                name="Lawn Maintenance"
                description="From mowing and edging to fertilizing and aeration, we keep your lawn healthy and lush."
            />
        </ServicesCard>
        <ServicesCard>
            <Service
                icon={trim}
                name="Trimming"
                description="Our experts trim hedges, shrubs, and trees to enhance the aesthetic appeal and health of your plants."
            />
        </ServicesCard>
        <ServicesCard>
            <Service
                icon={truck}
                name="Hauling"
                description="We offer efficient hauling services to remove unwanted materials and debris from your property."
            />
        </ServicesCard>
        <ServicesCard>
            <Service
                icon={house}
                name="Gutter Cleaning"
                description="We clean your gutters to prevent blockages and water damage, ensuring proper drainage."
            />
        </ServicesCard>
        <ServicesCard>
            <Service
                icon={hose}
                name="Pressure Washing"
                description="Our pressure washing services remove dirt, grime, and stains from various surfaces, restoring their original look."
            />
        </ServicesCard>
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
        background-color: #ffffff;
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
            grid-template-rows: 1fr 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }

    @media screen and (min-width: 1400px) {
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }
</style>