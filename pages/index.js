import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Navbar from "../components/ui-elements/nav-bar/navbar";
import Locations from "../components/home/Locations";


const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="homepage_container">
      <Navbar />

      <div className="hero_wrapper">

        <img src="/images/generic/hero-img.jpeg" alt="" />
        <Overlay />
      </div>
      <div className="cmr_container mt40 screen_margin">
        <Cmr />

      </div>
    </div>
  );
}


const Overlay = () => {
  return (
    <div className="overlay_wrapper">
      <div className="text white_text bold_text font20 ">lorem ipsum dolor sit amet</div>
      <div className="text white_text bold_text font20 ">lorem ipsum dolor sit amet</div>
      <div className="text white_text bold_text font20 ">lorem ipsum dolor sit amet</div>
    </div>
  )
}


const Cmr = () => {
  return (
    <div className="cmr_wrapper ">
      <div className="cmrimg_wrapper">
        <img src="/images/homeimgs/cmr_img.png" alt="" />
      </div>
      <div className="mufiy_wrapper">
        <div className="mufiy_yellow">
          <span className="font16 yellow_text">lorem ipsum is  dummy text</span>
          <div className="mufiy_blue">
            <span className="font16">lorem ipusm is the dummy text </span>
          </div>
        </div>
      </div>
    </div>)
}


const SecSection = () => {
  return (
    <div className="sec_section_wrapper">
      <div className="left_wrapper">
        <div className="heading  bold_text font40">¡Próximamente!
          ¡Sé parte del
          nuevo
          turbus
          !</div>
        <div className="desription mt20">
          <div>Descarga nuestra app y comienza a disfrutar
            de la experiencia turbus.</div>
          <span className="bold_text">Viaja de norte a sur, de la manera más fácil.</span>
        </div>
        <div className="buttons">
          <img src="/images/generic/Turbus-website-Google Play.png" alt="" />
          <img src="/images/generic/Turbus-website-App Store.png" alt="" />
        </div>
      </div>
      <div className="rigt_wrapper">
        <img src="/images/generic/turboos-mobile.webp" alt="" />
      </div>
    </div>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;

