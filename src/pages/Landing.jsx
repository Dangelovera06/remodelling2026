import React from "react";

export default function Landing() {
  const countertopMaterials = [
    {
      name: "Granite",
      image: "/materials/granite.png",
      pros: ["Extremely durable", "Heat resistant", "Unique patterns"],
      cons: ["Requires sealing", "Heavy weight", "Higher cost"],
      priceRange: "$50-200/sq ft installed",
      bestFor: "High-traffic kitchens that need durability"
    },
    {
      name: "Quartz",
      image: "/materials/quartz.png",
      pros: ["Non-porous surface", "Low maintenance", "Consistent patterns"],
      cons: ["Not heat resistant", "Can look manufactured", "Expensive"],
      priceRange: "$60-150/sq ft installed",
      bestFor: "Busy families who want easy maintenance"
    },
    {
      name: "Marble",
      image: "/materials/marble.png",
      pros: ["Timeless elegance", "Cool surface for baking", "Adds home value"],
      cons: ["Stains easily", "Scratches", "High maintenance"],
      priceRange: "$75-250/sq ft installed",
      bestFor: "Luxury kitchens and baking enthusiasts"
    },
    {
      name: "Butcher Block",
      image: "/materials/butcher-block.png",
      pros: ["Warm aesthetic", "Can be refinished", "Budget-friendly"],
      cons: ["Needs regular oiling", "Can harbor bacteria", "Water damage risk"],
      priceRange: "$40-100/sq ft installed",
      bestFor: "Farmhouse and rustic kitchen styles"
    },
    {
      name: "Concrete",
      image: "/materials/concrete.png",
      pros: ["Fully customizable", "Industrial aesthetic", "Durable"],
      cons: ["Requires sealing", "Can crack", "Heavy"],
      priceRange: "$70-150/sq ft installed",
      bestFor: "Modern and industrial kitchen designs"
    },
    {
      name: "Laminate",
      image: "/materials/quartz-modern.png",
      pros: ["Most affordable", "Easy installation", "Many designs"],
      cons: ["Not heat resistant", "Can chip", "Lower resale value"],
      priceRange: "$10-40/sq ft installed",
      bestFor: "Budget renovations and rentals"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-[#E8E4DE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-serif font-semibold text-[#2D2D2D]">
              countertops<span className="text-[#B8860B]">.com</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#why-team" className="text-sm text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors">Why Team Matters</a>
              <a href="#materials" className="text-sm text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors">Materials</a>
              <a href="#process" className="text-sm text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors">Our Process</a>
              <a href="#contact" className="cta-button text-sm py-2 px-4">Get Free Quote</a>
            </div>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Team Focused */}
      <header className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">The #1 Factor Most Homeowners Overlook</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-[#2D2D2D] mb-6 leading-tight">
            What Happens When You <span className="text-[#B8860B]">Choose The Wrong Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-3xl mx-auto mb-8">
            Beautiful materials mean nothing without skilled hands. Learn why choosing the right fabrication team is the most critical decision in your kitchen remodel—and how to avoid costly mistakes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#contact" className="cta-button inline-flex justify-center">
              Schedule Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#why-team" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#2D2D2D] rounded-md text-[#2D2D2D] font-medium hover:bg-[#2D2D2D] hover:text-white transition-all">
              Learn Why It Matters
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-[#6B6B6B]">
            <span className="flex items-center gap-2">
              <span className="text-[#7D8B75]">✓</span> 500+ Kitchens Completed
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#7D8B75]">✓</span> 15+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#7D8B75]">✓</span> Certified Fabricators
            </span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="blog-image aspect-[16/9] overflow-hidden">
            <img 
              src="/materials/quartz-modern.png" 
              alt="Professional kitchen countertop installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Problem - Horror Stories */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">The Hard Truth</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
              What Happens When You Choose the Wrong Team
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                problem: "Cracked slabs during installation",
                cost: "$3,000 - $8,000 to replace",
                cause: "Inexperienced handlers who don't properly support heavy stone"
              },
              {
                problem: "Uneven seams that collect grime",
                cost: "$1,500+ to repair or live with forever",
                cause: "Poor measuring and rushing through fabrication"
              },
              {
                problem: "Sink cutouts that leak",
                cost: "$500 - $2,000 in water damage",
                cause: "Imprecise cuts and improper sealing techniques"
              },
              {
                problem: "Wrong measurements, won't fit",
                cost: "Weeks of delays + re-fabrication fees",
                cause: "Using outdated cardboard templating methods"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-red-400 font-semibold mb-2">{item.problem}</p>
                <p className="text-white/60 text-sm mb-3">Potential cost: <span className="text-white">{item.cost}</span></p>
                <p className="text-white/40 text-sm">Common cause: {item.cause}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/80 text-lg mb-6">
              These aren't rare occurrences. <span className="text-[#B8860B] font-semibold">1 in 4 homeowners</span> report problems with countertop installation when using unqualified contractors.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8860B] text-white rounded-md font-medium hover:bg-[#9a7209] transition-colors">
              Work with Certified Professionals Instead
            </a>
          </div>
        </div>
      </section>

      {/* Why Team Matters Section */}
      <section id="why-team" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">The Critical Factor</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D] mb-4">
              Why Your Installation Team Matters More Than Materials
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              You can buy the most expensive granite in the world, but if it's cut wrong, measured wrong, or installed wrong—you've just wasted thousands of dollars.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="blog-image aspect-[4/3] overflow-hidden">
                <img 
                  src="/materials/marble.png" 
                  alt="Precision countertop fabrication"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                  <span className="text-[#B8860B] text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[#2D2D2D] mb-2">Precision Cuts = Perfect Fit</h4>
                  <p className="text-[#6B6B6B]">
                    Professional fabricators use CNC machines that cut to within 1/16" accuracy. Amateur shops using manual tools can be off by 1/4" or more—enough to ruin your entire project.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                  <span className="text-[#B8860B] text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[#2D2D2D] mb-2">Experience Prevents Disasters</h4>
                  <p className="text-[#6B6B6B]">
                    Granite and quartz are unforgiving. One wrong move during transport or installation can crack a $5,000 slab. Experienced teams know how to handle, support, and install without damage.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                  <span className="text-[#B8860B] text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[#2D2D2D] mb-2">Invisible Seams, Lasting Beauty</h4>
                  <p className="text-[#6B6B6B]">
                    Skilled fabricators create seams so tight you can barely see them. Unskilled work leaves visible gaps that collect crumbs, harbor bacteria, and look cheap forever.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                  <span className="text-[#B8860B] text-xl">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[#2D2D2D] mb-2">Proper Support = No Cracks</h4>
                  <p className="text-[#6B6B6B]">
                    Stone countertops need proper cabinet reinforcement. Professional teams assess your cabinets and add support where needed. Skip this step and you risk stress fractures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="bg-[#B8860B] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2">93%</p>
                <p className="text-white/80 text-sm">of countertop problems are installation-related, not material defects</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2">$4,200</p>
                <p className="text-white/80 text-sm">average cost to fix amateur installation mistakes</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2">15+</p>
                <p className="text-white/80 text-sm">years of experience our certified fabricators bring</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2">100%</p>
                <p className="text-white/80 text-sm">satisfaction guaranteed on every installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Look for in a Team */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">Vetting Your Team</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D] mb-4">
              6 Non-Negotiables When Choosing a Fabrication Team
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Don't trust your kitchen to just anyone. Here's exactly what qualified professionals should have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "🏆",
                title: "Industry Certifications",
                description: "Look for Natural Stone Institute or Marble Institute of America certification. These require rigorous exams on stone handling, cutting techniques, and installation standards.",
                question: "Ask: 'Can you show me your NSI or MIA certifications?'"
              },
              {
                icon: "⚙️",
                title: "CNC & Water Jet Equipment",
                description: "Computer-controlled cutting is non-negotiable for precision. Shops using only manual methods can't achieve the accuracy needed for seamless results.",
                question: "Ask: 'What equipment do you use for cutting and edge profiling?'"
              },
              {
                icon: "📐",
                title: "Digital Laser Templating",
                description: "Cardboard templates are outdated and inaccurate. Digital laser templating captures measurements within millimeters—critical for sink and cooktop cutouts.",
                question: "Ask: 'Do you use digital templating or cardboard?'"
              },
              {
                icon: "🏭",
                title: "In-House Fabrication",
                description: "Companies that fabricate in-house control quality from start to finish. Those who outsource lose control—and problems become 'someone else's fault.'",
                question: "Ask: 'Can I tour your fabrication facility?'"
              },
              {
                icon: "📋",
                title: "Full Licensing & Insurance",
                description: "Valid contractor's license, workers' comp, and liability insurance protect YOU if something goes wrong. Unlicensed work can void your homeowner's insurance.",
                question: "Ask: 'Can you provide copies of your license and insurance certificates?'"
              },
              {
                icon: "⭐",
                title: "Verifiable References",
                description: "Any reputable team gladly provides recent references. Check online reviews too—look for consistent praise about quality, timeliness, and problem resolution.",
                question: "Ask: 'Can I speak with 3 recent customers?'"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#FDFBF7] rounded-xl p-6 border border-[#E8E4DE]">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-serif font-semibold text-[#2D2D2D] mb-2">{item.title}</h4>
                <p className="text-sm text-[#6B6B6B] mb-4">{item.description}</p>
                <p className="text-sm text-[#B8860B] font-medium italic">{item.question}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-[#FDFBF7] rounded-xl p-8 border-2 border-[#B8860B] text-center">
            <h3 className="text-2xl font-serif font-semibold text-[#2D2D2D] mb-4">
              We Check All Six Boxes
            </h3>
            <p className="text-[#6B6B6B] max-w-xl mx-auto mb-6">
              Our team is NSI-certified, uses state-of-the-art CNC equipment, and has completed over 500 successful installations. See for yourself.
            </p>
            <a href="#contact" className="cta-button inline-flex">
              Schedule Your Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-500 uppercase tracking-widest text-sm mb-4">Warning Signs</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D] mb-4">
              Red Flags: Run Away If You See These
            </h2>
          </div>

          <div className="bg-red-50 rounded-xl p-8 border border-red-100 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Prices that are significantly lower than competitors",
                "No physical shop or fabrication facility to visit",
                "Won't provide license or insurance certificates",
                "Demands large deposits upfront (over 50%)",
                "No written contract with detailed specifications",
                "Uses remnants without telling you",
                "Can't explain their fabrication process clearly",
                "Has negative reviews about quality issues",
                "Subcontracts installation to unknown workers",
                "Promises unrealistic timelines",
                "Won't let you select your specific slab",
                "No warranty on workmanship"
              ].map((flag, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 text-lg">✕</span>
                  <p className="text-[#6B6B6B]">{flag}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#6B6B6B] mb-6">
              Seeing any of these? Keep looking. The money you "save" with a cheap contractor will cost you double when you need to fix their mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D] mb-4">
              Our Proven 6-Step Process
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Every project follows this meticulous process—it's how we've achieved a 100% satisfaction rate.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Free In-Home Consultation",
                description: "We visit your kitchen, assess your cabinets, discuss your vision, and provide an accurate quote—no surprises later. We'll also show you samples and help you understand which materials fit your lifestyle.",
                highlight: "No obligation, no pressure"
              },
              {
                step: "02",
                title: "Digital Laser Templating",
                description: "Our technician captures every measurement with millimeter precision using advanced laser technology. This ensures your countertops fit perfectly the first time—no gaps, no re-cuts.",
                highlight: "Accuracy within 1/16 inch"
              },
              {
                step: "03",
                title: "Personal Slab Selection",
                description: "You'll visit our warehouse and hand-select your exact slab. We'll help you understand veining patterns and how the stone will look in your specific layout. What you choose is what you get.",
                highlight: "See your actual stone before we cut"
              },
              {
                step: "04",
                title: "Precision CNC Fabrication",
                description: "Your slab is cut by computer-controlled machinery following the exact digital template. Edge profiles are polished with diamond tools for a flawless finish.",
                highlight: "State-of-the-art equipment"
              },
              {
                step: "05",
                title: "Quality Inspection",
                description: "Before leaving our shop, every countertop is inspected for chips, cracks, proper dimensions, and finish quality. We catch issues before they reach your home.",
                highlight: "Triple-checked quality control"
              },
              {
                step: "06",
                title: "Expert Installation & Sealing",
                description: "Our trained installation team (not subcontractors) carefully positions your countertops, creates invisible seams with color-matched epoxy, and properly seals everything.",
                highlight: "Installed by our own certified team"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-serif font-bold text-xl">
                  {item.step}
                </div>
                <div className="flex-1 pb-8 border-b border-[#E8E4DE] last:border-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="text-xl font-serif font-semibold text-[#2D2D2D]">{item.title}</h4>
                    <span className="text-xs bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-full font-medium">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-[#6B6B6B]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">Material Guide</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D] mb-4">
              Choose Your Material—We'll Make It Perfect
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Once you've found the right team (us!), choosing material is the fun part. Here's what you need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countertopMaterials.map((material, index) => (
              <div key={index} className="material-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={`${material.name} countertop`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-[#2D2D2D] mb-3">{material.name}</h3>
                  <p className="text-sm text-[#B8860B] font-medium mb-4">{material.priceRange}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-[#7D8B75] font-medium mb-2">Pros</p>
                    <ul className="space-y-1">
                      {material.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-[#6B6B6B] flex items-start gap-2">
                          <span className="text-[#7D8B75]">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-[#B8860B] font-medium mb-2">Cons</p>
                    <ul className="space-y-1">
                      {material.cons.map((con, i) => (
                        <li key={i} className="text-sm text-[#6B6B6B] flex items-start gap-2">
                          <span className="text-[#B8860B]">—</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-[#E8E4DE]">
                    <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Best For</p>
                    <p className="text-sm text-[#2D2D2D] font-medium">{material.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#6B6B6B] mb-6">
              Not sure which material is right for you? We'll help you decide during your free consultation.
            </p>
            <a href="#contact" className="cta-button inline-flex">
              Get Expert Material Advice
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">What Our Clients Say</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D] mb-4">
              Real Results from Real Homeowners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I got quotes from 5 companies. These guys weren't the cheapest, but they were the only ones who showed me their facility and explained every step. The difference in quality was obvious the moment I saw their work.",
                name: "Jennifer M.",
                location: "Kitchen Remodel, 2024",
                rating: 5
              },
              {
                quote: "After a nightmare experience with another company that cracked our first slab, we found this team. Night and day difference. Professional from start to finish, and the seams are invisible.",
                name: "Robert & Lisa K.",
                location: "Granite Installation",
                rating: 5
              },
              {
                quote: "They talked me out of a material that wouldn't have worked for our family and recommended something better. That kind of honesty is rare. Our quartz counters are stunning and maintenance-free.",
                name: "Amanda T.",
                location: "Full Kitchen Renovation",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#FDFBF7] rounded-xl p-6 border border-[#E8E4DE]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#B8860B]">★</span>
                  ))}
                </div>
                <p className="text-[#6B6B6B] mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#2D2D2D]">{testimonial.name}</p>
                  <p className="text-sm text-[#6B6B6B]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">Questions Answered</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do I know if a fabricator is actually qualified?",
                a: "Look for certification from the Natural Stone Institute (NSI) or Marble Institute of America (MIA). Ask to tour their facility—reputable companies welcome this. Check that they use CNC equipment (not just manual tools), digital templating, and employ their own installation team rather than subcontractors."
              },
              {
                q: "Why are some quotes so much cheaper than others?",
                a: "Cheap quotes usually mean shortcuts: using remnant pieces without disclosure, employing untrained installers, skipping quality steps, or having no warranty. The 'savings' often cost more when you need repairs. Quality fabrication requires expensive equipment and skilled labor—that has real costs."
              },
              {
                q: "What questions should I ask before hiring a countertop company?",
                a: "Ask: Can I see your certifications? Can I tour your facility? What equipment do you use? Who does the actual installation—your employees or subcontractors? What's your warranty cover? Can I select my specific slab? How do you handle problems? Get everything in writing."
              },
              {
                q: "How long does countertop installation take?",
                a: "From template to installation is typically 2-3 weeks for a standard kitchen. The actual installation day usually takes 2-4 hours. Rush jobs often lead to mistakes, so be wary of anyone promising significantly faster timelines."
              },
              {
                q: "What warranty should I expect?",
                a: "Quality fabricators offer both material warranties (often from the manufacturer, 10-15 years) AND workmanship warranties (typically 1-5 years covering installation issues). Get both in writing. If they only offer a material warranty, they're not standing behind their work."
              },
              {
                q: "Can I just replace countertops or do I need new cabinets?",
                a: "In most cases, you can replace countertops without new cabinets. However, your cabinets need to be in good condition and properly support the weight of stone (especially granite and quartz). During our consultation, we'll assess your cabinets and let you know if reinforcement is needed."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#E8E4DE] pb-6 last:border-0">
                <h3 className="text-lg font-serif font-semibold text-[#2D2D2D] mb-3">{faq.q}</h3>
                <p className="text-[#6B6B6B]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-4">Ready to Get Started?</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-6">
            Get Your Free In-Home Consultation
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let us show you the difference a qualified team makes. We'll assess your kitchen, discuss your options, and provide a detailed quote—all with zero obligation.
          </p>
          
          <div className="bg-white rounded-xl p-8 max-w-lg mx-auto mb-8">
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B]"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B]"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B] text-[#6B6B6B]">
                  <option>Project Type</option>
                  <option>Kitchen Countertops</option>
                  <option>Bathroom Countertops</option>
                  <option>Full Kitchen Remodel</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="w-full cta-button justify-center">
                Schedule My Free Consultation
              </button>
            </form>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> No Obligation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> Free Accurate Quote
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> Same-Week Appointments
            </span>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[#FDFBF7] border-t border-[#E8E4DE]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#6B6B6B]">
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-[#2D2D2D]">500+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-[#2D2D2D]">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-[#2D2D2D]">NSI</p>
              <p className="text-sm">Certified</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-[#2D2D2D]">100%</p>
              <p className="text-sm">Satisfaction Guarantee</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-[#2D2D2D]">5-Year</p>
              <p className="text-sm">Workmanship Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-16 border-t border-[#E8E4DE]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="text-2xl font-serif font-semibold text-[#2D2D2D] mb-4 inline-block">
                countertops<span className="text-[#B8860B]">.com</span>
              </a>
              <p className="text-[#6B6B6B] max-w-sm mb-4">
                Certified fabricators dedicated to precision, quality, and making your dream kitchen a reality.
              </p>
              <p className="text-[#B8860B] font-medium">Call us: (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2D2D2D] mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Kitchen Countertops</a></li>
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Bathroom Vanities</a></li>
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Kitchen Islands</a></li>
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Commercial Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#2D2D2D] mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">About Our Team</a></li>
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Our Facility</a></li>
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Reviews</a></li>
                <li><a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#E8E4DE] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#6B6B6B]">
              © 2026 countertops.com. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
