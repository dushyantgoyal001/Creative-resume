import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProfileCard from '@/components/ProfileCard';
import CreativeCloudOffer from '@/components/CreativeCloudOffer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Work Summary */}
            <CreativeCloudOffer />
          </div>

          {/* Right Column - Profile */}
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

