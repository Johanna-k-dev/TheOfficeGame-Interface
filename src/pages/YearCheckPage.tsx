import {FC} from 'react';
import "../styles/pages/OfficeBackground.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import "../styles/components/containers/SimulationContainer.css"

const YearCheckPage: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <section className={"office-background-section"}>
                <div className={"simulation-container"}>
                    <h2>Bilan annuel !</h2>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default YearCheckPage;