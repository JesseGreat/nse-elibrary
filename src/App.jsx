import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import LibraryShowcase from './components/LibraryShowcase';
import LibraryResources from './components/LibraryResources';
import LibraryServices from './components/LibraryServices';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="app">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <LibraryShowcase />
        <LibraryResources />
        <LibraryServices />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
