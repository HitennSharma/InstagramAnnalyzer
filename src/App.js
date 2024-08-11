import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DashboardCard from './Components/DashboardCard';

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <DashboardCard title="Twitter Engagement" content="Data about Twitter engagement will be displayed here." />
      </main>
      <Footer />
    </div>
  );
};

export default App;
