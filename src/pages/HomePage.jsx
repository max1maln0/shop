import Footer from "../components/Footer";
import Accordion from "./sections/Accordion";
import Categories from "./sections/Categories";
import Hero from "./sections/Hero";
import Popular from "./sections/Popular";


export default function HomePage() {
    return(
        <>
            <Hero />
            <Categories />
            <Popular />
            <Accordion />
            <Footer />
        </>
    )
}