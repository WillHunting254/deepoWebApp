import { createFileRoute } from '@tanstack/react-router'
import {
  Mail, MapPin, Building2
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8">
          {/* Logo and Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <img 
                src="/deepoLogo1.png" 
                alt="Deepo Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              In aanbouw
            </h1>
            <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
              We zijn hard aan het werk om onze website te bouwen. Kom binnenkort terug!
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
              Contactgegevens
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Adres</p>
                  <p className="text-gray-700 text-sm sm:text-base">Europarklaan 2067</p>
                  <p className="text-gray-700 text-sm sm:text-base">Houthalen</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
                  <a 
                    href="mailto:Info@deepo.be" 
                    className="text-orange-600 hover:text-orange-700 hover:underline text-sm sm:text-base break-all"
                  >
                    Info@deepo.be
                  </a>
                </div>
              </div>

              {/* Business Info */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Activiteit</p>
                  <p className="text-gray-700 text-sm sm:text-base">Groot en kleinhandel</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">BTW BE 0771.271.546</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center pt-4">
            <p className="text-sm text-gray-500">
              Bedankt voor uw geduld en begrip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
