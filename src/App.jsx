import Header from './components/Header';
import Hero from './components/Hero';
import LibraryResources from './components/LibraryResources';
import LibraryServices from './components/LibraryServices';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <LibraryResources />
        <LibraryServices />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
