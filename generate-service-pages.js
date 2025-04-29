const fs = require("fs")
const path = require("path")

// Define service data
const serviceData = {
  "diamond-cutting": {
    title: "Diamond Cutting",
    description:
      "Our expert cutters transform rough diamonds into brilliant gems, maximizing their natural beauty and value.",
    image: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
    content: [
      {
        heading: "The Art of Diamond Cutting",
        text: "Diamond cutting is a precise art that requires years of expertise and a deep understanding of a diamond's natural properties. Our master cutters analyze each rough diamond to determine the optimal cut that will maximize its brilliance, fire, and overall beauty.",
        image: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
        alt: "Laser diamond cutting process",
      },
      {
        heading: "Advanced Cutting Technology",
        text: "We combine traditional cutting techniques with state-of-the-art technology to achieve the most precise cuts possible. Our advanced equipment allows us to create complex facet patterns that enhance a diamond's natural light performance.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond cutting technology",
      },
      {
        heading: "Customized Cutting Solutions",
        text: "Every diamond is unique, and our cutting approach is tailored to each stone's specific characteristics. We work closely with clients to understand their preferences and create cuts that align with their vision while maximizing the diamond's potential.",
        image: "https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?q=80&w=2070&auto=format&fit=crop",
        alt: "Custom diamond cutting",
      },
    ],
  },
  "diamond-polishing": {
    title: "Diamond Polishing",
    description:
      "Our polishing process brings out the true brilliance of each diamond, creating a flawless finish that maximizes light reflection and sparkle.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
    content: [
      {
        heading: "Precision Polishing Techniques",
        text: "Diamond polishing is the crucial final step that brings out a diamond's true brilliance. Our expert polishers use specialized techniques to create a perfectly smooth surface that maximizes light reflection and creates the signature sparkle that diamonds are known for.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
        alt: "Diamond polishing process",
      },
      {
        heading: "Multi-Stage Polishing Process",
        text: "Our comprehensive polishing process involves multiple stages, each using progressively finer abrasives to achieve a flawless finish. This meticulous approach ensures that every facet is polished to perfection, creating optimal light performance.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
        alt: "Multi-stage diamond polishing",
      },
      {
        heading: "Quality Control",
        text: "Throughout the polishing process, our quality control experts conduct rigorous inspections to ensure that each diamond meets our exacting standards. We examine every facet under magnification to verify perfect symmetry and polish quality.",
        image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2033&auto=format&fit=crop",
        alt: "Diamond quality control",
      },
    ],
  },
  "custom-design": {
    title: "Custom Design",
    description:
      "We work closely with clients to create custom diamond cuts and designs that meet their specific requirements and bring their vision to life.",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
    content: [
      {
        heading: "Collaborative Design Process",
        text: "Our custom design service begins with a detailed consultation to understand your vision and requirements. We work closely with you throughout the design process, providing sketches and 3D models to ensure that the final product perfectly matches your expectations.",
        image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
        alt: "Various diamond cutting shapes",
      },
      {
        heading: "Unique Cut Creation",
        text: "For clients seeking truly one-of-a-kind diamonds, we can create custom cuts that showcase a diamond's unique characteristics. Our master cutters can design and execute proprietary facet patterns that create distinctive light patterns and visual effects.",
        image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
        alt: "Custom diamond cut creation",
      },
      {
        heading: "From Concept to Reality",
        text: "We handle every aspect of bringing your custom design to life, from initial concept to final execution. Our integrated approach ensures seamless coordination between design, cutting, and polishing to create a finished product that exceeds your expectations.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Custom diamond design process",
      },
    ],
  },
  "diamond-recutting": {
    title: "Diamond Recutting",
    description:
      "We transform older or damaged diamonds by recutting them to modern standards, improving their appearance and value while preserving the original material.",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2033&auto=format&fit=crop",
    content: [
      {
        heading: "Revitalizing Older Diamonds",
        text: "Diamond recutting can breathe new life into older stones that may have outdated cuts, damage, or wear. Our expert cutters can transform these diamonds into modern, brilliant gems that meet today's standards for light performance and beauty.",
        image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond splitting process",
      },
      {
        heading: "Damage Repair",
        text: "For diamonds with chips, scratches, or other damage, our recutting service can remove these imperfections while preserving as much of the original material as possible. This process not only improves the diamond's appearance but can also enhance its structural integrity.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond damage repair",
      },
      {
        heading: "Value Enhancement",
        text: "In many cases, recutting can significantly increase a diamond's value by improving its cut grade, symmetry, and overall appearance. Our experts carefully analyze each stone to determine the optimal recutting strategy that will maximize its potential value.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
        alt: "Diamond value enhancement",
      },
    ],
  },
  "quality-assessment": {
    title: "Quality Assessment",
    description:
      "Our comprehensive quality assessment service evaluates diamonds based on the 4Cs and other important factors, providing detailed reports on their true value and quality.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
    content: [
      {
        heading: "Comprehensive Diamond Evaluation",
        text: "Our quality assessment service provides a thorough evaluation of a diamond's characteristics, including the 4Cs (cut, color, clarity, and carat weight) as well as additional factors that affect its value and beauty. This detailed analysis helps clients understand the true quality and worth of their diamonds.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
        alt: "Diamond under microscope inspection",
      },
      {
        heading: "Advanced Testing Equipment",
        text: "We use state-of-the-art equipment and technology to conduct our assessments, including specialized microscopes, spectrophotometers, and other tools that allow us to accurately measure and evaluate a diamond's properties. This technical approach ensures precise and reliable results.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond testing equipment",
      },
      {
        heading: "Detailed Documentation",
        text: "Following our assessment, we provide clients with comprehensive documentation that details our findings and explains the diamond's characteristics in clear, understandable terms. This documentation serves as a valuable reference for insurance, resale, or personal knowledge.",
        image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond assessment documentation",
      },
    ],
  },
}

// Generate HTML for each service
Object.entries(serviceData).forEach(([serviceId, service]) => {
  const allServices = Object.keys(serviceData).map((key) => ({
    id: key,
    title: serviceData[key].title,
  }))

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${service.title} | SK Diamond</title>
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

  <main class="flex flex-col min-h-screen relative">
    <div class="bg-white py-12 md:py-20">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">${service.title}</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">${service.description}</p>
        
        <div class="flex flex-wrap justify-center gap-2 mt-4">
          ${allServices
            .map(
              (s) => `
            <a href="/services/${s.id}" class="inline-block">
              <button class="${
                serviceId === s.id
                  ? "bg-skblue-600 hover:bg-skblue-700 text-white"
                  : "border border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white"
              } 
                px-4 py-2 rounded-md text-sm font-medium">
                ${s.title}
              </button>
            </a>
          `,
            )
            .join("")}
        </div>
        
        <div class="mt-4">
          <a href="/services">
            <button class="flex items-center gap-1 border border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Services
            </button>
          </a>
        </div>
      </div>
    </div>

    ${service.content
      .map(
        (section, index) => `
      <section class="py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}">
        <div class="container mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}">
            <div class="${index % 2 !== 0 ? "md:order-2" : ""}">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-skblue-600 rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold tracking-tight mb-6">${section.heading}</h2>
                <p class="text-gray-600 mb-6 text-justify">${section.text}</p>
              </div>
            </div>
            <div class="${index % 2 !== 0 ? "md:order-1" : ""}">
              <div class="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img src="${section.image}" alt="${section.alt}" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
      )
      .join("")}

    <section class="py-16 md:py-24 bg-gradient-to-br from-skblue-600 to-skorange-500 text-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-skblue-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Experience Our ${service.title} Service?
          </h2>
          <p class="text-white/80 max-w-2xl mx-auto mb-8 text-center">
            Contact SK Diamond today to discuss your specific needs and how our ${service.title.toLowerCase()} service
            can help you achieve your goals.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/contact">
              <button class="group bg-white text-skblue-600 hover:bg-white/90 px-6 py-3 rounded-md font-medium flex items-center">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </a>
            <a href="/services">
              <button class="group bg-white/20 border border-white text-white hover:bg-white/30 hover:border-white shadow-md px-6 py-3 rounded-md font-medium flex items-center">
                Explore Other Services
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
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
  fs.writeFileSync(`out/services/${serviceId}/index.html`, html)
  console.log(`Generated page for ${serviceId}`)
})
