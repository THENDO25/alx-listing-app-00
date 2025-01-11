import Image from "next/image";
import localFont from "next/font/local";
import PropertyCard from '../components/PropertyCard';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import Pill from '../components/Pill';
import Head from 'next/head';

// Define fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define filters
const filters = [
  { label: 'Top Villa', active: true },
  { label: 'Self Checkin', active: false },
  // Add more filters here
];

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Find your favorite place here!</title>
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Hero Section */}
        <section className="hero-section">
          <Image
            src="/background-image.jpg"
            alt="Background Image"
            width={1920}
            height={1080}
          />
          <div className="hero-content">
            <h1>Find your favorite place here!</h1>
            <p>The best prices for over 2 million properties worldwide.</p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section">
          {filters.map((filter, index) => (
            <Pill key={index} label={filter.label} active={filter.active} />
          ))}
        </section>

        {/* Listing Section */}
        <section className="listing-section">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </section>
      </main>
    </div>
  );
}