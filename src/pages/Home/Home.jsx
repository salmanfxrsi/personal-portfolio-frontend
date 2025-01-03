import Banner from "./Banner/Banner";
import Tech from "./Tech/Tech";

const Home = () => {
  return (
    <div>
      <section className="w-11/12 lg:container mx-auto my-12">
        <Banner></Banner>
      </section>
      <section className="w-11/12 lg:container mx-auto py-24">
        <Tech></Tech>
      </section>
    </div>
  );
};

export default Home;
