<script lang="ts">
    import logo from "../pics/logoWhite.png";
    import phone from "../pics/phone.svg";
    import mail from "../pics/mail.svg";
    // import coolFence from "../lib/assets/coolfence.svg";
</script>

<footer>
    <section class="information">
        <img src={logo} alt="LFC Logo" class="logo" />
        <p class="inf"><span><img src={phone} width="17" height="20" alt="An icon of location pin." /></span> <a class="arimo" href="tel:360-772-1155" target="_blank">(360)-772-1155</a></p>
        <p class="inf"><span><img src={mail} width="20" height="16" alt="An icon of a mail letter." /></span> <a class="arimo" href="mailto:contact@horizionlandscaping.llc" target="_blank">contact@horizionlandscaping.llc</a></p>
    </section>
    <section class="links" id="company">
        <h3 class="dm-serif-text-regular">Company</h3>
        <nav>
            <a class="outfit" href="/">Admin Portal</a>
        </nav>
    </section>
    <section class="links" id="navigate">
        <h3 class="dm-serif-text-regular">Navigate</h3>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
        </nav>
    </section>
    <!-- <img class="coolFence" loading="lazy" src={coolFence} alt="A nice svg of a cool fence."> -->
</footer>

<style>
    footer {
        max-height: 310px;
        overflow: hidden;
        background-color: #794f42;
        padding: 40px 20px;
        display: flex;
        gap: 120px;
        position: relative;
    }

    .information {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    footer img {
        /* margin-top: 4px; */
        width: 160px;
    }

    .inf {
        display: none;
        align-items: center;
        gap: 20px;
    }

    .inf span img {
        width: fit-content;
    }

    a {
        font-family: sans-serif;
    }

    p a,
    p {
        font-weight: normal;
        color: #ffffff;
        font-size: 15px;
        font-family: sans-serif;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #company {
        display: none;
    }

    #navigate {
        display: none;
    }

    .links h3 {
        font-weight: 600;
        color: #ffffff;
        font-size: 25px;
    }

    .links nav {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .links a {
        font-weight: normal;
        color: #ffffff;
        font-size: 15px;
        text-decoration: none;
    }

    .coolFence {
        position: absolute;
        top: 20px;
        right: 0;
        width: 40%;
        display: none;
    }

    @media screen and (min-width: 450px) {
        .inf {
            display: flex;
        }
    }

    @media screen and (min-width: 600px) {
        #navigate {
            display: flex;
        }
    }

    @media screen and (min-width: 900px) {
        footer {
            padding: 40px 150px;
        }

        #company {
            display: flex;
        }
    }

    @media screen and (min-width: 1500px) {
        .coolFence {
            display: block;
        }
    }
</style>