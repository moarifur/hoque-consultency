import Welcome from "@/app/Home/Welcome";
import Service from "@/app/Home/Service";
import WhyUs from "@/app/Home/WhyUs";
import GetStarted from "@/app/Home/GetStarted";
import ImageSlider from "@/app/Home/ImageSlider";

const HomePage = () => {
    return (
        <>
            <Welcome />
            <ImageSlider />
            <Service />
            <WhyUs />
            <GetStarted />
        </>
    );
};

export default HomePage;