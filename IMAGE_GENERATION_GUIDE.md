# Image Generation Guide for Sentinel AI Landing Page

This document contains all image requirements, generation prompts, dimensions, and specifications for the Sentinel AI fraud detection platform website.

---

## Table of Contents
1. [Hero Section Images](#hero-section-images)
2. [Product Visualization Images](#product-visualization-images)
3. [AI Agents Section Images](#ai-agents-section-images)
4. [Case Study & Statistics Images](#case-study--statistics-images)
5. [Data Platform Visualization Images](#data-platform-visualization-images)
6. [General Guidelines](#general-guidelines)

---

## Hero Section Images

### 1. Hero Dashboard Screenshot
**File Path:** `/public/images/hero-dashboard.png`  
**Dimensions:** 1200x800px (16:10.67 aspect ratio)  
**Format:** PNG with transparency support  
**Background:** White (#FFFFFF)  
**Style:** Modern SaaS dashboard interface, clean and professional

**Generation Prompt:**
```
Create a modern fraud detection dashboard interface mockup. White background with a clean, professional SaaS design. Show a browser window mockup with three colored dots (red #FF0000, yellow #FFD700, green #00FF00) in the top left corner. The window title bar shows "Fraud Detection > Application Review" in gray text (#7E8DAA). 

Inside the window, display a highlighted alert card with:
- Title: "Application #LA-2024-1248" in bold dark text (#0B0C0E)
- Red status dot with "High Risk" label
- Customer details: "Applicant: John Smith"
- Risk score: "Fraud Score: 0.85 (High Risk)" in red text
- Amount: "Loan Amount: $15,000.00"
- A blue button labeled "Fraud Co-Pilot" in the top right (background #36B3E3)
- Risk factors list with bullet points showing fraud indicators

The card should have a subtle purple border (#2D29D7 with 20% opacity) and light purple background tint (#F5F5FF). Use modern, clean typography (Inter font family). Include subtle shadows and rounded corners (rounded-lg). Color scheme: white background, dark gray text (#0B0C0E), blue accents (#36B3E3), light purple highlights (#F5F5FF).
```

**Color Palette:**
- Primary Blue: #36B3E3
- Purple Accent: #2D29D7
- Background Light: #F5F5FF
- Text Dark: #0B0C0E
- Text Medium: #2E3238
- Text Light: #7E8DAA

---

## Product Visualization Images

### 2. Application Screening Visualization
**File Path:** `/public/images/product-application-screening.png`  
**Dimensions:** 800x600px (4:3 aspect ratio)  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Data visualization, risk indicators

**Generation Prompt:**
```
Create a data visualization for application screening with risk indicators. Use a gradient background from light blue (#36B3E3) to lighter blue (#8DD3F0). Display three risk indicator cards with glassmorphism effect (white/10 opacity with backdrop blur):

Card 1:
- Label: "EARLY PAYMENT REVERSAL" in white/70 text
- Badge: "HIGH RISK" in pink background (#FF69B4 with 80% opacity)
- White rounded corners

Card 2:
- Label: "UCC FILING FAILURE" in white/70 text
- Badge: "MEDIUM RISK" in orange background (#FF8C00 with 80% opacity)

Card 3:
- Label: "APPLICANT PERSONA" in white/70 text
- Badge: "HIGH-RISK PROFILE" in pink background (#FF69B4 with 80% opacity)

All cards should have subtle borders (white/20), rounded corners, and glassmorphism effect. Modern, clean design.
```

### 3. Risk Scoring Visualization
**File Path:** `/public/images/product-risk-scoring.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Score display, metrics dashboard

**Generation Prompt:**
```
Create a risk scoring visualization dashboard. Gradient background from #36B3E3 to #8DD3F0. Display two metric cards with glassmorphism:

Card 1:
- Label: "FRAUD RISK SCORE" in white/70 text
- Large number: "0.85" in pink (#FF69B4), bold, text-3xl size
- Subtext: "High Risk Threshold: 0.70" in white/50 text

Card 2:
- Label: "ENSEMBLE CONFIDENCE" in white/70 text
- Large number: "92%" in orange (#FF8C00), bold, text-2xl size

Cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Modern, professional design.
```

### 4. Anomaly Detection Visualization
**File Path:** `/public/images/product-anomaly-detection.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Anomaly detection charts, pattern analysis

**Generation Prompt:**
```
Create an anomaly detection visualization. Gradient background #36B3E3 to #8DD3F0. Show:
- A network graph or scatter plot showing normal vs anomalous data points
- Anomaly clusters highlighted in red/pink
- Normal data points in blue/white
- Statistical indicators showing deviation from normal patterns
- Glassmorphism cards with white/10 background, white/20 borders
- Modern data visualization style with clean lines and professional appearance
```

### 5. Applicant Personas Visualization
**File Path:** `/public/images/product-applicant-personas.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Persona classification, behavioral patterns

**Generation Prompt:**
```
Create an applicant personas visualization. Gradient background #36B3E3 to #8DD3F0. Display three persona cards:

1. "Digital Ghost" - 70% fraud concentration indicator
   - Red/pink highlighting
   - Low IDV checks indicator
   - Behavioral anomaly markers

2. "High-Friction Anomaly" - Slow process indicators
   - Orange/yellow highlighting
   - Long pause indicators
   - Time-based metrics

3. "Safe Bet" - 100% legitimate indicator
   - Green/blue highlighting
   - High verification scores
   - Fast-track approval markers

Use glassmorphism effects, modern card design, rounded corners, white/20 borders.
```

### 5. Explainable AI Visualization
**File Path:** `/public/images/product-explainable-ai.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** AI explanation interface, report visualization

**Generation Prompt:**
```
Create an Explainable AI visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "AI EXPLANATION REPORT" in white/70 text
- Icon or document preview showing PDF report
- Badge: "GENAI POWERED" in purple/blue gradient background
- Subtext: "Plain-English explanations" in white/50 text

Card 2:
- Label: "TOP RISK FACTORS" in white/70 text
- List items showing risk factors (e.g., "High email digit ratio", "Long application pauses", "Low IDV checks")
- Each factor with a risk bar showing percentage contribution

Card 3:
- Label: "MITIGATING FACTORS" in white/70 text
- Green checkmarks or indicators showing positive signals
- Example: "Verified identity", "Complete profile"

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Modern, clean design with document/report aesthetic.
```

### 6. Pre-Approval Detection Visualization
**File Path:** `/public/images/product-pre-approval.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Early detection metrics, cost savings indicators

**Generation Prompt:**
```
Create a Pre-Approval Detection visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "FRAUD DETECTED" in white/70 text
- Large number: "23" in pink/red (#FF69B4), bold, text-4xl size
- Subtext: "Before credit bureau pull" in white/50 text
- Badge: "EARLY DETECTION" in green background

Card 2:
- Label: "COST SAVINGS" in white/70 text
- Dollar amount: "$45,000" in green (#00FF88), bold, text-3xl size
- Subtext: "Credit check costs avoided" in white/50 text

Card 3:
- Label: "RISK ASSESSMENT TIME" in white/70 text
- Time indicator: "< 2 seconds" in orange (#FF8C00), bold
- Progress bar showing instant processing

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Include shield/early warning icons. Modern, professional design.
```

### 7. Pre-Funding Verification Visualization
**File Path:** `/public/images/product-pre-funding.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Final verification checkpoint, safety metrics

**Generation Prompt:**
```
Create a Pre-Funding Verification visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "FINAL SAFETY CHECK" in white/70 text
- Lock icon or shield icon prominently displayed
- Status: "VERIFIED" in green or "FLAGGED" in red
- Badge: "PRE-FUNDING STAGE" in blue background

Card 2:
- Label: "APPLICATIONS REVIEWED" in white/70 text
- Large number: "1,247" in white, bold, text-4xl size
- Percentage: "98.5% APPROVED" in green
- Subtext: "Last 30 days" in white/50 text

Card 3:
- Label: "FRAUD PREVENTED" in white/70 text
- Count: "18" in red/pink (#FF69B4), bold, text-3xl size
- Capital protected: "$287,000" in white/80 text
- Progress bar showing prevention rate

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Include lock/verification icons. Modern, security-focused design.
```

### 8. Ensemble Models Visualization
**File Path:** `/public/images/product-ensemble-models.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Model architecture, ensemble combination visualization

**Generation Prompt:**
```
Create an Ensemble Models visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "XGBOOST DETECTIVE" in white/70 text
- Score: "0.78" in blue (#36B3E3), bold, text-3xl size
- Badge: "SUPERVISED" in blue background
- Subtext: "Known fraud patterns" in white/50 text

Card 2:
- Label: "ISOLATION FOREST WATCHDOG" in white/70 text
- Score: "0.82" in purple (#8B5CF6), bold, text-3xl size
- Badge: "UNSUPERVISED" in purple background
- Subtext: "Anomaly detection" in white/50 text

Card 3 (Center/Large):
- Label: "ENSEMBLE TASK FORCE" in white, bold, text-xl
- Combined Score: "0.85" in pink (#FF69B4), bold, text-5xl size
- Badge: "50% FRAUD DETECTION" in green background
- Visual: Two arrows pointing to center card showing model combination
- Bar chart showing 50/50 ensemble split

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Include connection lines or flow diagram showing ensemble combination. Modern, technical design.
```

### 9. Real-time API Visualization
**File Path:** `/public/images/product-real-time-api.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** API architecture, real-time processing metrics

**Generation Prompt:**
```
Create a Real-time API visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "API RESPONSE TIME" in white/70 text
- Time: "< 500ms" in green (#00FF88), bold, text-3xl size
- Badge: "REAL-TIME" in blue background
- Activity indicator or pulse animation effect

Card 2:
- Label: "REQUESTS PROCESSED" in white/70 text
- Count: "12,458" in white, bold, text-4xl size
- Rate: "145/sec" in orange (#FF8C00)
- Subtext: "Last hour" in white/50 text

Card 3:
- Label: "FEATURE ENGINEERING" in white/70 text
- Input: "100 raw points" in white/70 text
- Arrow indicator pointing to output
- Output: "650+ features" in green, bold
- Progress bar showing pipeline stages

Card 4 (smaller):
- Label: "AWS DEPLOYMENT" in white/70 text
- Icons: Lambda, SageMaker, API Gateway symbols
- Status: "ACTIVE" in green

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Include network/connection lines, API endpoint indicators. Modern, technical infrastructure design.
```

### 10. Feedback Loop Visualization
**File Path:** `/public/images/product-feedback-loop.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Continuous learning cycle, feedback metrics

**Generation Prompt:**
```
Create a Feedback Loop visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "LOAN OUTCOMES CAPTURED" in white/70 text
- Count: "8,342" in white, bold, text-4xl size
- Breakdown: "Reversals: 156", "Defaults: 89", "Legal: 23" in white/70
- Progress circle showing data collection rate

Card 2:
- Label: "GROUND-TRUTH LABELS" in white/70 text
- Percentage: "94.2% ACCURATE" in green (#00FF88), bold
- Badge: "VALIDATED" in green background
- Subtext: "From TLOS Payment & Loan tables" in white/50 text

Card 3 (Center):
- Circular flow diagram showing continuous loop:
  - "Data Collection" → "Label Creation" → "Model Training" → "Deployment" → (back to start)
- Label: "CONTINUOUS LEARNING" in white, bold
- Status indicators at each stage showing active state

Card 4:
- Label: "MODEL IMPROVEMENT" in white/70 text
- Metric: "+12% Accuracy" in green, bold, text-2xl size
- Timeline: "Last quarter" in white/50 text

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Include circular arrows, cycle indicators. Modern, dynamic design showing continuous improvement.
```

### 11. Compliance Reporting Visualization
**File Path:** `/public/images/product-compliance-reporting.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Report dashboard, audit trail visualization

**Generation Prompt:**
```
Create a Compliance Reporting visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "COMPLIANCE REPORTS GENERATED" in white/70 text
- Count: "2,847" in white, bold, text-4xl size
- Badge: "PDF FORMAT" in purple background
- Icon: Document/report icon

Card 2:
- Label: "AUDIT TRAIL COMPLETENESS" in white/70 text
- Percentage: "100%" in green (#00FF88), bold, text-3xl size
- Status indicators showing all fields tracked:
  - Risk probability ✓
  - Top factors ✓
  - Decision timestamp ✓
  - SHAP explanations ✓

Card 3:
- Label: "REGULATORY READY" in white/70 text
- Badges showing compliance standards:
  - "FTC Compliant" in green
  - "CCPA Ready" in blue
  - "GDPR Aligned" in purple
- Subtext: "Full audit trail included" in white/50 text

Card 4 (wider):
- Label: "REPORT CONTENTS" in white/70 text
- List view showing:
  - "Risk probability score"
  - "Primary risk factors (behavioral, email, profile)"
  - "Mitigating factors"
  - "SHAP feature importance"
  - "Decision rationale"
- Each item with checkmark icon

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Include document icons, checkmarks, regulatory badges. Modern, professional compliance dashboard design.
```

### 12. MLOps Pipeline Visualization
**File Path:** `/public/images/product-mlops-pipeline.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Pipeline architecture, automation workflow

**Generation Prompt:**
```
Create an MLOps Pipeline visualization for fraud detection. Gradient background from #36B3E3 to #8DD3F0. Display glassmorphism cards showing:

Card 1:
- Label: "DATA DRIFT DETECTED" in white/70 text
- Status: "AUTO-TRIGGERED" in orange (#FF8C00), bold
- Badge: "RETRAINING INITIATED" in blue background
- Activity indicator showing pipeline running

Card 2:
- Label: "MODEL PERFORMANCE" in white/70 text
- Metrics displayed:
  - "F1 Score: 0.87" (new) vs "0.84" (previous) - showing improvement
  - "Recall: 0.92" (new) vs "0.89" (previous)
- Badge: "IMPROVED" in green background
- Comparison arrows showing upward trend

Card 3:
- Label: "PIPELINE STAGES" in white/70 text
- Horizontal flow showing:
  - "Data Collection" → "Drift Detection" → "Training" → "Validation" → "Deployment"
- Each stage with status indicator (green checkmarks)
- Progress bar showing pipeline completion

Card 4:
- Label: "DASHBOARD METRICS" in white/70 text
- Technical metrics:
  - "API Latency: 450ms" in green
  - "Error Rate: 0.12%" in green
- Business metrics:
  - "Applications Flagged: 234"
  - "Capital Protected: $3.2M"
- Icons: CloudWatch, QuickSight symbols

All cards should have white/10 background with backdrop blur, white/20 borders, rounded corners. Include pipeline flow arrows, stage connectors, automation indicators. Modern, technical infrastructure design showing automated workflow.
```

---

## AI Agents Section Images

### 13. AI Agent SOP Diagram
**File Path:** `/public/images/ai-agent-sop-diagram.png`  
**Dimensions:** 600x400px (3:2 aspect ratio)  
**Format:** PNG  
**Background:** White (#FFFFFF)  
**Style:** Flowchart, process diagram

**Generation Prompt:**
```
Create a flowchart/SOP diagram for AI fraud detection agent workflow. White background. Show:
- Process flow from "Application Received" → "Feature Engineering" → "Model Inference" → "Risk Score Generated" → "Explanation Report"
- Use blue (#36B3E3) and purple (#2D29D7) for flow lines and boxes
- Rounded rectangle boxes for each step
- Arrow connectors between steps
- Clean, modern flowchart design
- Include icons or small visual elements for each step
- Text in dark gray (#0B0C0E) or medium gray (#2E3238)
```

### 14. Agent Interface Mockup
**File Path:** `/public/images/ai-agent-interface.png`  
**Dimensions:** 1000x700px  
**Format:** PNG  
**Background:** Light purple (#F5F5FF)  
**Style:** UI mockup, dashboard interface

**Generation Prompt:**
```
Create an AI agent interface mockup. Light purple background (#F5F5FF). Show:
- Agent name header: "Fraud Detection Co-Pilot" in bold dark text
- Mission statement section
- Real-time processing indicators
- Risk score display
- Explanation panel showing plain-English risk factors
- Modern, clean UI design with white cards, rounded corners
- Blue (#36B3E3) accent colors for interactive elements
```

---

## Case Study & Statistics Images

### 15. Case Study Dashboard
**File Path:** `/public/images/case-study-dashboard.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #8DD3F0  
**Style:** Dashboard mockup, metrics display

**Generation Prompt:**
```
Create a case study dashboard visualization. Gradient background #36B3E3 to #8DD3F0. Display:
- Title: "AI Co-Pilot protects capital at pre-approval stage"
- Key capabilities badges: "ENSEMBLE MODELS", "REAL-TIME API", "EXPLAINABLE AI"
- Metrics showing fraud detection improvements
- Charts or graphs showing before/after comparisons
- Glassmorphism cards with white/10 background, white/20 borders
- Modern, professional design with white text
```

### 16. Statistics Visualization (Optional)
**File Path:** `/public/images/stats-visualization.png`  
**Dimensions:** 1200x400px (3:1 aspect ratio)  
**Format:** PNG  
**Background:** White or light purple (#F5F5FF)  
**Style:** Infographic, metrics display

**Generation Prompt:**
```
Create a statistics visualization showing:
- 50% fraud detection rate (large, bold number)
- 650+ features generated (large, bold number)
- 3 applicant personas (large, bold number)
- Supporting visual elements (charts, icons)
- Clean, modern design with blue (#36B3E3) accents
- White or light purple background (#F5F5FF)
```

---

## Data Platform Visualization Images

### 17. ML Layer Architecture Diagram
**File Path:** `/public/images/ml-layer-architecture.png`  
**Dimensions:** 1000x800px  
**Format:** PNG  
**Background:** White (#FFFFFF)  
**Style:** Architecture diagram, technical illustration

**Generation Prompt:**
```
Create an ML layer architecture diagram showing four layers:
1. Data Integration & Feature Engineering (Layer 01)
2. Ensemble Model Architecture (Layer 02)
3. Real-time Inference API (Layer 03)
4. Continuous Learning & MLOps (Layer 04)

Use stacked gradient cards from darkest (#36B3E3) to lightest (#F5F5FF). Each layer should show:
- Layer number and title
- Key components or processes
- Data flow arrows
- Modern, technical diagram style
- Blue/purple color scheme
- Clean typography
```

### 18. Feature Engineering Visualization
**File Path:** `/public/images/feature-engineering.png`  
**Dimensions:** 800x600px  
**Format:** PNG  
**Background:** Gradient from #36B3E3 to #F5F5FF  
**Style:** Data transformation visualization

**Generation Prompt:**
```
Create a feature engineering visualization showing:
- Input: "100 raw data points" → Transformation pipeline → Output: "650+ features"
- Visual representation of data transformation
- Feature categories (behavioral, contact info, profile stability, identity verification)
- Modern data pipeline visualization
- Gradient background from #36B3E3 to #F5F5FF
- Clean, technical design
```

---

## General Guidelines

### Color Palette
- **Primary Blue:** #36B3E3
- **Secondary Blue:** #6BC5E8
- **Light Blue:** #8DD3F0
- **Very Light Blue:** #F5F5FF
- **Purple:** #2D29D7
- **Dark Purple:** #070561
- **Text Dark:** #0B0C0E
- **Text Medium:** #2E3238
- **Text Light:** #7E8DAA
- **White:** #FFFFFF

### Typography
- **Font Family:** Inter (clean, modern sans-serif)
- **Headings:** Bold, tight tracking
- **Body Text:** Regular weight, relaxed leading
- **Numbers:** Bold, large size for emphasis

### Style Guidelines
1. **Modern & Clean:** Minimal, professional design
2. **Glassmorphism:** Use white/10 backgrounds with backdrop blur for cards
3. **Rounded Corners:** Use rounded-lg or rounded-xl for all cards
4. **Subtle Shadows:** Add depth with soft shadows
5. **Consistent Spacing:** Maintain consistent padding and margins
6. **High Contrast:** Ensure text is readable on all backgrounds
7. **Gradient Backgrounds:** Use smooth gradients from blue to light blue/purple
8. **Icons:** Use simple, clean icons (Lucide style)
9. **Data Visualizations:** Professional charts and graphs
10. **Responsive:** Consider how images will look on different screen sizes

### File Naming Convention
- Use lowercase with hyphens: `product-name-visualization.png`
- Be descriptive: `hero-dashboard.png`, `ai-agent-sop-diagram.png`
- Group by section: `product-*`, `ai-agent-*`, `case-study-*`

### Image Optimization
- **Format:** PNG for graphics with transparency, JPG for photos
- **Compression:** Optimize for web (use tools like TinyPNG)
- **Responsive:** Consider providing @2x versions for retina displays
- **File Size:** Aim for < 500KB per image when possible

### Usage Instructions
1. Generate images using the prompts above with Gemini (banana pro) or similar AI image generator
2. Save images to `/public/images/` directory
3. Update image paths in `app/page.tsx` to reference the generated images
4. Test images on different screen sizes and devices
5. Optimize images for web performance

---

## Summary Checklist

- [ ] Hero Dashboard Screenshot (1 image)
- [ ] Product Visualizations (12 images)
- [ ] AI Agent Images (2 images)
- [ ] Case Study Images (2 images)
- [ ] Data Platform Visualizations (2 images)
- [ ] **Total: 19 images**

---

**Last Updated:** 2025-01-27  
**Version:** 1.0

