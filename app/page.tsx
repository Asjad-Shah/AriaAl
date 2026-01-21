'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  ArrowRight, ChevronDown, ChevronUp, X, Menu,
  Smartphone, Fingerprint, FileText, Building2, CreditCard,
  BarChart3, Network, Lock, TrendingUp, Globe, Shield,
  Eye, Zap, Database, Brain, MessageSquare, Users
} from 'lucide-react'

const rotatingWords = [
  ['Intelligent', 'voice assistant'],
  ['Patient', 'care'],
  ['Cardiac', 'care'],
  ['Zero-latency', 'greetings'],
  ['HIPAA-compliant', 'security']
]

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [expandedLayer, setExpandedLayer] = useState<number | null>(0)
  const [expandedAgent, setExpandedAgent] = useState<number | null>(0)
  const [activeProductTab, setActiveProductTab] = useState(0)
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [typedWord1, setTypedWord1] = useState('')
  const [typedWord2, setTypedWord2] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Typing animation effect
  useEffect(() => {
    const currentWords = rotatingWords[currentWordIndex]
    setTypedWord1('')
    setTypedWord2('')
    setIsTyping(true)

    // Type first word
    let charIndex1 = 0
    const typeInterval1 = setInterval(() => {
      if (charIndex1 < currentWords[0].length) {
        setTypedWord1(currentWords[0].substring(0, charIndex1 + 1))
        charIndex1++
      } else {
        clearInterval(typeInterval1)
        // Start typing second word after a short delay
        setTimeout(() => {
          let charIndex2 = 0
          const typeInterval2 = setInterval(() => {
            if (charIndex2 < currentWords[1].length) {
              setTypedWord2(currentWords[1].substring(0, charIndex2 + 1))
              charIndex2++
            } else {
              clearInterval(typeInterval2)
              setIsTyping(false)
            }
          }, 80) // Typing speed: 80ms per character
        }, 200) // Delay before starting second word
      }
    }, 80) // Typing speed: 80ms per character

    return () => {
      clearInterval(typeInterval1)
    }
  }, [currentWordIndex])

  // Auto-rotate words
  useEffect(() => {
    const totalTypingTime = rotatingWords[currentWordIndex][0].length * 80 + 
                            rotatingWords[currentWordIndex][1].length * 80 + 
                            500 // Extra time to display
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, totalTypingTime + 2000) // Wait for typing to complete + 2 seconds display time
    return () => clearInterval(interval)
  }, [currentWordIndex])

  // Auto-rotate product tabs (slider) with smooth transitions
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveProductTab((prev) => (prev + 1) % 12)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 800) // Slide out duration - slower
    }, 6000) // Change every 6 seconds (slower)
    return () => clearInterval(interval)
  }, [isPaused])

  // Handle manual tab change with transition
  const handleTabChange = (idx: number) => {
    if (idx === activeProductTab) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveProductTab(idx)
      setTimeout(() => setIsTransitioning(false), 100)
    }, 800) // Slide out duration - slower
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    // Check if stats section is already visible on mount
    const statsElement = document.getElementById('stats')
    if (statsElement) {
      const rect = statsElement.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
      if (isInViewport) {
        setIsVisible((prev) => ({
          ...prev,
          stats: true,
        }))
      }
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])


  const companyLogos = [
    'Cardiology Clinics', 'Primary Care Practices', 'Medical Groups', 'Healthcare Systems',
    'Specialty Clinics', 'Outpatient Centers', 'Urgent Care', 'Medical Practices'
  ]

  const productTabs = [
    { name: 'Aria Clinical Voice Engine', icon: Zap },
    { name: 'Tool Orchestration', icon: Network },
    { name: 'Intelligent Inbound Handling', icon: Users },
    { name: 'Smart Escalation Logic', icon: Shield },
    { name: 'HIPAA Verification Gatekeeper', icon: Lock },
    { name: 'Zero-Latency Greeting', icon: MessageSquare },
    { name: 'Barge-In Detection', icon: Smartphone },
    { name: 'Context-Aware Scheduling', icon: FileText },
    { name: 'Automated SMS Communication', icon: MessageSquare },
    { name: 'EMR Integration', icon: Database },
    { name: 'Real-time Clinical Data', icon: TrendingUp },
    { name: 'Patient Security', icon: Shield }
  ]

  const aiAgents = [
    {
      title: 'Intelligent Voice Assistant',
      description: 'Aria AI serves as your intelligent voice assistant for patient interactions, powered by a clinical-grade voice engine for sub-second response times. Automatically distinguishes between new and existing patients, providing personalized experiences from the first interaction. Handles appointment scheduling, patient inquiries, and emergency detection with natural, human-like conversations.',
      expanded: expandedAgent === 0
    },
    {
      title: 'Emergency Detection Specialist',
      description: 'Built-in intelligence detects medical emergencies such as chest pain, providing immediate 911 emergency advice. Monitors patient tone and keywords to identify urgent situations, ensuring critical medical issues receive immediate attention and appropriate escalation to emergency services.',
      expanded: expandedAgent === 1
    },
    {
      title: 'Patient Verification Specialist',
      description: 'HIPAA-compliant "Verification Gatekeeper" pipeline with Zero-Trust logic protects Patient Health Information (PHI) through strict Date of Birth (DOB) validation before any appointment details are shared. Ensures complete security and compliance while maintaining seamless patient experience.',
      expanded: expandedAgent === 2
    },
    {
      title: 'Smart Routing Coordinator',
      description: 'Intelligent inbound handling automatically routes calls based on patient type (new vs existing), billing inquiries, or patient frustration levels. Provides seamless human handoff when needed, ensuring every patient receives appropriate care and attention while maintaining operational efficiency.',
      expanded: expandedAgent === 3
    }
  ]

  const mlLayers = [
    {
      number: '01',
      title: 'Clinical Voice Engine',
      description: 'Powered by Amazon Bedrock\'s cutting-edge Speech-to-Speech (S2S) model, enabling sub-second response times for ultra-low latency, natural conversations. High-quality pre-recorded audio triggers ensure zero-latency greetings, providing instant patient connection without any AI processing delay.',
      expanded: expandedLayer === 0
    },
    {
      number: '02',
      title: 'Tool Orchestration Registry',
      description: 'Custom-built registry that allows Aria AI to interact with clinical data in real-time, simulating complex Electronic Medical Record (EMR) integrations. Sophisticated tool orchestration enables seamless access to patient history, appointment scheduling, and clinical information through secure, HIPAA-compliant pathways.',
      expanded: expandedLayer === 1
    },
    {
      number: '03',
      title: 'Intelligent Patient Routing',
      description: 'Advanced AI automatically distinguishes between new and existing patients, ensuring appropriate routing and personalized experience from the first interaction. Smart escalation logic detects medical emergencies, billing inquiries, or patient frustration, providing immediate emergency advice (911) or seamless human handoff when needed.',
      expanded: expandedLayer === 2
    },
    {
      number: '04',
      title: 'HIPAA-Compliant Security Layer',
      description: 'Zero-Trust "Verification Gatekeeper" pipeline protects Patient Health Information (PHI) through strict Date of Birth (DOB) validation before any appointment details are shared. Barge-in detection allows natural conversation interruptions, while automated SMS confirmations provide patients with immediate written records of appointments.',
      expanded: expandedLayer === 3
    }
  ]

  const testimonials = [
    {
      quote: 'Aria AI has transformed our patient communication. The zero-latency greetings and natural conversations make patients feel heard immediately. Our staff can focus on complex cases while Aria handles routine scheduling.',
      author: 'Clinic Administrator',
      role: 'Cardiac Care Clinic',
      company: 'Regional Medical Center'
    },
    {
      quote: 'The emergency detection feature is a game-changer. When a patient mentioned chest pain, Aria immediately provided 911 guidance before our team could even respond. This could save lives.',
      author: 'Medical Director',
      role: 'Emergency Response',
      company: 'Healthcare System'
    },
    {
      quote: 'HIPAA compliance was our biggest concern, but Aria\'s Zero-Trust verification gatekeeper gives us complete confidence. Patients get instant service while their data remains protected.',
      author: 'Chief Information Officer',
      role: 'Healthcare Technology',
      company: 'Medical Group'
    }
  ]

  return (
    <main className="min-h-screen bg-white text-[#2E3238]">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-sardine-navy/95 border-b border-sardine-stats-blue/20 backdrop-blur-sm">
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1E88E5] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Aria AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#modular-blocks" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Capabilities</a>
              <a href="#ai-agents" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">AI Agents</a>
              <a href="#data-platform" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Technology</a>
              <a href="#stats" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Results</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Stories</a>
            </div>

            <button className="px-6 py-2.5 bg-gradient-to-r from-[#1E88E5] via-[#42A5F5] to-[#1565C0] text-white rounded-lg font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-[#1E88E5]/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10">
              Get a Demo
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-sardine-navy via-sardine-dark-blue to-sardine-navy">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 md:space-y-8 animate-slide-in-left">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight animate-fade-in">
                  The smartest platform for
                </h1>
                
                <div className="relative h-24 sm:h-28 md:h-32 lg:h-36">
                  <div className="absolute inset-0">
                    <div className="flex flex-col space-y-1">
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-sardine-stats-blue leading-[1.1] tracking-tight">
                        {typedWord1}
                        {isTyping && typedWord1.length < rotatingWords[currentWordIndex][0].length && (
                          <span className="inline-block w-0.5 h-[0.9em] bg-sardine-stats-blue ml-1 animate-pulse">|</span>
                        )}
                      </div>
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        {typedWord2}
                        {!isTyping && typedWord2.length === rotatingWords[currentWordIndex][1].length && (
                          <span className="inline-block w-0.5 h-[0.9em] bg-white ml-1 animate-pulse">|</span>
                        )}
                        {isTyping && typedWord1.length === rotatingWords[currentWordIndex][0].length && typedWord2.length < rotatingWords[currentWordIndex][1].length && (
                          <span className="inline-block w-0.5 h-[0.9em] bg-white ml-1 animate-pulse">|</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl pt-2 animate-delay-200">
                Intelligent AI Voice Assistant for medical clinics powered by Aria’s clinical voice engine. Sub-second response times, HIPAA-compliant security, and natural conversations that handle patient scheduling, emergencies, and inquiries with human-like intelligence.
              </p>

              <div className="pt-2 animate-delay-300">
                <button className="px-8 py-4 bg-gradient-to-r from-[#1E88E5] via-[#42A5F5] to-[#1565C0] text-white rounded-lg font-semibold text-base md:text-lg tracking-wide hover:shadow-xl hover:shadow-[#1E88E5]/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 transform transition-bounce">
                  Get a Demo →
                </button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative animate-slide-in-right animate-delay-200">
              <div className="bg-sardine-dark-blue border border-sardine-stats-blue/20 rounded-2xl shadow-2xl overflow-hidden hover-lift transition-smooth flex items-center justify-center">
                <Image
                  src="/images/aria-hero-interface.png"
                  alt="Aria AI Voice Assistant interface for patient care"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-sardine-navy border-y border-sardine-stats-blue/10 overflow-hidden" data-animate id="company-logos">
        <div className="container mx-auto max-w-7xl">
          <div className="relative">
            {/* Continuous scrolling animation */}
            <div className="flex gap-6 animate-scroll-infinite">
              {/* First set of logos */}
              {companyLogos.map((logo, idx) => (
                <div
                  key={`first-${idx}`}
                  className="group flex items-center justify-center h-16 px-6 rounded-lg border border-sardine-stats-blue/10 bg-sardine-dark-blue hover:border-sardine-stats-blue/30 hover:bg-sardine-dark-blue/80 transition-all duration-300 cursor-pointer hover-lift flex-shrink-0"
                >
                  <span className="text-gray-400 font-semibold text-sm group-hover:text-sardine-stats-blue transition-colors duration-300 text-center whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo, idx) => (
                <div
                  key={`second-${idx}`}
                  className="group flex items-center justify-center h-16 px-6 rounded-lg border border-sardine-stats-blue/10 bg-sardine-dark-blue hover:border-sardine-stats-blue/30 hover:bg-sardine-dark-blue/80 transition-all duration-300 cursor-pointer hover-lift flex-shrink-0"
                >
                  <span className="text-gray-400 font-semibold text-sm group-hover:text-sardine-stats-blue transition-colors duration-300 text-center whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modular Building Blocks */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sardine-dark-blue" data-animate id="modular-blocks">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-12 md:mb-16 ${
            isVisible['modular-blocks'] ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
              Comprehensive <span className="text-[#1E88E5]">AI voice assistant</span> capabilities
            </h2>
          </div>

          {/* Product Slider Controls */}
          <div className="flex flex-col items-center gap-6 mb-10 md:mb-12">
            {/* Dots Indicator */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {productTabs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabChange(idx)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sardine-stats-blue focus:ring-offset-2 ${
                    activeProductTab === idx
                      ? 'w-3 h-3 bg-sardine-stats-blue scale-125'
                      : 'w-2 h-2 bg-sardine-navy hover:bg-sardine-stats-blue/50'
                  }`}
                  aria-label={`Go to ${productTabs[idx].name}`}
                />
              ))}
            </div>
            
            {/* Pause/Play Control */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-sardine-stats-blue/20 bg-sardine-navy hover:border-sardine-stats-blue/50 hover:bg-sardine-dark-blue transition-all duration-300 text-sm text-white"
              aria-label={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
            >
              {isPaused ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Resume
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause
                </>
              )}
            </button>
          </div>

          {/* Active Product Detail - with dark blue gradient background */}
          <div className="bg-gradient-to-r from-sardine-navy via-sardine-dark-blue to-sardine-navy rounded-2xl p-6 md:p-8 lg:p-12 transition-smooth hover:shadow-xl relative overflow-hidden border border-sardine-stats-blue/10">
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ease-in-out ${
              isTransitioning ? 'opacity-0 translate-x-20 scale-95' : 'opacity-100 translate-x-0 scale-100'
            }`}>
              {/* Left: Text Content */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                  {productTabs[activeProductTab].name}
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {activeProductTab === 0 && "Powered by an advanced speech-to-speech engine enabling sub-second response times for ultra-low latency, natural conversations. The clinical-grade voice engine delivers human-like dialogue with instant responses, making every interaction feel seamless and professional."}
                  {activeProductTab === 1 && "Custom-built registry that allows Aria AI to interact with clinical data in real-time, simulating complex Electronic Medical Record (EMR) integrations. Sophisticated tool orchestration enables seamless access to patient history, appointment scheduling, and clinical information through secure, HIPAA-compliant pathways."}
                  {activeProductTab === 2 && "Automatically distinguishes between new and existing patients, ensuring appropriate routing and a personalized experience from the first interaction. Intelligent classification enables seamless onboarding for new patients while providing instant, personalized service for returning patients with access to their medical history."}
                  {activeProductTab === 3 && "Built-in intelligence detects medical emergencies (such as chest pain), billing inquiries, or patient frustration, providing immediate emergency advice (911) or seamless human handoff. Smart escalation ensures critical situations receive instant attention while maintaining smooth operations for routine inquiries."}
                  {activeProductTab === 4 && "HIPAA-compliant 'Verification Gatekeeper' pipeline with Zero-Trust logic protects Patient Health Information (PHI) through strict Date of Birth (DOB) validation before any appointment details are shared. This impenetrable security layer ensures complete compliance while maintaining seamless patient experience."}
                  {activeProductTab === 5 && "Employs high-quality pre-recorded audio triggers to ensure patients are greeted instantly without any AI processing delay. Zero-latency greeting provides immediate connection, making patients feel valued from the very first moment of contact, then seamlessly transitions to natural AI conversation."}
                  {activeProductTab === 6 && "Advanced processing that allows the AI to stop speaking and listen the moment a patient interrupts, mirroring natural human speech patterns. Barge-in detection enables natural, fluid conversations where patients can interrupt just like they would in a human conversation, with < 100ms response time."}
                  {activeProductTab === 7 && "Specialized logic for booking new appointments versus rescheduling existing ones to maintain data integrity. Context-aware scheduling ensures new patients complete full intake processes while existing patients benefit from streamlined rescheduling with automatic cancellation and rebooking of their current appointments."}
                  {activeProductTab === 8 && "Integration of instant SMS confirmations for appointment details, providing patients with immediate written records. Automated SMS is sent within < 2 seconds after appointment booking, giving patients peace of mind with written confirmation they can reference anytime."}
                  {activeProductTab === 9 && "Simulates complex Electronic Medical Record (EMR) integrations in real-time, allowing Aria AI to access patient history, clinical notes, and appointment data securely. EMR integration enables personalized service by leveraging existing patient information while maintaining HIPAA compliance."}
                  {activeProductTab === 10 && "Real-time access to clinical data through secure, HIPAA-compliant pathways. The system queries patient information, appointment history, and clinical records instantly, enabling Aria AI to provide informed, personalized responses based on each patient's complete medical history."}
                  {activeProductTab === 11 && "Comprehensive HIPAA-compliant security measures protect Patient Health Information (PHI) at every interaction point. Zero-Trust architecture, encrypted communications, access controls, and complete audit trails ensure patient data remains secure while providing seamless service experience."}
                </p>
                <button className="text-[#1E88E5] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 rounded group">
                  Learn more <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Right: Data Visualization */}
              <div className={`bg-gradient-to-br from-[#1E88E5] via-[#42A5F5] to-[#90CAF9] rounded-xl p-8 min-h-[400px] flex flex-col justify-center items-center hover:scale-[1.02] transition-all duration-1000 ease-in-out shadow-xl overflow-hidden ${
                isTransitioning ? 'opacity-0 -translate-x-20 scale-95' : 'opacity-100 translate-x-0 scale-100'
              }`}>
                {activeProductTab === 0 ? (
                  // Clinical Voice Engine Visualization
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-clinical-voice-engine.png"
                      alt="Aria Clinical Voice Engine"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 0}
                    />
                  </div>
                ) : activeProductTab === 1 ? (
                  // Tool Orchestration
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-tool-orchestration.png"
                      alt="Tool Orchestration Registry"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 1}
                    />
                  </div>
                ) : activeProductTab === 2 ? (
                  // Intelligent Inbound Handling
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-inbound-handling.png"
                      alt="Intelligent Inbound Handling"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 2}
                    />
                  </div>
                ) : activeProductTab === 3 ? (
                  // Smart Escalation Logic
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-escalation-logic.png"
                      alt="Smart Escalation Logic"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 3}
                    />
                  </div>
                ) : activeProductTab === 4 ? (
                  // HIPAA Verification Gatekeeper
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-verification-gatekeeper.png"
                      alt="HIPAA Verification Gatekeeper"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 4}
                    />
                  </div>
                ) : activeProductTab === 5 ? (
                  // Zero-Latency Greeting
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-zero-latency-greeting.png"
                      alt="Zero-Latency Greeting"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 5}
                    />
                  </div>
                ) : activeProductTab === 6 ? (
                  // Barge-In Detection
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-barge-in-detection.png"
                      alt="Barge-In Detection"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 6}
                    />
                  </div>
                ) : activeProductTab === 7 ? (
                  // Context-Aware Scheduling
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-context-scheduling.png"
                      alt="Context-Aware Scheduling"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 7}
                    />
                  </div>
                ) : activeProductTab === 8 ? (
                  // Automated SMS Communication
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-sms-communication.png"
                      alt="Automated SMS Communication"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 8}
                    />
                  </div>
                ) : activeProductTab === 9 ? (
                  // EMR Integration
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-hero-interface.png"
                      alt="EMR Integration"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 9}
                    />
                  </div>
                ) : activeProductTab === 10 ? (
                  // Real-time Clinical Data
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-tool-orchestration.png"
                      alt="Real-time Clinical Data"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 10}
                    />
                  </div>
                ) : activeProductTab === 11 ? (
                  // Patient Security
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/aria-hipaa-compliance.png"
                      alt="Patient Security"
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                      priority={activeProductTab === 11}
                    />
                  </div>
                ) : (
                  // Placeholder for other products (should not be reached)
                  <div className="text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <p className="text-white/70 text-sm mb-2">Product visualization</p>
                    <p className="text-white/50 text-xs">Replace with actual {productTabs[activeProductTab].name} screenshot</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sardine-dark-blue border-t border-sardine-stats-blue/10" data-animate id="ai-agents">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Accordion */}
            <div className={isVisible['ai-agents'] ? 'animate-slide-in-left' : 'opacity-0'}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
                AI Specialists that enhance your clinic operations
              </h2>
              <div className="space-y-2 mb-6 md:mb-8">
                {aiAgents.map((agent, idx) => (
                  <div
                    key={idx}
                    className={`border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${
                      agent.expanded ? 'border-sardine-stats-blue/20 shadow-lg' : 'border-white/5'
                    }`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <button
                      onClick={() => setExpandedAgent(expandedAgent === idx ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300 bg-sardine-navy focus:outline-none focus:ring-2 focus:ring-sardine-purple focus:ring-offset-2 focus:ring-offset-sardine-navy rounded-lg group"
                    >
                      <span className="font-bold text-base text-white group-hover:text-[#1E88E5] transition-colors">{agent.title}</span>
                      {agent.expanded ? (
                        <ChevronUp className="w-5 h-5 text-[#1E88E5] transition-transform duration-300 rotate-180" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-[#1E88E5] group-hover:translate-y-1" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      agent.expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-sardine-navy">
                        <p className="text-gray-300 leading-relaxed text-sm">{agent.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 bg-[#1E88E5] text-white rounded-lg font-medium hover:bg-[#1565C0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2">
                Learn More About Our AI →
              </button>
            </div>

            {/* Right: Agent Details Card */}
            <div className={`bg-sardine-navy rounded-2xl p-6 md:p-8 shadow-sm transition-smooth hover:shadow-lg border border-sardine-stats-blue/10 ${
              isVisible['ai-agents'] ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'
            }`}>
              {/* Breadcrumbs */}
              <div className="mb-5 md:mb-6">
                <div className="text-sm text-gray-400">
                  AI Agents {'>'} {aiAgents[expandedAgent || 0].title}
                </div>
              </div>

              {/* Agent Name */}
              <div className="mb-5 md:mb-6">
                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Agent Name</div>
                <div className="font-bold text-xl md:text-2xl text-white leading-tight">{aiAgents[expandedAgent || 0].title}</div>
              </div>

              {/* Mission */}
              <div className="mb-6 md:mb-8">
                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Mission</div>
                <div className="text-sm md:text-base text-gray-300 leading-relaxed">{aiAgents[expandedAgent || 0].description}</div>
              </div>

              {/* SOP Diagram */}
              <div>
                <div className="text-xs text-[#7E8DAA] mb-3 uppercase tracking-wide">SOP Diagram</div>
                <div className="bg-white rounded-lg p-6 border border-sardine-purple/20 min-h-[180px] md:min-h-[200px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/ai-agent-sop-diagram.png"
                    alt="AI Agent SOP Diagram"
                    width={600}
                    height={400}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Agent Interface */}
              <div className="mt-6">
                <div className="text-xs text-[#7E8DAA] mb-3 uppercase tracking-wide">Agent Interface</div>
                <div className="bg-white rounded-lg p-6 border border-sardine-purple/20 min-h-[200px] md:min-h-[250px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/ai-agent-interface.png"
                    alt="AI Agent Interface"
                    width={1000}
                    height={700}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sardine-navy" data-animate id="stats">
        <div className="container mx-auto max-w-7xl">
          {/* Title and Description Row */}
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 md:mb-16 lg:mb-20 ${
            isVisible['stats'] ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                The power of<br />intelligent voice AI
              </h2>
            </div>
            <div className="pt-2">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed bg-sardine-dark-blue border border-sardine-stats-blue/10 rounded-lg p-6 md:p-8 transition-smooth">
                Aria AI doesn't just handle calls—it provides intelligent, HIPAA-compliant patient interactions with sub-second response times. Get natural conversations that improve patient satisfaction while reducing staff workload.
              </p>
            </div>
          </div>

          {/* Stats and Visualization Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Statistics Stack */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { label: 'Response Time', value: '< 1s', numeric: 1, suffix: '' },
                { label: 'HIPAA Compliant', value: '100%', numeric: 100, suffix: '%' },
                { label: 'Patient Satisfaction', value: '95%+', numeric: 95, suffix: '%' }
              ].map((stat, idx) => {
                return (
                  <div 
                    key={idx}
                    className={`group relative overflow-hidden bg-sardine-dark-blue border border-sardine-stats-blue/10 rounded-xl p-6 hover:border-sardine-stats-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-sardine-stats-blue/5 ${
                      isVisible['stats'] ? 'animate-slide-in-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <BarChart3 className="w-12 h-12 text-sardine-stats-blue" />
                    </div>
                    <div className="text-sm font-medium text-gray-400 mb-2">{stat.label}</div>
                    <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight flex items-baseline gap-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    <div className="mt-4 w-full h-1.5 bg-sardine-navy rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#1E88E5] rounded-full transition-all duration-1000 ease-out group-hover:bg-[#42A5F5]"
                        style={{ 
                          width: isVisible['stats'] ? '100%' : '0%',
                          transitionDelay: `${0.5 + idx * 0.1}s` 
                        }} 
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          
            {/* Right: Stats Visualization Image */}
            <div className={`lg:col-span-7 ${isVisible['stats'] ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sardine-stats-blue/20 to-[#1E88E5]/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-sardine-navy border border-sardine-stats-blue/10 rounded-2xl p-2 md:p-3 shadow-2xl">
                  <div className="rounded-xl overflow-hidden border border-white/5 bg-sardine-dark-blue">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-sardine-navy/50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                      </div>
                      <div className="text-xs text-gray-500 font-medium ml-2">Performance Analytics</div>
                    </div>
                    <Image
                      src="/images/stats-visualization.png"
                      alt="Statistics Visualization"
                      width={1200}
                      height={600}
                      className="object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sardine-navy to-sardine-dark-blue">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Stats */}
            <div className="space-y-6 md:space-y-8">
              <div className="pt-6 border-t border-sardine-stats-blue/20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">Sub-second response times improve patient experience</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Aria AI delivers <strong>sub-second response times</strong> through its clinical-grade voice engine, ensuring patients never experience delays. Zero-latency greetings provide instant connection, while natural conversation flow makes interactions feel human-like, dramatically improving patient satisfaction scores.
                </p>
              </div>
              <div className="pt-6 border-t border-sardine-stats-blue/20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">Intelligent routing reduces staff workload</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Smart escalation logic automatically handles routine inquiries while detecting emergencies and patient frustration for immediate human handoff. This intelligent routing enables staff to focus on complex cases while Aria AI handles standard scheduling and information requests efficiently.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-3 bg-sardine-navy rounded-full overflow-hidden">
                      <div className="h-full bg-[#1E88E5] w-[75%]" />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">75%↑ Calls Handled Automatically</div>
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-sardine-navy rounded-full overflow-hidden">
                      <div className="h-full bg-[#4CAF50] w-[95%]" />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">95%↑ Patient Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Case Study Image */}
            <div className="bg-gradient-to-br from-[#1E88E5] via-[#42A5F5] to-[#90CAF9] rounded-2xl p-8 text-white shadow-xl overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">Aria AI improves patient care and clinic efficiency</h3>
                <div className="text-xs text-white/70 mb-4">Key Capabilities</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded text-xs uppercase border border-white/20">ZERO-LATENCY</span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded text-xs uppercase border border-white/20">HIPAA-COMPLIANT</span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded text-xs uppercase border border-white/20">EMR INTEGRATION</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg h-auto min-h-[400px] flex items-center justify-center border border-white/10 overflow-hidden">
                <Image
                  src="/images/aria-hero-interface.png"
                  alt="Aria AI Case Study"
                  width={800}
                  height={600}
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Capabilities Section */}
      <section
        className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sardine-dark-blue"
        data-animate
        id="innovation-capabilities"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div
            className={`text-center mb-10 md:mb-12 lg:mb-16 ${
              isVisible['innovation-capabilities'] ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
              Innovation &amp; Clinical-Grade Intelligence
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Aria is a HIPAA-compliant cloud voice ecosystem, purpose-built for HeartPlace to transform every patient
              interaction into a precise, secure, and effortless experience.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {/* Column 1: Intelligent Voice Capabilities */}
            <div
              className={`bg-sardine-navy border border-sardine-stats-blue/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover-lift transition-smooth ${
                isVisible['innovation-capabilities'] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#1E88E5]" />
                </div>
                <div className="text-xs font-semibold tracking-wide text-[#1E88E5] uppercase">
                  Intelligent Voice Capabilities
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Adaptive Patient Recognition
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Aria recognizes whether a caller is a new or existing patient within seconds, adjusting the entire
                    call flow in real time. New patients are guided through intake and onboarding, while existing
                    patients are greeted with context-aware prompts that respect their history and prior visits.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Dynamic Scheduling Intelligence
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Built on a non-linear state machine, Aria can fluidly switch between booking, rescheduling, and
                    canceling appointments mid-conversation without losing context. Every change is written back with
                    100% data integrity so clinic calendars, providers, and resources stay perfectly in sync.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Automated Digital Confirmations
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    After each interaction, Aria automatically sends SMS confirmations with appointment details, clinic
                    locations, and office hours. Patients leave every call with a clear written record they can reference
                    at any time, reducing no-shows and follow-up calls.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Clinical Safety & Privacy */}
            <div
              className={`bg-sardine-navy border border-sardine-stats-blue/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover-lift transition-smooth ${
                isVisible['innovation-capabilities'] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.35s' }}
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-lg bg-[#43A047]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#43A047]" />
                </div>
                <div className="text-xs font-semibold tracking-wide text-[#43A047] uppercase">
                  Clinical-Grade Safety &amp; Privacy
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Intelligent Reception &amp; Routing
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Acting as a digital front desk for HeartPlace, Aria triages each call into Scheduling, Clinical,
                    Refills, or Billing and routes it to the right workflow with human-like precision. The result is
                    shorter hold times, fewer transfers, and faster access to care.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Safety-First Escalation
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Aria is programmed with specialized cardiovascular escalation logic. When it detects red-flag
                    symptoms like chest pain or trouble breathing, it immediately pivots to emergency guidance (911) or
                    escalates to a clinical nurse, always prioritizing patient safety.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Zero-Trust Identity Verification
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Before sharing any sensitive information, Aria enforces a strict multi-step verification sequence.
                    Date of birth and other identifiers are securely validated to ensure only verified patients or
                    authorized caregivers can access clinical or appointment details.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Natural Interaction & Evolution */}
            <div
              className={`bg-sardine-navy border border-sardine-stats-blue/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover-lift transition-smooth ${
                isVisible['innovation-capabilities'] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-lg bg-[#FFA000]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#FFA000]" />
                </div>
                <div className="text-xs font-semibold tracking-wide text-[#FFA000] uppercase">
                  Natural Interaction &amp; 24/7 Access
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Natural Voice &amp; Barge-In Detection
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Patients can interrupt, clarify, or change direction at any time. Aria stops speaking instantly,
                    listens, and adapts the conversation flow in real time—mirroring a true human interaction while
                    maintaining clinical structure behind the scenes.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    24/7 Cloud-Based Accessibility
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Hosted in a secure cloud environment, Aria provides always-on coverage for HeartPlace, handling
                    after-hours calls, weekend requests, and high-volume days without adding strain to clinic staff.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    Built and Evolving with HeartPlace
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    From initial workflow concepts to a production-ready telephony system, Aria has been engineered
                    around HeartPlace&apos;s real cardiac care operations—and continues to learn and evolve with every
                    patient interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Platform */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sardine-navy" data-animate id="data-platform">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Accordion */}
            <div className={isVisible['data-platform'] ? 'animate-slide-in-left' : 'opacity-0'}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
                Advanced AI architecture for healthcare
              </h2>
              <div className="space-y-2">
                {mlLayers.map((layer, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 bg-sardine-dark-blue hover:shadow-md ${
                      layer.expanded ? 'border-[#1E88E5] shadow-lg' : 'border-sardine-stats-blue/20'
                    }`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <button
                      onClick={() => setExpandedLayer(expandedLayer === idx ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300 bg-sardine-dark-blue focus:outline-none focus:ring-2 focus:ring-sardine-purple focus:ring-offset-2 rounded-lg group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-[#1E88E5]">{layer.number}</span>
                        <span className="font-bold text-base text-white">{layer.title}</span>
                      </div>
                      {layer.expanded ? (
                        <ChevronUp className="w-5 h-5 text-[#1E88E5] transition-transform duration-300 rotate-180" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-[#1E88E5] group-hover:translate-y-1" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      layer.expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 pt-2 border-t border-sardine-stats-blue/20 bg-sardine-dark-blue">
                        <p className="text-gray-300 leading-relaxed text-sm">{layer.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: ML Layer Architecture and Feature Engineering */}
            <div className={`flex items-center justify-center ${
              isVisible['data-platform'] ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'
            }`}>
              <div className="relative w-full max-w-2xl space-y-6">
                {/* ML Layer Architecture Diagram */}
                <div className="bg-sardine-dark-blue border border-sardine-stats-blue/10 rounded-2xl p-6 md:p-8 overflow-hidden">
                  <div className="text-xs text-gray-500 mb-3 uppercase tracking-wide">ML Layer Architecture</div>
                  <Image
                    src="/images/ml-layer-architecture.png"
                    alt="ML Layer Architecture"
                    width={1000}
                    height={800}
                    className="object-contain w-full rounded-lg"
                  />
                </div>
                
                {/* Feature Engineering Visualization */}
                <div className="bg-sardine-dark-blue border border-sardine-stats-blue/10 rounded-2xl p-6 md:p-8 overflow-hidden">
                  <div className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Feature Engineering</div>
                  <Image
                    src="/images/feature-engineering.png"
                    alt="Feature Engineering Visualization"
                    width={1000}
                    height={600}
                    className="object-contain w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sardine-dark-blue" data-animate id="testimonials">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Quote */}
            <div className={`bg-gradient-to-br from-[#1E88E5] via-[#42A5F5] to-[#E8F4F8] rounded-2xl p-8 md:p-10 lg:p-12 text-white hover-lift transition-smooth ${
              isVisible['testimonials'] ? 'animate-slide-in-left' : 'opacity-0'
            }`}>
              <div className="text-5xl md:text-6xl font-bold mb-4 md:mb-6 opacity-50">"</div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 leading-relaxed tracking-tight">
                {testimonials[0].quote}
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-base md:text-lg">{testimonials[0].author}</div>
                  <div className="text-white/80 text-sm md:text-base font-medium">{testimonials[0].role}</div>
                </div>
              </div>
            </div>

            {/* Right: Dashboard */}
            <div className={`bg-sardine-navy border border-sardine-stats-blue/20 rounded-2xl p-5 md:p-6 hover-lift transition-smooth ${
              isVisible['testimonials'] ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'
            }`}>
              <div className="mb-4 pb-4 border-b border-sardine-stats-blue/20">
                <div className="text-sm text-gray-400">Patient Management {'>'} Active Session</div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-400 mb-2">Call Status</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-green-500 text-white rounded-full text-xs font-medium">Connected</span>
                    <span className="px-3 py-1.5 bg-[#1E88E5] text-white rounded-full text-xs font-medium">HIPAA Verified</span>
                    <span className="px-3 py-1.5 bg-[#4CAF50] text-white rounded-full text-xs font-medium">Appointment Scheduled</span>
                    <span className="px-3 py-1.5 bg-[#FF9800] text-white rounded-full text-xs font-medium">SMS Sent</span>
                  </div>
                </div>
                <div className="bg-sardine-dark-blue rounded-lg p-4 border border-[#1E88E5]/20">
                  <div className="text-xs text-gray-400 mb-1">Response Time</div>
                  <div className="text-sm text-white font-medium">0.8s • Sub-second • Clinical Voice Engine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sardine-navy to-sardine-dark-blue" data-animate id="footer-cta">
        <div className="container mx-auto max-w-4xl">
          <div className={`text-center space-y-6 md:space-y-8 ${
            isVisible['footer-cta'] ? 'animate-slide-up' : 'opacity-0'
          }`}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              See it in action.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Intelligent AI Voice Assistant for medical clinics powered by Aria’s clinical voice engine. Deploy Aria AI in your clinic environment and start providing sub-second response times with HIPAA-compliant patient interactions.
            </p>
            <div className="pt-2">
                <button className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#1E88E5] via-[#42A5F5] to-[#1565C0] text-white rounded-lg font-semibold text-base md:text-lg hover:shadow-xl hover:shadow-[#1E88E5]/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 transform transition-bounce">
                  Get a Demo →
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sardine-footer text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#1E88E5] rounded" />
                <span className="text-xl font-bold tracking-tight">Aria AI</span>
              </div>
              <div className="text-sm text-white/70 mb-4">Follow us</div>
              <div className="flex gap-4">
                <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer">X</div>
                <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer">in</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold mb-4 tracking-wide uppercase">Voice AI Features</div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Clinical Voice Engine</div>
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Intelligent Routing</div>
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Emergency Detection</div>
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Zero-Latency Greeting</div>
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Barge-In Detection</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold mb-4 tracking-wide uppercase">Healthcare Capabilities</div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>HIPAA Compliance</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>EMR Integration</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>Patient Scheduling</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>SMS Confirmations</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>Tool Orchestration</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold mb-4 tracking-wide uppercase">Resources</div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>API Documentation</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>Integration Guides</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>Case Studies</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors duration-200">
                  <ArrowRight className="w-3 h-3" />
                  <span>API Status</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold mb-4 tracking-wide uppercase">Company</div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="hover:text-white cursor-pointer transition-colors duration-200">About Aria AI</div>
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Careers</div>
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Partners</div>
                <div className="hover:text-white cursor-pointer transition-colors duration-200">Contact us</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-sm text-white/70">
            <div>© 2025 Aria AI Corp.</div>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Security</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

