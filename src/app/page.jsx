import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Hero from "./components/hero";
import StructuredData from "./components/StructuredData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <StructuredData />
      <Navbar />
      <Hero />
      {/* Animated SVG Divider */}
      <div aria-hidden="true" className="w-full overflow-hidden -mb-2">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 animate-pulse">
          <path fill="#06b6d4" fillOpacity="0.2" d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z;M0,48 C360,0 1080,80 1440,32 L1440,80 L0,80 Z;M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z"
            />
          </path>
        </svg>
      </div>
      <Main />
      <Footer />
    </main>
  );
}
