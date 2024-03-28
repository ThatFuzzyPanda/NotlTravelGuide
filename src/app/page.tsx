import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import FeaturedBusiness from "./components/FeaturedBusiness";
export default function Index() {
  return (
    <>
      <header></header>
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="mb-10 stats shadow">
                <div className=" stat">
                  <div className="stat-title">Avg Vistors each year</div>
                  <div className="stat-value">3,500,000</div>
                </div>
              </div>
              <h1 className="text-5xl font-bold">
                Welcome to <br /> The town of Niagara-on-the-lake
              </h1>
              <h1 className="text-2xl font-bold">
                We are happy to have you here!
              </h1>
              <p className="py-6">
                {" "}
                Many people come to Niagara-on-the-Lake. Weather its to see the
                Historic fort george, shop on the main strip, drink wine, see
                all the beautiful flowers or even check out all the haunted
                areas. There is something for everyone Here
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h1 className=" flex justify-center text-5xl font-bold">
            Featured Business
          </h1>

          <div className=""></div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
