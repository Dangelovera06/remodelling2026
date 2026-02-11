import React, { useState } from "react";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inSouthFL: '',
    timeline: '',
    material: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [notQualified, setNotQualified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Check if they're not in South FL
    if (name === 'inSouthFL' && value === 'no') {
      setNotQualified(true);
    } else if (name === 'inSouthFL' && value === 'yes') {
      setNotQualified(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notQualified) return;
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
    setSubmitted(false);
    setNotQualified(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      inSouthFL: '',
      timeline: '',
      material: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Quote Request Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#7D8B75] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#2D2D2D] mb-4">Thank You!</h3>
                  <p className="text-[#6B6B6B]">
                    We've received your request. One of our countertop specialists will reach out within 24 hours.
                  </p>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="mt-6 px-6 py-2 bg-[#2D2D2D] text-white rounded-lg hover:bg-[#B8860B] transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif font-semibold text-[#2D2D2D] mb-2">
                    Get Your Free Quote
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mb-6">
                    Confirm your interest and we'll connect you with a countertop specialist.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Do you live in South Florida? *</label>
                      <select
                        name="inSouthFL"
                        required
                        value={formData.inSouthFL}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="yes">Yes, I live in South Florida</option>
                        <option value="no">No, I live elsewhere</option>
                      </select>
                      {notQualified && (
                        <p className="text-red-500 text-sm mt-2">
                          Sorry, we currently only serve the South Florida area.
                        </p>
                      )}
                    </div>

                    {!notQualified && formData.inSouthFL === 'yes' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">When do you want to start? *</label>
                          <select
                            name="timeline"
                            required
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] bg-white"
                          >
                            <option value="">Select timeline...</option>
                            <option value="asap">As soon as possible</option>
                            <option value="1-2weeks">Within 1-2 weeks</option>
                            <option value="1month">Within a month</option>
                            <option value="2-3months">2-3 months</option>
                            <option value="planning">Just planning / researching</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">What material are you interested in? *</label>
                          <select
                            name="material"
                            required
                            value={formData.material}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-[#E8E4DE] rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] bg-white"
                          >
                            <option value="">Select material...</option>
                            <option value="quartz">Quartz</option>
                            <option value="granite">Granite</option>
                            <option value="marble">Marble</option>
                            <option value="quartzite">Quartzite</option>
                            <option value="butcher-block">Butcher Block</option>
                            <option value="concrete">Concrete</option>
                            <option value="unsure">Not sure yet</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-4 bg-[#B8860B] text-white rounded-lg font-medium hover:bg-[#9a7209] transition-colors mt-2"
                        >
                          Confirm Interest & Get Quote
                        </button>
                      </>
                    )}

                    <p className="text-xs text-[#6B6B6B] text-center mt-4">
                      By submitting, you agree to be contacted about your countertop project.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-[#E8E4DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-serif font-semibold text-[#2D2D2D]">
              countertops<span className="text-[#B8860B]">.com</span>
            </a>
            <button onClick={openModal} className="text-sm text-[#B8860B] font-medium hover:underline">
              Get Expert Help →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Problem Focused */}
      <header className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B8860B] uppercase tracking-widest text-sm mb-6">Kitchen Countertop Guide</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#2D2D2D] mb-8 leading-tight">
            One wrong countertop decision can cost you $3,000+.<br />
            <span className="text-[#6B6B6B]">Here's how to avoid it.</span>
          </h1>
        </div>
      </header>

      {/* Pain Points */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 text-lg text-[#2D2D2D]">
            <p className="flex items-start gap-3">
              <span className="text-[#7D8B75] mt-1">✓</span>
              No more late-night Googling "granite vs quartz"
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#7D8B75] mt-1">✓</span>
              No more pretending you understand edge profiles and seam placement
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#7D8B75] mt-1">✓</span>
              No more costly "I didn't know that was a decision" moments
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/materials/quartz-modern.png" 
              alt="Modern kitchen with beautiful countertops"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2D2D] mb-8">
            You don't realize how many countertop decisions fall on you until your contractor starts asking questions you can't answer.
          </h2>
          
          <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed">
            <p className="italic border-l-4 border-[#B8860B] pl-6 text-[#2D2D2D]">
              "What edge profile do you want?"<br />
              "What's your overhang preference?"<br />
              "Undermount or drop-in sink?"<br />
              "How thick? 2cm or 3cm?"
            </p>
            
            <p>
              You're nodding along while secretly guessing.
            </p>

            <div className="space-y-4 py-6">
              <p className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                You have 47 countertop photos saved but can't remember which material goes with which kitchen style.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                Your fabricator needs your edge profile by Friday and you didn't know that was even a decision.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                You're making a $8,000 choice based on a 10-minute showroom visit.
              </p>
            </div>

            <p>
              <strong className="text-[#2D2D2D]">You're behind because no one told you what decisions actually matter</strong> — or when your fabricator expects them.
            </p>
          </div>
        </div>
      </section>

      {/* Real Mistakes Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2D2D] mb-4">
            Every day countertop mistakes...
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-10">
            These aren't rookie mistakes—they're common ones. They happen every day, even on jobs with pros involved.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-[#E8E4DE]">
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Edge profile not specified</h3>
              <p className="text-[#6B6B6B]">
                → Fabricator installs with their default bullnose, but you wanted an eased edge. Too late—it's already cut and polished.
              </p>
              <p className="text-sm text-red-500 mt-2">Cost to fix: $1,200 - $3,000 for re-fabrication</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E8E4DE]">
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Sink cutout measured wrong</h3>
              <p className="text-[#6B6B6B]">
                → The undermount sink you ordered doesn't fit the cutout. Now you're choosing between a different sink or a new slab.
              </p>
              <p className="text-sm text-red-500 mt-2">Cost to fix: $800 - $5,000+</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E8E4DE]">
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Seam placement not discussed</h3>
              <p className="text-[#6B6B6B]">
                → Your beautiful island now has a seam running right down the middle where everyone can see it. The fabricator put it where it was easiest, not where it looked best.
              </p>
              <p className="text-sm text-red-500 mt-2">Cost to fix: Live with it or $4,000+ for new slab</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E8E4DE]">
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Wrong thickness ordered</h3>
              <p className="text-[#6B6B6B]">
                → You wanted the chunky 3cm look but the quote was for 2cm. Now you're either paying the upgrade fee or living with thinner counters than you imagined.
              </p>
              <p className="text-sm text-red-500 mt-2">Cost to fix: $500 - $2,000 upgrade fee</p>
            </div>
          </div>

          <p className="text-center text-[#6B6B6B] mt-10 italic">
            The cost? Reorders, delays, added labor, and compromising on the design you wanted.
          </p>
        </div>
      </section>

      {/* Testimonial Break */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-white italic mb-6">
            "I didn't know I needed to specify the countertop radius. I wanted a rounded edge corner to match the curves in my design. 
            The fabricator said they don't usually do that—if I hadn't asked, I would've gotten square corners on everything."
          </p>
          <p className="text-[#B8860B]">— Janet T., Olathe KS</p>
        </div>
      </section>

      {/* CTA Banner 1 */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[#B8860B]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-4">
            Skip the headaches. Work with pros who get it right the first time.
          </h3>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2D2D2D] rounded-lg font-medium hover:bg-[#FDFBF7] transition-colors"
          >
            Get a Quote from Our Guaranteed Trusted Teams
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Material Guide Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2D2D] mb-4">
            Know every material decision before you talk to anyone.
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-12">
            Here's what you actually need to understand about each countertop material—the real pros, cons, and installation implications that matter.
          </p>

          {/* Granite */}
          <div className="mb-12 pb-12 border-b border-[#E8E4DE]">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img src="/materials/granite.png" alt="Granite countertop" className="rounded-lg w-full" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-semibold text-[#2D2D2D] mb-2">Granite</h3>
                <p className="text-sm text-[#B8860B] mb-4">$50-200/sq ft installed</p>
                <p className="text-[#6B6B6B] mb-4">
                  Natural stone quarried from the earth. Every slab is unique—which is beautiful, but means you need to select your actual slab in person. Photos won't match.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What's great:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Extremely heat resistant</li>
                      <li>• Each slab is one-of-a-kind</li>
                      <li>• Lasts 50+ years</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What to know:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Needs sealing annually</li>
                      <li>• Very heavy—cabinets need support</li>
                      <li>• Some patterns look "busy"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quartz */}
          <div className="mb-12 pb-12 border-b border-[#E8E4DE]">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img src="/materials/quartz.png" alt="Quartz countertop" className="rounded-lg w-full" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-semibold text-[#2D2D2D] mb-2">Quartz</h3>
                <p className="text-sm text-[#B8860B] mb-4">$60-150/sq ft installed</p>
                <p className="text-[#6B6B6B] mb-4">
                  Engineered stone made from crushed quartz and resin. Consistent patterns, non-porous, and extremely low maintenance. The most popular choice for modern kitchens.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What's great:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Never needs sealing</li>
                      <li>• Stain resistant</li>
                      <li>• Consistent look slab-to-slab</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What to know:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• NOT heat resistant—use trivets</li>
                      <li>• Can look "manufactured"</li>
                      <li>• Not great for outdoor use</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marble */}
          <div className="mb-12 pb-12 border-b border-[#E8E4DE]">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img src="/materials/marble.png" alt="Marble countertop" className="rounded-lg w-full" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-semibold text-[#2D2D2D] mb-2">Marble</h3>
                <p className="text-sm text-[#B8860B] mb-4">$75-250/sq ft installed</p>
                <p className="text-[#6B6B6B] mb-4">
                  The classic luxury choice. Stunning veining, cool surface perfect for baking, and timeless elegance. But it requires commitment to maintenance.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What's great:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Unmatched beauty</li>
                      <li>• Cool surface for pastry</li>
                      <li>• Increases home value</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What to know:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Stains easily (wine, lemon, tomato)</li>
                      <li>• Scratches and etches</li>
                      <li>• High maintenance lifestyle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Butcher Block */}
          <div className="mb-12 pb-12 border-b border-[#E8E4DE]">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img src="/materials/butcher-block.png" alt="Butcher block countertop" className="rounded-lg w-full" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-semibold text-[#2D2D2D] mb-2">Butcher Block</h3>
                <p className="text-sm text-[#B8860B] mb-4">$40-100/sq ft installed</p>
                <p className="text-[#6B6B6B] mb-4">
                  Warm, natural wood that brings character to any kitchen. Can be sanded and refinished when damaged. Popular in farmhouse and transitional designs.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What's great:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Warm, inviting aesthetic</li>
                      <li>• Can be sanded and refinished</li>
                      <li>• More affordable</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What to know:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Needs regular oiling</li>
                      <li>• Can harbor bacteria near sink</li>
                      <li>• Water damage around sink area</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Concrete */}
          <div className="mb-12">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img src="/materials/concrete.png" alt="Concrete countertop" className="rounded-lg w-full" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-semibold text-[#2D2D2D] mb-2">Concrete</h3>
                <p className="text-sm text-[#B8860B] mb-4">$70-150/sq ft installed</p>
                <p className="text-[#6B6B6B] mb-4">
                  Fully customizable—any color, any shape, integrated sinks and drainboards. Industrial-modern aesthetic. Can be cast on-site or pre-fabricated.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What's great:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Totally custom shapes/colors</li>
                      <li>• Integrated sinks possible</li>
                      <li>• Unique industrial look</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">What to know:</p>
                    <ul className="space-y-1 text-[#6B6B6B]">
                      <li>• Requires sealing</li>
                      <li>• Can develop hairline cracks</li>
                      <li>• Very heavy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA in materials section */}
          <div className="mt-12 p-8 bg-[#2D2D2D] rounded-xl text-center">
            <h3 className="text-xl font-serif font-semibold text-white mb-3">
              Not sure which material is right for you?
            </h3>
            <p className="text-white/70 mb-6">
              Our experts will help you choose based on your lifestyle, budget, and design goals.
            </p>
            <button 
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8860B] text-white rounded-lg font-medium hover:bg-[#9a7209] transition-colors"
            >
              Get a Quote from Our Guaranteed Trusted Teams
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Decisions You Need to Make */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2D2D] mb-4">
            The decisions your fabricator expects you to have made
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-10">
            Before anyone can give you an accurate quote, you need answers to these questions. If you don't have them, you'll get three bids that are $5,000 apart—and you won't know why.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">1. Material type</h3>
              <p className="text-[#6B6B6B]">Granite, quartz, marble, etc. This affects everything else.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">2. Slab thickness</h3>
              <p className="text-[#6B6B6B]">2cm (thinner, often needs plywood backing) or 3cm (thicker, more substantial look). This changes the price significantly.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">3. Edge profile</h3>
              <p className="text-[#6B6B6B]">Eased, beveled, bullnose, ogee, waterfall... there are 15+ options. Each has a different look and some cost more than others.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">4. Sink type and mounting</h3>
              <p className="text-[#6B6B6B]">Undermount, drop-in, farmhouse? This affects the cutout and how the countertop is fabricated around it.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">5. Backsplash height</h3>
              <p className="text-[#6B6B6B]">4" standard splash, full-height slab, or tile? If slab, it comes from your countertop material and costs extra.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">6. Seam placement preferences</h3>
              <p className="text-[#6B6B6B]">Where the slabs join matters for appearance. Discuss this BEFORE templating, not after.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">7. Cooktop and faucet cutouts</h3>
              <p className="text-[#6B6B6B]">These need to be selected BEFORE templating. The fabricator needs exact dimensions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Another Testimonial */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[#FDFBF7]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-[#E8E4DE]">
            <p className="text-lg text-[#2D2D2D] italic mb-6">
              "I didn't realize the sink had to be picked so early. When I shared the undermount sink I wanted, the countertop template was already done! 
              Thankfully, the fabricator caught it before cutting—but if they hadn't, it would've meant a new slab. At least $2,500."
            </p>
            <p className="text-[#B8860B]">— Daniella S., Hoffman Estates IL</p>
          </div>
        </div>
      </section>

      {/* Finding the Right Team */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2D2D] mb-4">
            It's not just materials—it's who installs them.
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-10">
            Even expensive stone can be ruined by the wrong fabricator. Here's what separates professionals from everyone else.
          </p>

          <div className="space-y-6 text-[#6B6B6B]">
            <div className="flex gap-4">
              <span className="text-[#7D8B75] text-xl">✓</span>
              <div>
                <p className="font-medium text-[#2D2D2D]">They use digital templating</p>
                <p className="text-sm">Laser measuring captures exact dimensions. Cardboard templates are outdated and less accurate.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#7D8B75] text-xl">✓</span>
              <div>
                <p className="font-medium text-[#2D2D2D]">They have CNC cutting equipment</p>
                <p className="text-sm">Computer-controlled cuts are precise to 1/16". Manual cutting can't match this accuracy.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#7D8B75] text-xl">✓</span>
              <div>
                <p className="font-medium text-[#2D2D2D]">They let you select your actual slab</p>
                <p className="text-sm">For natural stone, you should visit and pick your exact slab. What you see in samples may not match.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#7D8B75] text-xl">✓</span>
              <div>
                <p className="font-medium text-[#2D2D2D]">They have their own installation team</p>
                <p className="text-sm">Not subcontractors. Their employees do the install, so accountability is clear.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#7D8B75] text-xl">✓</span>
              <div>
                <p className="font-medium text-[#2D2D2D]">They provide a workmanship warranty</p>
                <p className="text-sm">Material warranties are from manufacturers. Workmanship warranties mean they stand behind their own work.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-100">
            <h3 className="font-semibold text-[#2D2D2D] mb-4">Red flags to watch for:</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#6B6B6B]">
              <p className="flex items-start gap-2"><span className="text-red-400">✕</span> Prices way below competitors</p>
              <p className="flex items-start gap-2"><span className="text-red-400">✕</span> No showroom or facility to visit</p>
              <p className="flex items-start gap-2"><span className="text-red-400">✕</span> Won't show you the actual slab</p>
              <p className="flex items-start gap-2"><span className="text-red-400">✕</span> Large deposits required upfront</p>
              <p className="flex items-start gap-2"><span className="text-red-400">✕</span> No written contract</p>
              <p className="flex items-start gap-2"><span className="text-red-400">✕</span> Can't explain their process</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2D2D] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">How long does countertop installation take?</h3>
              <p className="text-[#6B6B6B]">
                From template to installation is typically 2-3 weeks. The actual installation day usually takes 2-4 hours for a standard kitchen. Rush jobs often mean mistakes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Do I need to have my sink before templating?</h3>
              <p className="text-[#6B6B6B]">
                Yes. The fabricator needs your exact sink on-site (or exact specs) to template the cutout correctly. This is one of the most common mistakes homeowners make.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">What's the difference between 2cm and 3cm thickness?</h3>
              <p className="text-[#6B6B6B]">
                3cm (about 1.25") is thicker and doesn't require plywood support underneath. 2cm (about ¾") is thinner, costs less, but needs plywood backing. 3cm has a more substantial, luxury look.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Is quartz or granite better?</h3>
              <p className="text-[#6B6B6B]">
                Neither is universally "better." Quartz is easier to maintain and consistent in appearance. Granite is more heat-resistant and each slab is unique. It depends on your priorities and lifestyle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Can I put hot pans on quartz?</h3>
              <p className="text-[#6B6B6B]">
                No. Despite being called "engineered stone," quartz contains resin that can be damaged by heat. Always use trivets. Granite is much more heat-tolerant.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-2">How do I know if my quote is fair?</h3>
              <p className="text-[#6B6B6B]">
                Get 3 quotes with identical specs. If your specs aren't complete, fabricators fill in the blanks differently—making comparison impossible. That's why understanding decisions matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-help" className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2D2D] mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-8 max-w-xl mx-auto">
            Get a free quote from our South Florida countertop specialists—no pressure, no obligation. Just real answers from people who do this every day.
          </p>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D2D2D] text-white rounded-lg font-medium hover:bg-[#B8860B] transition-colors"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-[#E8E4DE]">
        <div className="max-w-3xl mx-auto text-center">
          <a href="#" className="text-xl font-serif font-semibold text-[#2D2D2D] mb-4 inline-block">
            countertops<span className="text-[#B8860B]">.com</span>
          </a>
          <p className="text-[#6B6B6B] text-sm mb-6">
            Helping homeowners make better countertop decisions.
          </p>
          <p className="text-xs text-[#6B6B6B]">
            © 2026 countertops.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
