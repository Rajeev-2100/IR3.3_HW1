import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <main className="container py-4 ">
        <h1>Featured Restaurants</h1>
        <article className="mx-auto">
          <img
            src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_1080%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg"
            alt=""
            className="img-fluid rounded"
          />
          <h3>Taste of Italy</h3>
          <p>ITalian | Rating: 4.5</p>
          <p>123 Main Street, Anytown, USA</p>
        </article>
        <article className="mx-auto">
          <img
            src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg"
            alt=""
            className="img-fluid rounded"
          />
          <h3 className="mx-auto">Spice Village</h3>
          <p>Indian | Rating 4.3</p>
          <p>468 Elm Street, Anytown, USA</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
