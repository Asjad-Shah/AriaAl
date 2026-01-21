# Image Generation Guide for Aria AI Voice Assistant Landing Page

This document contains all image requirements, generation prompts, dimensions, and specifications for the Aria: Intelligent Cardiac Care Interaction Engine landing page.

## Project Overview
**Aria: Intelligent Cardiac Care Interaction Engine** - A sophisticated AI Voice Assistant ecosystem for medical clinics, powered by a clinical-grade speech-to-speech engine with advanced capabilities, real-time clinical data integration, and intelligent patient handling.

---

## Table of Contents
1. [Hero Section Images](#hero-section-images)
2. [Technology Showcase Images](#technology-showcase-images)
3. [Feature Visualization Images](#feature-visualization-images)
4. [Technical Capability Images](#technical-capability-images)
5. [Security & Compliance Images](#security--compliance-images)
6. [AI Agent & Workflow Images](#ai-agent--workflow-images)
7. [Technical Architecture Images](#technical-architecture-images)
8. [General Guidelines](#general-guidelines)

---

## Hero Section Images

### 1. Hero Dashboard/Interface Mockup
**File Path:** `/public/images/aria-hero-interface.png`  
**Dimensions:** 1200x800px (16:10.67 aspect ratio)  
**Format:** PNG with transparency support  
**Background:** White (#FFFFFF) or light medical blue (#E8F4F8)  
**Style:** Modern healthcare AI interface, clean and patient-centric

**Generation Prompt:**
```
Create a modern healthcare AI voice assistant interface mockup for Aria AI. Clean, professional medical design with a calming blue/white color scheme. Show a voice conversation interface with:

- "Aria AI Voice Assistant" branding/logo at the top (professional, medical aesthetic)
- Active conversation transcript showing natural, flowing dialogue:
  * Aria (AI): "Hello, this is Aria, your intelligent cardiac care assistant. How can I help you today?" [Instant greeting - 0ms delay]
  * Patient: "I need to schedule an appointment"
  * Aria: "I'd be happy to help you schedule an appointment. Are you an existing patient with our clinic?"
  * Patient: "Yes, I've been there before"
  * Aria: "Great! For your security, please provide your date of birth so I can verify your information."
- Real-time voice waveform visualization showing active listening (animated, pulsing)
- Patient information card showing:
  * HIPAA-compliant lock icons
  * "Verification Gatekeeper - Zero-Trust" security badge
  * Protected PHI indicators
- Clinical voice engine badge (bottom corner): "Sub-second response"
- Appointment scheduling interface elements visible:
  * Calendar with available slots
  * Patient verification status (green checkmark after DOB confirmed)
  * SMS confirmation toggle: "Send instant confirmation"
- Medical/healthcare icons subtly integrated (stethoscope, heartbeat, medical records)
- Visual indicators showing:
  * Zero-latency instant greeting
  * Natural conversation flow
  * Real-time EMR integration status

Color scheme: Medical blue (#1E88E5), white (#FFFFFF), soft greens for positive actions (#4CAF50), calming grays (#757575). Clean, accessible typography, rounded corners, modern UI elements that feel trustworthy and patient-centric.
```

---

## Technology Showcase Images

### 2. Clinical Voice Engine Visualization
**File Path:** `/public/images/aria-clinical-voice-engine.png`  
**Dimensions:** 800x600px (4:3 aspect ratio)  
**Format:** PNG  
**Background:** Gradient from medical blue (#1E88E5) to light blue (#90CAF9)  
**Style:** Technology architecture, speech-to-speech visualization (no vendor/cloud logos)

**Generation Prompt:**
```
Create a visualization for the Aria clinical voice engine (Speech-to-Speech, S2S). Do **not** show or mention any underlying cloud provider, commercial model name, or external technology (no "Bedrock", "Nova", "Sonic", "AWS", etc.). Gradient background from medical blue (#1E88E5) to light blue (#90CAF9). Display glassmorphism cards showing:

Card 1 (Primary/Featured):
- Label: "CLINICAL VOICE ENGINE" in white/90 text, bold, large
- Subtitle: "Real-time speech-to-speech" in white/70 text
- Badge: "SPEECH-TO-SPEECH (S2S)" in blue/white gradient background
- Key metric: "SUB-SECOND RESPONSE" in green (#4CAF50), bold, text-3xl size
- Detailed metric: "< 1.0 second" response time in green, text-2xl
- Subtext: "Ultra-low latency, natural conversations" in white/70 text
- Technology highlight: "Cutting-edge clinical voice engine" in white/60 text

Card 2:
- Label: "RESPONSE TIME COMPARISON" in white/70 text
- Large number: "0.8s" average response in green, bold, text-4xl size
- Progress bar showing sub-second performance (green zone)
- Comparison chart:
  * "Traditional systems: 3-5 seconds" in red/white text
  * "Aria Voice: < 1 second" in green, bold
- Badge: "10x FASTER" in green background

Card 3:
- Label: "NATURAL CONVERSATION FLOW" in white/70 text
- Visual: Multiple speech bubbles showing fluid, back-and-forth dialogue
- Features listed:
  * "Seamless speech-to-speech" ✓
  * "No text-to-speech delay" ✓
  * "Human-like pacing" ✓
- Badge: "REAL-TIME PROCESSING" in blue background
- Waveform visualization showing smooth, continuous audio processing (no gaps)

Card 4:
- Amazon Bedrock official logo/branding element (prominent)
- AWS Cloud infrastructure icons (Lambda, API Gateway symbols)
- Connection lines showing real-time data flow from patient voice → Bedrock → Aria response
- Status: "ACTIVE & PROCESSING" in green
- Architecture note: "Cloud-based AI service" in white/50 text

Card 5 (Small badge-style):
- Label: "ULTRA-LOW LATENCY" in white/70 text
- Visual: Speedometer/performance indicator showing "Sub-second"
- Badge: "ENTERPRISE-GRADE" in purple/blue gradient

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners (rounded-xl). Include Amazon Web Services and Bedrock official branding elements. Modern, high-tech medical AI aesthetic that emphasizes speed, reliability, and natural conversation capability.
```

### 3. Tool Orchestration Registry Visualization
**File Path:** `/public/images/aria-tool-orchestration.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** System architecture, registry workflow

**Generation Prompt:**
```
Create a sophisticated tool orchestration registry visualization. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Center/Large - Hub):
- Label: "TOOL REGISTRY" in white, bold, text-2xl
- Subtitle: "Custom-Built Orchestration System" in white/70 text
- Visual: Central circular hub with connection lines radiating outward to multiple tools
- Badge: "CUSTOM-BUILT" in blue background
- Status: "ACTIVE & MONITORING" in green
- Capability: "Real-time tool orchestration" in white/70 text

Card 2:
- Label: "EMR INTEGRATION" in white/70 text
- Icon: Electronic Medical Record database symbol (medical records, folders)
- Status: "Simulated Real-time" in green (#4CAF50)
- Subtext: "Electronic Medical Records (EMR)" in white/50 text
- Features:
  * "Patient history access" ✓
  * "Appointment data sync" ✓
  * "Clinical notes integration" ✓
- Badge: "LIVE DATA" in green background

Card 3:
- Label: "CLINICAL DATA ACCESS" in white/70 text
- Icon: Medical data/patient information symbol (heartbeat monitor, patient chart)
- Metrics: "Real-time queries" in white/90, bold
- Processing: "Instant data retrieval" in green
- Badge: "SECURE ACCESS" in green background with lock icon
- Subtext: "HIPAA-compliant queries" in white/50 text

Card 4:
- Label: "TOOL EXECUTION PIPELINE" in white/70 text
- Flow diagram showing: 
  * "AI Request" → (arrow) → "Registry" → (arrow) → "Tool Selection" → (arrow) → "EMR Query" → (arrow) → "Response"
- Processing time: "< 500ms" in green, bold
- Status indicators at each stage (green checkmarks)

Card 5 (Tool Examples):
- Label: "AVAILABLE TOOLS" in white/70 text
- Multiple tool icons arranged in a grid:
  * Appointment booking tool (calendar icon)
  * Patient lookup tool (search/magnifying glass icon)
  * Identity verification tool (ID card/verification icon)
  * SMS notification tool (message icon)
  * Emergency detection tool (alert icon)
- Each tool with "READY" status in green
- Tool count: "12+ Integrated Tools" in white/70 text

Visual elements: Central registry hub with radiating connection lines showing data flow, multiple tools connected in a network pattern, EMR database visualization, real-time processing indicators, medical/healthcare iconography. Modern, technical architecture diagram style showing sophisticated orchestration capabilities.
```

---

## Feature Visualization Images

### 4. Intelligent Inbound Handling Visualization
**File Path:** `/public/images/aria-inbound-handling.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** Patient routing, decision tree visualization

**Generation Prompt:**
```
Create an intelligent inbound handling visualization showing automatic patient classification. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Entry Point):
- Label: "INCOMING CALL" in white/70 text
- Incoming call icon with phone symbol (animated/receiving)
- Status: "Auto-classifying patient type" in blue
- Processing indicator: "AI analyzing..." with loading animation

Card 2 (Decision Hub - Center/Large):
- Label: "INTELLIGENT CLASSIFICATION" in white, bold, text-xl
- Subtitle: "Automatic Patient Type Detection" in white/70 text
- Visual: Central decision point with two distinct paths branching out
- Decision logic: "AI distinguishes new vs existing" in center circle
- Badge: "INSTANT ROUTING" in blue background

Card 3 (New Patient Path - Left Side):
- Label: "NEW PATIENT DETECTED" in white/70 text
- Badge: "FIRST-TIME VISIT" in orange (#FF9800) background
- Complete onboarding flow shown:
  1. "Welcome & Introduction" → (arrow)
  2. "Collect Basic Information" → (arrow)
  3. "Create Patient Profile" → (arrow)
  4. "Insurance Verification" → (arrow)
  5. "Schedule Appointment"
- Features:
  * "Full intake process" ✓
  * "Detailed information collection" ✓
  * "Profile creation" ✓
- Personalized touch: "Warm welcome experience" in white/50 text

Card 4 (Existing Patient Path - Right Side):
- Label: "EXISTING PATIENT DETECTED" in white/70 text
- Badge: "RETURNING PATIENT" in green (#4CAF50) background
- Streamlined personalized flow:
  1. "Instant Recognition" → (arrow)
  2. "Verify Identity (DOB)" → (arrow)
  3. "Access Patient History" → (arrow)
  4. "Personalized Service" → (arrow)
  5. "Quick Appointment Booking"
- Features:
  * "Access to medical history" ✓
  * "Previous appointment preferences" ✓
  * "Faster verification" ✓
- Key benefit: "Personalized from first interaction" in white/70, bold
- Subtext: "No need to repeat information" in white/50 text

Card 5 (Routing Outcomes):
- Label: "APPROPRIATE ROUTING" in white/70 text
- Visual comparison:
  * New Patient: "Comprehensive onboarding" (orange path)
  * Existing Patient: "Personalized experience" (green path)
- Success indicator: "100% accurate classification" in green
- Badge: "SMART ROUTING" in blue background

Visual: Clear flowchart/decision tree showing routing logic with two distinct paths. Include patient icons (new patient icon vs returning patient icon), routing arrows with different colors (orange for new, green for existing), personalized experience indicators, workflow stages. Modern, clear, intuitive workflow visualization that shows the intelligent automation.
```

### 5. Smart Escalation Logic Visualization
**File Path:** `/public/images/aria-escalation-logic.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** Escalation pathways, emergency detection

**Generation Prompt:**
```
Create a smart escalation logic visualization. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Emergency - Red/Pink):
- Label: "MEDICAL EMERGENCY DETECTED" in white/90 text, bold
- Detection trigger: "Patient mentions: chest pain" in white/70 (example)
- Additional triggers shown:
  * "Shortness of breath"
  * "Severe symptoms"
  * "Emergency keywords"
- Immediate action: "911 EMERGENCY ADVICE" in red (#F44336), bold, text-2xl
- Action flow: "Detect → Alert → Immediate 911 instruction" (red arrows)
- Badge: "CRITICAL - IMMEDIATE RESPONSE" in red background
- Icon: Emergency/alert symbol (prominent, pulsing animation effect)
- Time to response: "< 1 second" in white/90, bold

Card 2 (Urgent - Orange):
- Label: "BILLING INQUIRY" in white/70 text
- Detection: "Payment concern detected" in white/70
- Action: "BILLING SPECIALIST HANDOFF" in orange (#FF9800)
- Badge: "URGENT" in orange background
- Response time: "< 2 seconds" in white/50

Card 3 (Frustration - Yellow):
- Label: "PATIENT FRUSTRATION DETECTED" in white/70 text
- Detection methods:
  * "Tone analysis" (voice sentiment detection) ✓
  * "Keyword detection" (frustration indicators) ✓
  * "Speech pattern analysis" (urgency markers) ✓
- Indicators: "Elevated stress", "Negative language", "Complaints" in white/70
- Action: "HUMAN AGENT ESCALATION" in yellow (#FFC107), bold
- Handoff process: "Seamless transition to live agent" (yellow arrows)
- Badge: "ESCALATE - HUMAN HANDOFF" in yellow background
- Subtext: "Maintains patient satisfaction" in white/50 text
- Response time: "Instant escalation trigger" in white/70

Card 4 (Normal - Green):
- Label: "STANDARD INQUIRY" in white/70 text
- Flow: "AI handles independently" in green (#4CAF50)
- Status: "NO ESCALATION NEEDED" in green
- Completion rate: "85%+" in white/70

Visual: Priority pyramid or escalation flow diagram. Color-coded severity levels. Include detection indicators, action paths, handoff points. Modern, medical emergency response aesthetic.
```

### 6. HIPAA-Compliant Verification Gatekeeper Visualization
**File Path:** `/public/images/aria-verification-gatekeeper.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** Security pipeline, zero-trust architecture

**Generation Prompt:**
```
Create a HIPAA-compliant verification gatekeeper visualization showing Zero-Trust security architecture. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Entry Point - Unauthorized State):
- Label: "INCOMING REQUEST" in white/70 text
- Icon: Patient data/medical records icon
- Status: "UNAUTHORIZED - NO ACCESS" in red (#F44336), bold
- Shield icon with lock symbol (prominent, locked state)
- PHI status: "PATIENT HEALTH INFORMATION PROTECTED" in red/white

Card 2 (Verification Gate - Center/Large):
- Label: "VERIFICATION GATEKEEPER" in white, bold, text-2xl
- Subtitle: "Zero-Trust Security Pipeline" in white/70 text
- Badge: "ZERO-TRUST LOGIC" in red/purple (#9C27B0) background, bold
- Security layers shown as multiple locked gates/barriers (visual barrier walls)
- Status: "PROTECTING PHI" in green (#4CAF50), bold
- Security motto: "Verify first, access second" in white/70 text
- Icon: Multiple security shields/locks stacked

Card 3 (DOB Validation - Critical Step):
- Label: "DATE OF BIRTH VALIDATION" in white/70 text
- Mandatory requirement: "Required before ANY data access" in white/90, bold, text-xl
- Strict enforcement: "No exceptions - Zero-Trust" in red/white
- Detailed validation steps (sequential, numbered):
  1. "Request DOB from patient" ✓ (incoming)
  2. "Verify against EMR records" ✓ (checking)
  3. "Exact match required" ✓ (validation)
  4. "Confirmation received" ✓ (verified)
- Badge: "MANDATORY STEP" in red background
- Time requirement: "Must complete before proceeding" in white/70
- Visual: Lock icon that unlocks only after validation

Card 4 (Authorized Access - Post-Verification):
- Label: "ACCESS GRANTED" in white/70 text (only appears after verification)
- Condition: "DOB verified successfully" in green
- Patient info status: "Now accessible securely" in green
- Badge: "VERIFIED & AUTHORIZED" in green background
- Security status: "PHI protected through verification" in green
- Access level: "Appointment details now shareable" in white/70
- Visual: Unlocked padlock with green checkmark

Card 5 (Rejection Path - Failed Verification):
- Label: "ACCESS DENIED" in white/70 text
- Condition: "Failed DOB verification" in red, bold
- Action: "NO appointment details shared" in red (#F44336), large text
- Security protocol: "Patient must verify identity" in white/70
- Rejection reason examples:
  * "DOB mismatch"
  * "No record found"
  * "Verification timeout"
- Security icon: Locked padlock (stays locked)
- Badge: "SECURITY MAINTAINED" in red background
- Subtext: "PHI remains protected" in white/50 text

Card 6 (HIPAA Compliance):
- Label: "HIPAA-COMPLIANT" in white/70 text
- Compliance features:
  * "PHI protection" ✓
  * "Zero-Trust architecture" ✓
  * "Audit trail maintained" ✓
  * "Access controls enforced" ✓
- Badge: "COMPLIANT" in green background with HIPAA seal
- Legal note: "Meets HIPAA security requirements" in white/50 text

Visual: Strict pipeline/flow diagram showing unbreakable gatekeeping. Multiple security barriers (gate icons), lock icons throughout (unlocked only after verification), verification checkpoints marked clearly, HIPAA compliance badges prominent, zero-trust indicators everywhere. Modern, secure, healthcare compliance aesthetic emphasizing impenetrable security.
```

### 7. Zero-Latency Greeting Visualization
**File Path:** `/public/images/aria-zero-latency-greeting.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** Audio processing, instant response visualization

**Generation Prompt:**
```
Create a zero-latency greeting visualization showing instant response capability. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Primary Feature):
- Label: "INSTANT GREETING" in white/70 text
- Response time: "0ms" in green (#4CAF50), bold, text-6xl size (very prominent)
- Badge: "ZERO-LATENCY" in green background, bold
- Subtext: "No AI processing delay" in white/70 text, bold
- Technology note: "High-quality pre-recorded audio triggers" in white/60 text

Card 2 (Pre-Recorded Audio):
- Label: "PRE-RECORDED TRIGGERS" in white/70 text
- Visual: High-quality audio waveform (smooth, professional waveform display)
- Audio quality: "High-quality audio" in green, bold
- Status: "Ready for instant playback" in green
- Icon: Professional audio/voice recording symbol
- Subtext: "No processing needed - instant playback" in white/50 text
- Technical detail: "Pre-loaded, optimized audio files" in white/50 text

Card 3 (Patient Experience Timeline):
- Label: "PATIENT EXPERIENCE" in white/70 text
- Detailed timeline visualization (horizontal timeline):
  * "Call answered" → "0ms" → Instant (green checkmark)
  * "Greeting played" → "0ms" → Instant (green checkmark)
  * "AI processing starts" → "Background" (blue indicator, no delay impact)
  * "Natural conversation begins" → "Seamless" (green arrow)
- Comparison chart:
  * "Traditional systems: 2-3s delay" in red (#F44336) with sad face icon
  * "Aria Zero-Latency: 0ms" in green (#4CAF50) with happy face icon
- Patient impact: "No waiting, immediate connection" in green, bold

Card 4 (Technology Process):
- Label: "HOW IT WORKS" in white/70 text
- Process flow:
  1. "Call received" → (instant arrow)
  2. "Pre-recorded greeting triggers" → (0ms, green)
  3. "Patient hears greeting immediately" → (instant)
  4. "AI processes in background" → (no impact on greeting)
  5. "Smooth handoff to AI conversation"
- Key benefit: "Patient never experiences delay" in green
- Badge: "INSTANT CONNECTION" in green background

Card 5 (Seamless Transition):
- Label: "SEAMLESS TRANSITION" in white/70 text
- Flow diagram: "Pre-recorded Greeting" → (smooth arrow) → "AI takes over" → (smooth arrow) → "Natural conversation"
- Badge: "SMOOTH HANDOFF" in blue background
- Visual: Continuous waveform showing no interruption or gap
- Transition quality: "Undetectable switch" in green
- Subtext: "Patient experiences one continuous conversation" in white/50 text

Visual elements: Prominent audio waveforms showing smooth, continuous audio, timeline showing 0ms response at every stage, comparison chart showing advantage, phone/call icons, audio quality indicators, smooth transition arrows. Modern, patient experience-focused design emphasizing instant gratification and professional service.
```

---

## Technical Capability Images

### 8. Barge-In Detection Visualization
**File Path:** `/public/images/aria-barge-in-detection.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** Natural conversation flow, interruption handling

**Generation Prompt:**
```
Create a barge-in detection visualization showing advanced interruption handling. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Primary Feature):
- Label: "BARGE-IN DETECTION" in white/70 text
- Description: "AI stops speaking instantly when patient interrupts" in white/90, bold, text-lg
- Key capability: "Advanced processing that allows natural interruptions" in white/70
- Badge: "ADVANCED PROCESSING" in blue background
- Icon: Conversation/interruption symbol (two-way communication arrows)

Card 2 (Conversation Flow Timeline):
- Label: "REAL-TIME INTERRUPTION HANDLING" in white/70 text
- Visual timeline showing detailed conversation flow:
  1. "Aria speaking..." (active waveform, audio bars animated)
  2. "Patient begins to speak" (detection indicator appears, yellow warning)
  3. "Interruption detected" (red indicator, "DETECTED" badge)
  4. "Aria stops instantly" (waveform stops abruptly, green checkmark)
  5. "Aria switches to listening mode" (listening icon activated, waveform for incoming)
- Response time: "< 100ms" in green (#4CAF50), bold, text-xl
- Speed indicator: "Near-instantaneous" in green

Card 3 (Natural Behavior):
- Label: "NATURAL SPEECH PATTERNS" in white/70 text
- Human-like capabilities comparison:
  * "Human-like responsiveness" ✓ (mirrors real conversation)
  * "No awkward pauses" ✓ (smooth transitions)
  * "Smooth interruptions" ✓ (no jarring stops)
  * "Natural conversation flow" ✓ (feels like talking to a person)
- Badge: "MIRRORS HUMAN BEHAVIOR" in green background
- Patient benefit: "Feels natural, not robotic" in white/70, bold
- Subtext: "Just like interrupting a human conversation" in white/50 text

Card 4 (Technology Details):
- Label: "ADVANCED TECHNOLOGY" in white/70 text
- Technical features:
  * "Real-time audio analysis" ✓ (continuous monitoring)
  * "Voice activity detection" ✓ (instant recognition)
  * "Instant pause capability" ✓ (immediate response)
  * "Background noise filtering" ✓ (accurate detection)
- Processing indicator: Real-time detection meter showing "ACTIVE"
- Detection accuracy: "99%+ accurate" in green
- Badge: "CUTTING-EDGE AI" in blue background

Card 5 (Conversation Example):
- Label: "EXAMPLE CONVERSATION" in white/70 text
- Visual conversation flow with speech bubbles:
  * Aria: "I can help you schedule..." (speech bubble with waveform)
  * Patient: [Interrupts] "Actually, I need to..." (interruption indicator)
  * Aria: [Stops speaking] [Listening mode] (smooth transition shown)
- Flow arrows showing seamless handoff
- Status: "Natural interruption handled" in green

Visual: Detailed conversation flow diagram with waveform visualizations showing interruption points clearly marked, timeline showing the < 100ms response, speech bubbles showing natural dialogue, interruption indicators (red/yellow), smooth transition arrows, listening mode activation. Modern, conversational AI aesthetic emphasizing natural human-like interaction.
```

### 9. Context-Aware Scheduling Visualization
**File Path:** `/public/images/aria-context-scheduling.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** Appointment logic, scheduling workflow

**Generation Prompt:**
```
Create a context-aware scheduling visualization showing specialized logic for different appointment types. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Intelligence Hub):
- Label: "CONTEXT-AWARE SCHEDULING" in white/70 text
- Subtitle: "Specialized Logic for Appointment Types" in white/70 text
- Badge: "CONTEXT-AWARE" in blue background, bold
- Key feature: "Different workflows for new vs rescheduling" in white/90, bold
- Two distinct paths shown with clear visual separation (split design)

Card 2 (New Appointment Path - Left):
- Label: "NEW APPOINTMENT BOOKING" in white/70 text
- Badge: "FIRST-TIME PATIENT" in orange (#FF9800) background
- Complete workflow flow:
  1. "Collect patient information" → (arrow)
  2. "Insurance verification" → (arrow)
  3. "Check provider availability" → (arrow)
  4. "Select preferred time slot" → (arrow)
  5. "Create new appointment record"
- Detailed features:
  * "Full intake process" ✓ (comprehensive)
  * "Insurance verification" ✓ (required)
  * "Preferred time selection" ✓ (flexible)
  * "New patient onboarding" ✓ (complete)
- Visual: Calendar with available slots highlighted

Card 3 (Rescheduling Path - Right):
- Label: "RESCHEDULING EXISTING APPOINTMENT" in white/70 text
- Badge: "EXISTING PATIENT" in green (#4CAF50) background
- Streamlined workflow flow:
  1. "Verify patient identity (DOB)" → (arrow)
  2. "Access current appointment data" → (arrow)
  3. "Retrieve existing appointment details" → (arrow)
  4. "Cancel/modify existing appointment" → (arrow)
  5. "Book new time slot" → (arrow)
  6. "Update appointment record"
- Detailed features:
  * "Maintain data integrity" ✓ (critical)
  * "Cancel old, book new automatically" ✓ (seamless)
  * "Confirmation updates sent" ✓ (automatic)
  * "Preserve patient history" ✓ (complete)
- Visual: Calendar showing current appointment being modified

Card 4 (Data Integrity Protection):
- Label: "DATA INTEGRITY PROTECTION" in white/70 text
- Logic diagram showing intelligent detection:
  * "Context detection: New vs Existing" (decision diamond)
  * "Specialized workflow routing" (two paths)
  * "No data conflicts or duplicates" (validation check)
  * "Clean appointment records" (result)
- Protection features:
  * "Prevents double-booking" ✓
  * "Maintains appointment history" ✓
  * "No orphaned records" ✓
  * "Accurate EMR synchronization" ✓
- Badge: "MAINTAINED" in green background
- Subtext: "Prevents booking errors and data conflicts" in white/50 text

Card 5 (Specialized Logic Benefits):
- Label: "WHY SPECIALIZED LOGIC?" in white/70 text
- Benefits comparison:
  * New appointments: "Complete information needed" → "Full intake"
  * Rescheduling: "Identity verification needed" → "Access existing data"
- Efficiency: "Faster rescheduling for returning patients" in green
- Accuracy: "Correct workflow for each scenario" in green
- Badge: "INTELLIGENT ROUTING" in blue background

Visual: Clear dual-path workflow diagram with split design (new on left, rescheduling on right), appointment calendar elements showing different states, data integrity indicators (checkmarks, validation icons), calendar icons, workflow arrows with different colors for each path, specialized logic indicators (decision points, validation steps). Modern, healthcare scheduling system aesthetic emphasizing accuracy and data integrity.
```

### 10. Automated Patient Communication (SMS) Visualization
**File Path:** `/public/images/aria-sms-communication.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #1E88E5 to #90CAF9  
**Style:** SMS integration, instant notifications

**Generation Prompt:**
```
Create an automated patient communication (SMS) visualization showing instant confirmation system. Gradient background #1E88E5 to #90CAF9. Display glassmorphism cards showing:

Card 1 (Primary Feature):
- Label: "INSTANT SMS CONFIRMATION" in white/70 text
- Delivery time: "< 2 seconds" in green (#4CAF50), bold, text-3xl size
- Speed indicator: "Automatic, immediate delivery" in green
- Badge: "AUTOMATED" in blue background, bold
- Icon: SMS/text message symbol (prominent, modern message icon)
- Trigger: "Sent automatically after appointment booking" in white/70

Card 2 (SMS Message Preview):
- Label: "SMS MESSAGE CONTENT" in white/70 text
- Visual: Realistic smartphone mockup showing SMS message thread
- Message content displayed (readable text):
  * "Aria AI - Your appointment is confirmed:"
  * "Date: [Date, e.g., Monday, January 15, 2025]"
  * "Time: [Time, e.g., 2:30 PM]"
  * "Provider: Dr. [Name, e.g., Dr. Smith]"
  * "Location: [Clinic Address]"
  * "Please arrive 15 minutes early"
- Badge: "WRITTEN RECORD" in green background
- Visual style: Modern SMS bubble design, professional medical tone

Card 3 (Patient Benefits):
- Label: "PATIENT BENEFITS" in white/70 text
- Comprehensive features list:
  * "Immediate written confirmation" ✓ (no waiting)
  * "No need to write down details" ✓ (convenience)
  * "Calendar reminder included" ✓ (optional)
  * "Easy access to appointment info" ✓ (reference anytime)
  * "Reduces missed appointments" ✓ (reminders)
  * "Professional documentation" ✓ (official record)
- Icon: Multiple checkmarks, patient satisfaction/heart icon
- Benefit highlight: "Peace of mind with written confirmation" in green, bold

Card 4 (Integration Flow):
- Label: "SEAMLESS INTEGRATION" in white/70 text
- Automated flow diagram:
  1. "Appointment booked successfully" (green checkmark)
  2. "SMS trigger activated" (blue arrow)
  3. "Message composed with details" (processing)
  4. "SMS sent instantly" (< 2 seconds, green)
  5. "Patient receives confirmation" (delivered, green checkmark)
- Status: "SEAMLESS AUTOMATION" in green, bold
- Subtext: "Automatic after scheduling - no manual steps" in white/50 text
- SMS gateway/API icons showing technical integration

Card 5 (Delivery Confirmation):
- Label: "DELIVERY STATUS" in white/70 text
- Metrics:
  * "Delivery rate: 99.8%" in green
  * "Average delivery: < 2 seconds" in green
  * "Success rate: High" in green
- Status indicators: "SENT" → "DELIVERED" (green checkmarks)
- Badge: "RELIABLE" in green background
- Subtext: "Patients receive confirmation immediately" in white/50 text

Visual: Realistic phone mockup showing SMS message (large, readable), delivery timeline showing < 2 second speed, integration flow diagram with automated steps, mobile phone icons, SMS message bubbles, instant delivery indicators (lightning bolt, speed symbols), success checkmarks. Modern, patient communication-focused design emphasizing convenience and reliability.
```

---

## Security & Compliance Images

### 11. HIPAA Compliance Badge/Visualization
**File Path:** `/public/images/aria-hipaa-compliance.png`  
**Dimensions:** 600x400px (3:2 aspect ratio)  
**Format:** PNG  
**Background:** White (#FFFFFF) or medical blue (#1E88E5)  
**Style:** Compliance certification, security badges

**Generation Prompt:**
```
Create a HIPAA compliance visualization. Clean, professional medical design. Display:

- Large HIPAA compliance badge/certification seal
- Text: "HIPAA-COMPLIANT" in bold, professional font
- Security features listed:
  * "PHI Protection"
  * "Encrypted Communications"
  * "Access Controls"
  * "Audit Trails"
- Medical/healthcare security icons
- Professional certification aesthetic
- Color scheme: Medical blue (#1E88E5), white, green for compliance indicators
```

---

## AI Agent & Workflow Images

### 12. AI Agent SOP (Standard Operating Procedure) Diagram
**File Path:** `/public/images/ai-agent-sop-diagram.png`  
**Dimensions:** 600x400px (3:2 aspect ratio)  
**Format:** PNG  
**Background:** White (#FFFFFF) or light medical blue (#E8F4F8)  
**Style:** Flowchart, workflow diagram, process visualization

**Generation Prompt:**
```
Create a Standard Operating Procedure (SOP) flowchart diagram for Aria AI voice assistant agents. Clean, professional medical workflow design. White or light medical blue background (#E8F4F8). Display a clear flowchart showing:

Main Flow:
- Start: "Patient Call Received" (rounded rectangle, medical blue #1E88E5)
- Decision Diamond: "New or Existing Patient?" (diamond shape, yellow #FFC107)
- Branch 1 (New Patient): "Full Intake Process" → "Collect Information" → "Create Profile" → "Schedule Appointment"
- Branch 2 (Existing Patient): "Verify Identity (DOB)" → "Access Patient History" → "Personalized Service" → "Schedule/Reschedule"
- Decision Point: "Emergency Detected?" (diamond, red #F44336)
- Emergency Path: "911 Guidance" or "Clinical Nurse Escalation" (red path)
- Normal Path: "Complete Request" → "Send SMS Confirmation" → "End" (green #4CAF50)
- Verification Gate: "HIPAA Verification Gatekeeper" (shield icon, purple #9C27B0) - blocks access until DOB verified

Visual Elements:
- Flowchart symbols: rectangles (processes), diamonds (decisions), ovals (start/end)
- Color-coded paths: blue (normal flow), red (emergency), green (success), yellow (decision points)
- Arrows showing direction of flow
- Icons: phone (call), shield (security), checkmark (verification), heart (patient care)
- Clear labels on each step
- Professional medical workflow aesthetic

Do not include any vendor/cloud technology names. Focus on Aria's intelligent patient handling workflow.
```

### 13. AI Agent Interface Visualization
**File Path:** `/public/images/ai-agent-interface.png`  
**Dimensions:** 1000x700px (10:7 aspect ratio)  
**Format:** PNG  
**Background:** White (#FFFFFF) or light medical blue (#E8F4F8)  
**Style:** Dashboard interface, agent control panel

**Generation Prompt:**
```
Create an AI agent interface/dashboard visualization for Aria AI voice assistant. Modern healthcare AI control panel design. White or light medical blue background (#E8F4F8). Display:

Main Interface Elements:
- Header: "Aria AI Agent Dashboard" (medical blue #1E88E5, bold)
- Active Agent Status Panel:
  * Current agent: "Intelligent Voice Assistant" (or selected agent name)
  * Status: "ACTIVE" (green badge #4CAF50)
  * Active calls: "3 concurrent sessions"
  * Response time: "0.8s average"

Agent Selection Panel:
- List of available agents:
  * "Intelligent Voice Assistant" (selected, highlighted)
  * "Emergency Detection Specialist"
  * "Patient Verification Specialist"
  * "Smart Routing Coordinator"
- Each agent with icon and brief description

Real-time Metrics Panel:
- Active conversations: "12"
- Average response time: "0.8s"
- Patient satisfaction: "95%"
- HIPAA compliance: "100%"
- Emergency escalations: "2 today"

Conversation Monitor:
- Live conversation preview (anonymized):
  * "Aria: Hello, this is Aria..."
  * "Patient: I need to schedule..."
- Real-time waveform visualization
- Status indicators: "Connected", "Verified", "Scheduling"

Control Buttons:
- "Pause Agent" / "Resume Agent"
- "View Logs"
- "Settings"
- "Emergency Override"

Visual Style:
- Clean, modern dashboard layout
- Medical blue (#1E88E5) primary color
- Green (#4CAF50) for active/success states
- Cards with subtle shadows
- Professional healthcare interface aesthetic
- Icons: phone, shield, checkmark, graph/chart

Do not include any vendor/cloud technology names or logos. Focus on Aria's agent management interface.
```

---

## Technical Architecture Images

### 14. ML Layer Architecture Diagram
**File Path:** `/public/images/ml-layer-architecture.png`  
**Dimensions:** 1000x800px (5:4 aspect ratio)  
**Format:** PNG  
**Background:** Light medical blue (#F5F5FF) or white (#FFFFFF)  
**Style:** Technical architecture diagram, layered system visualization

**Generation Prompt:**
```
Create an ML (Machine Learning) layer architecture diagram for Aria AI healthcare voice assistant. Clean, technical medical design. Light medical blue (#F5F5FF) or white background. Display a layered architecture showing:

Layer 1 (Top - User Interface):
- Label: "Patient Voice Input" (medical blue #1E88E5)
- Visual: Microphone icon, voice waveform
- Input: "Natural speech from patients"

Layer 2 (Voice Processing):
- Label: "Clinical Voice Engine" (medical blue #1E88E5)
- Sub-layers:
  * "Speech Recognition" → "Intent Understanding" → "Context Analysis"
- Visual: Processing arrows, audio waveforms
- Output: "Structured patient intent"

Layer 3 (AI Intelligence):
- Label: "Intelligent Routing & Decision Engine" (purple #9C27B0)
- Components:
  * "Patient Classification (New/Existing)"
  * "Emergency Detection"
  * "Intent Classification"
  * "Context-Aware Logic"
- Visual: Decision tree, branching logic

Layer 4 (Data Access):
- Label: "Tool Orchestration Registry" (green #4CAF50)
- Components:
  * "EMR Integration"
  * "Patient Data Access"
  * "Appointment Scheduling"
  * "SMS Gateway"
- Visual: Registry hub with connected tools

Layer 5 (Security Layer):
- Label: "HIPAA Security & Verification" (red/purple #9C27B0)
- Components:
  * "Zero-Trust Verification Gatekeeper"
  * "PHI Protection"
  * "Access Controls"
  * "Audit Trail"
- Visual: Shield icons, lock symbols

Layer 6 (Output):
- Label: "Natural Voice Response" (medical blue #1E88E5)
- Visual: Speech output, conversation flow
- Output: "Human-like voice response to patient"

Visual Elements:
- Horizontal layers stacked vertically
- Connection lines/arrows between layers showing data flow
- Color-coded layers (blue, purple, green, red)
- Icons for each component
- Clear labels and descriptions
- Professional technical diagram aesthetic

Do not include any vendor/cloud technology names, logos, or specific model names. Focus on Aria's clinical architecture layers.
```

### 15. Feature Engineering Visualization
**File Path:** `/public/images/feature-engineering.png`  
**Dimensions:** 1000x600px (5:3 aspect ratio)  
**Format:** PNG  
**Background:** Light medical blue (#F5F5FF) or white (#FFFFFF)  
**Style:** Data processing pipeline, feature extraction visualization

**Generation Prompt:**
```
Create a feature engineering visualization for Aria AI healthcare voice assistant. Clean, technical medical design. Light medical blue (#F5F5FF) or white background. Display a feature engineering pipeline showing:

Input Stage:
- Label: "Raw Patient Data" (medical blue #1E88E5)
- Examples:
  * "Voice audio waveform"
  * "Conversation transcript"
  * "Call metadata"
  * "Patient interaction history"
- Visual: Raw data icons, waveform

Feature Extraction Stage:
- Label: "Feature Extraction" (purple #9C27B0)
- Extracted features:
  * "Voice tone analysis" (sentiment score)
  * "Keyword detection" (emergency keywords, medical terms)
  * "Response timing patterns" (pause detection, speed)
  * "Patient type indicators" (new vs existing signals)
  * "Conversation flow patterns" (interruption frequency, topic changes)
- Visual: Processing icons, extraction arrows

Feature Transformation Stage:
- Label: "Feature Engineering" (green #4CAF50)
- Transformed features:
  * "Normalized sentiment scores"
  * "Emergency probability score"
  * "Patient classification probability"
  * "Intent confidence scores"
  * "Contextual feature vectors"
- Visual: Transformation arrows, mathematical symbols

Feature Selection Stage:
- Label: "Feature Selection" (orange #FF9800)
- Selected features:
  * "Top 20 most predictive features"
  * "Clinical relevance scoring"
  * "Feature importance ranking"
- Visual: Ranking list, importance bars

Output Stage:
- Label: "Engineered Features for AI Model" (medical blue #1E88E5)
- Output:
  * "Structured feature vectors"
  * "Ready for model inference"
- Visual: Output arrows, feature vectors

Visual Elements:
- Horizontal pipeline flow (left to right)
- Processing stages clearly separated
- Color-coded stages (blue, purple, green, orange)
- Icons: data, processing, transformation, selection
- Arrows showing data flow
- Feature examples listed at each stage
- Professional technical visualization aesthetic

Do not include any vendor/cloud technology names or specific model architectures. Focus on Aria's clinical feature engineering process.
```

---

## General Guidelines

### Color Scheme
- **Primary Medical Blue:** #1E88E5
- **Light Medical Blue:** #90CAF9
- **Accent Green:** #4CAF50 (positive actions, verified states)
- **Emergency Red:** #F44336 (emergencies, critical alerts)
- **Warning Orange:** #FF9800 (urgent, billing)
- **Warning Yellow:** #FFC107 (frustration, escalation)
- **White:** #FFFFFF (background, text)
- **Medical Background:** #E8F4F8 (calming, professional)

### Design Principles
- **Sophisticated & Secure:** Professional medical aesthetic
- **Patient-Centric:** Focus on patient experience and care
- **High-Tech but Accessible:** Technical but understandable to clinic clientele
- **Healthcare Icons:** Use medical/healthcare-specific iconography
- **Clean & Modern:** Rounded corners, glassmorphism effects
- **Trust & Security:** Emphasize HIPAA compliance and data protection

### Glassmorphism Style
- Background: `white/10` opacity with backdrop blur
- Borders: `white/20` opacity
- Text: White with varying opacity (70-90% for primary, 50% for secondary)
- Rounded corners: `rounded-lg` or `rounded-xl`
- Shadows: Subtle, professional

### Technical Icons to Include
- Generic cloud/architecture icons (no vendor logos)
- Medical/healthcare icons (stethoscope, heartbeat, medical records)
- Voice/speech icons (waveforms, microphones)
- Security icons (locks, shields, verification checkmarks)
- Communication icons (phone, SMS, messaging)

### File Naming Convention
- Use descriptive names: `aria-[feature-name].png`
- Be specific but technology-agnostic: `aria-clinical-voice-engine.png`, `aria-verification-gatekeeper.png`
- Group by category: `aria-*` prefix for all Aria AI images

### Image Optimization
- **Format:** PNG for graphics with transparency, medical imagery
- **Compression:** Optimize for web (use tools like TinyPNG)
- **Responsive:** Consider @2x versions for retina displays
- **File Size:** Aim for < 500KB per image when possible

### Usage Instructions
1. Generate images using the prompts above with AI image generators (Nano Banana, Gemini, DALL-E, etc.)
2. Save images to `/public/images/` directory
3. Update image paths in the landing page component to reference the generated images
4. Test images on different screen sizes and devices
5. Optimize images for web performance

---

## Summary Checklist

- [ ] Hero Interface Mockup (1 image)
- [ ] Technology Showcase (2 images: Voice Engine, Tool Orchestration)
- [ ] Feature Visualizations (4 images: Inbound Handling, Escalation Logic, Verification Gatekeeper, Zero-Latency Greeting)
- [ ] Technical Capabilities (3 images: Barge-In Detection, Context-Aware Scheduling, SMS Communication)
- [ ] Security & Compliance (1 image: HIPAA Compliance)
- [ ] AI Agent & Workflow (2 images: SOP Diagram, Agent Interface)
- [ ] Technical Architecture (2 images: ML Layer Architecture, Feature Engineering)
- **Total: 15 images**

---

**Last Updated:** 2025-01-27  
**Version:** 1.0  
**Project:** Aria: Intelligent Cardiac Care Interaction Engine

