import Welcome from "@/app/Home/Welcome";
import ImageSlider from "@/app/Home/ImageSlider";
import Service from "@/app/Home/Service";
import Aviation from "@/app/Home/Aviation";
import Iata from "@/app/Home/IATA";
import GetStarted from "@/app/Home/GetStarted";
import WhyUs from "@/app/Home/WhyUs";
import Footer from "@/app/components/Footer";

const HomePage = () => {
    return (
        <>
            <Welcome />
            <ImageSlider position='absolute' top='70%'/>
            <WhyUs />
            <Service />
            <Aviation />
            <Iata />
            <GetStarted />
        </>
    );
};

export default HomePage;