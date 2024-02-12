

import Feature from "../../components/Feature/Feature";
import Banner from "../../components/Banner/Banner";
import { dataFeatures } from "../../data/data"

function Home() {
   
    return (
        <div className="App">
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {dataFeatures.map(dataFeature =>
                    <Feature icon={dataFeature.iconURL} altImg={dataFeature.altImg} textH3={dataFeature.textH3} textP={dataFeature.textP} key={dataFeature.id} />
                )}
            </section>
        </div>
    );
}

export default Home;