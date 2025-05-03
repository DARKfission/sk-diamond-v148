const fs = require("fs")

// Create the services index page
const servicesHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Services | SK Diamond</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    .bg-skblue-600 {
      background-color: #2563eb;
    }
    .hover\\:bg-skblue-700:hover {
      background-color: #1d4ed8;
    }
    .text-skblue-600 {
      color: #2563eb;
    }
    .border-skblue-600 {
      border-color: #2563eb;
    }
    .hover\\:bg-skblue-600:hover {
      background-color: #2563eb;
    }
    .from-skblue-600 {
      --tw-gradient-from: #2563eb;
    }
    .to-skorange-500 {
      --tw-gradient-to: #f97316;
    }
  </style>
</head>
<body class="bg-gray-50">
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-skblue-600">SK Diamond</a>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="/" class="text-gray-600 hover:text-skblue-600">Home</a></li>
            <li><a href="/services" class="text-skblue-600 font-medium">Services</a></li>
            <li><a href="/about" class="text-gray-600 hover:text-skblue-600">About</a></li>
            <li><a href="/contact" class="text-gray-600 hover:text-skblue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <main class="min-h-screen">
    <div class="bg-white py-12 md:py-20">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Discover our comprehensive range of diamond services, from expert cutting and polishing to custom designs and quality assessment.
        </p>
      </div>
    </div>

    <section class="py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/services/diamond-cutting" class="block">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop" alt="Diamond Cutting" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-skblue-600">Diamond Cutting</h3>
                <p class="text-gray-600">Our expert cutters transform rough diamonds into brilliant gems, maximizing their natural beauty and value.</p>
                <div class="mt-4 flex justify-end">
                  <span class="text-skblue-600 font-medium flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a href="/services/diamond-polishing" class="block">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop" alt="Diamond Polishing" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-skblue-600">Diamond Polishing</h3>
                <p class="text-gray-600">Our polishing process brings out the true brilliance of each diamond, creating a flawless finish that maximizes light reflection.</p>
                <div class="mt-4 flex justify-end">
                  <span class="text-skblue-600 font-medium flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a href="/services/custom-design" class="block">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop" alt="Custom Design" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-skblue-600">Custom Design</h3>
                <p class="text-gray-600">We work closely with clients to create custom diamond cuts and designs that meet their specific requirements and bring their vision to life.</p>
                <div class="mt-4 flex justify-end">
                  <span class="text-skblue-600 font-medium flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a href="/services/diamond-recutting" class="block">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2033&auto=format&fit=crop" alt="Diamond Recutting" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-skblue-600">Diamond Recutting</h3>
                <p class="text-gray-600">We transform older or damaged diamonds by recutting them to modern standards, improving their appearance and value.</p>
                <div class="mt-4 flex justify-end">
                  <span class="text-skblue-600 font-medium flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a href="/services/quality-assessment" class="block">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop" alt="Quality Assessment" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-skblue-600">Quality Assessment</h3>
                <p class="text-gray-600">Our comprehensive quality assessment service evaluates diamonds based on the 4Cs and other important factors.</p>
                <div class="mt-4 flex justify-end">
                  <span class="text-skblue-600 font-medium flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-skblue-600 to-skorange-500 text-white">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Services?</h2>
        <p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Contact SK Diamond today to discuss your specific needs and how our services can help you achieve your goals.
        </p>
        <a href="/contact">
          <button class="bg-white text-skblue-600 hover:bg-white/90 px-6 py-3 rounded-md font-medium">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  </main>

  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">SK Diamond</h3>
          <p class="text-gray-400">Exceptional diamond cutting and polishing services for discerning clients worldwide.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/services" class="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="/about" class="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <address class="text-gray-400 not-italic">
            123 Diamond District<br>
            New York, NY 10001<br>
            <a href="tel:+1234567890" class="hover:text-white">+1 (234) 567-890</a><br>
            <a href="mailto:info@skdiamond.com" class="hover:text-white">info@skdiamond.com</a>
          </address>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; ${new Date().getFullYear()} SK Diamond. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>
`

// Write the HTML file
fs.writeFileSync("out/services/index.html", servicesHtml)
console.log("Generated services index page")
