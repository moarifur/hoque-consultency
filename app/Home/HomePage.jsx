import Welcome from "@/app/Home/Welcome";
import ImageSlider from "@/app/Home/ImageSlider";
import Service from "@/app/Home/Service";
import Aviation from "@/app/Home/Aviation";
import Iata from "@/app/Home/IATA";
import GetStarted from "@/app/Home/GetStarted";
import WhyUs from "@/app/Home/WhyUs";

const HomePage = () => {
    return (
        <>
            <Welcome />
            <ImageSlider />
            <Service />
            <Aviation />
            <Iata />
            <WhyUs />
            <GetStarted />
        </>
    );
};

export default HomePage;