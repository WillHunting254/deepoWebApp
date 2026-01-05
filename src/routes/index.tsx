import { createFileRoute } from '@tanstack/react-router'
import {
  Mail, MapPin, Building2
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: [
      {
        title: 'Deepo - Groot en Kleinhandel | Houthalen',
      },
      {
        name: 'description',
        content: 'Deepo is een groot- en kleinhandel gevestigd in Houthalen. Neem contact met ons op via Info@deepo.be of bezoek ons op Europarklaan 2067, Houthalen.',
      },
      {
        name: 'keywords',
        content: 'Deepo, groot- en kleinhandel, Houthalen, Europarklaan, BE 0771.271.546, handel, België',
      },
      {
        name: 'author',
        content: 'Deepo',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'language',
        content: 'nl-BE',
      },
      {
        name: 'geo.region',
        content: 'BE-LI',
      },
      {
        name: 'geo.placename',
        content: 'Houthalen',
      },
      {
        name: 'geo.position',
        content: '51.0333;5.3667',
      },
      {
        property: 'og:title',
        content: 'Deepo - Groot en Kleinhandel | Houthalen',
      },
      {
        property: 'og:description',
        content: 'Deepo is een groot- en kleinhandel gevestigd in Houthalen. Neem contact met ons op via Info@deepo.be of bezoek ons op Europarklaan 2067, Houthalen.',
      },
      {
        property: 'og:type',
        content: 'business.business',
      },
      {
        property: 'og:url',
        content: 'https://deepo.be',
      },
      {
        property: 'og:image',
        content: 'https://deepo.be/deepoLogo1.png',
      },
      {
        property: 'og:locale',
        content: 'nl_BE',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: 'Deepo - Groot en Kleinhandel | Houthalen',
      },
      {
        name: 'twitter:description',
        content: 'Deepo is een groot- en kleinhandel gevestigd in Houthalen. Neem contact met ons op via Info@deepo.be of bezoek ons op Europarklaan 2067, Houthalen.',
      },
      {
        name: 'twitter:image',
        content: 'https://deepo.be/deepoLogo1.png',
      },
    ],
  }),
})

function App() {
  // Structured data for local business (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Deepo',
    description: 'Groot- en kleinhandel gevestigd in Houthalen, België',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Europarklaan 2067',
      addressLocality: 'Houthalen',
      addressCountry: 'BE',
    },
    email: 'Info@deepo.be',
    taxID: 'BE 0771.271.546',
    areaServed: {
      '@type': 'Country',
      name: 'België',
    },
  };

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <main className="max-w-2xl w-full">
          <article className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8">
            {/* Logo and Title */}
            <header className="text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/deepo-vector1.svg" 
                  alt="Deepo Logo - Groot en Kleinhandel Houthalen" 
                  className="h-20 sm:h-24 md:h-32 w-auto"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                In aanbouw
              </h1>
              <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
                We zijn hard aan het werk om onze website te bouwen. Kom binnenkort terug!
              </p>
            </header>

            {/* Divider */}
            <div className="border-t border-gray-200" aria-hidden="true"></div>

            {/* Contact Information */}
            <section className="space-y-4 sm:space-y-6" aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
                Contactgegevens
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Address */}
                <address className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors not-italic">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Adres</p>
                    <p className="text-gray-700 text-sm sm:text-base">Europarklaan 2067</p>
                    <p className="text-gray-700 text-sm sm:text-base">Houthalen</p>
                  </div>
                </address>

                {/* Email */}
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
                    <a 
                      href="mailto:Info@deepo.be" 
                      className="text-orange-600 hover:text-orange-700 hover:underline text-sm sm:text-base break-all"
                      aria-label="Stuur een email naar Info@deepo.be"
                    >
                      Info@deepo.be
                    </a>
                  </div>
                </div>

                {/* Business Info */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Activiteit</p>
                    <p className="text-gray-700 text-sm sm:text-base">Groot en kleinhandel</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">BTW BE 0771.271.546</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Message */}
            <footer className="text-center pt-4">
              <p className="text-sm text-gray-500">
                Bedankt voor uw geduld en begrip
              </p>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
