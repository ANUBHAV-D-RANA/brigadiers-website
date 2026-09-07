# Brigadier's Institute — Website Content Specification

Complete content and structure of the Brigadier's Defence & Skill Institute website.
Every heading, paragraph, label, link and image slot on the live site is recorded here.

- **Live reference:** https://brigadiers-site.vercel.app
- **Captured:** 7 September 2026
- **Stack:** static HTML/CSS/JS — no framework, no build step
- **Editable content:** most repeating content lives in `js/content.js`, not in the HTML

---

## 1. Site at a glance

### Pages

| File | Page | Purpose |
|---|---|---|
| `index.html` | Home | Hero, four wings, leadership teaser, strengths, gallery preview, CTA |
| `programmes.html` | Programmes | Five programme wings, teaching method, reading room |
| `about.html` | About | Who we are, six strengths, the three-word ethos |
| `leadership.html` | Leadership | Brigadier Krishna Raj, Ms. Rashmi, faculty desks |
| `gallery.html` | Gallery | Twelve-photograph album with lightbox |
| `contact.html` | Contact | Contact details, enquiry form, map, FAQ |

### Where content lives

| Content | Location |
|---|---|
| Programmes, strengths, gallery, faculty, FAQ | `js/content.js` → `window.BDSI_CONTENT` |
| Hero copy, section headings, body prose | Directly in each `.html` file |
| Photographs | `assets/` |
| All styling | `css/style.css` |
| Animation, lightbox, form, menu | `js/main.js` |

To change a programme, photograph, faculty desk or FAQ, edit `js/content.js` only.
Everything else requires editing the relevant HTML page.

### External dependencies

| Dependency | Source |
|---|---|
| GSAP 3.12.5 + ScrollTrigger | `cdn.jsdelivr.net` |
| Lenis 1.1.14 (smooth scroll) | `cdn.jsdelivr.net` |
| Oswald, Instrument Serif, Manrope, JetBrains Mono | Google Fonts |
| Location map | Google Maps embed |

---

## 2. Brand and identity

**Name:** Brigadier's Defence & Skill Institute
**Short name / wordmark:** BRIGADIER'S INSTITUTE
**Tagline:** Character · Competence · Commitment
**Location:** Dr. A. S. Rao Nagar, Secunderabad

### Design tokens (`css/style.css`)

Theme name in the source: **"Field White"** — white paper, army olive, khaki, glass panels.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#ffffff` | Page ground |
| `--bg-2` | `#f7f7f2` | Warm paper, alternating bands |
| `--olive` | `#4a5533` | Primary army green |
| `--olive-d` | `#2f3823` | Deep field green — footer, ink |
| `--olive-l` | `#6d7c48` | Lighter olive accent |
| `--olive-x` | `#8b9a5f` | Highlight olive |
| `--khaki` | `#b5a980` | Khaki |
| `--sand` | `#e9e5d6` | Sand |
| `--ink` | `#191d12` | Body text |
| `--mut` | `#6b7159` | Muted text |

| Role | Typeface |
|---|---|
| Display / headings (uppercase) | Oswald |
| Serif accent | Instrument Serif |
| Body | Manrope |
| Mono labels, eyebrows, numerals | JetBrains Mono |

---

## 3. Global elements

### Navigation

Fixed pill-shaped header, present on every page:

`BRIGADIER'S INSTITUTE` (logo, links to `index.html`) · Home · Programmes · About · Leadership · Gallery · Contact · **Enquire Now** (button)

Mobile menu lists the same six items with numbered markers `01`–`06`.

### Contact details

| Field | Value |
|---|---|
| Primary phone / WhatsApp | +91 97011 47051 |
| Secondary phone | +91 99897 47052 |
| Director email | Director@brigadiersinstitute.com |
| Support email | Support@brigadiersinstitute.com |
| Address | Jayalakshmi Enclave, Gate No. 2, Dr. A. S. Rao Nagar, Secunderabad, Hyderabad, Telangana – 500062 |

### Social links

| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/brigadiersinstitute/ |
| Facebook | https://www.facebook.com/share/1Aw8AcL2E5/ |
| YouTube | https://youtube.com/@brigadiersdefenceacademy |
| WhatsApp | `https://wa.me/919701147051` with prefilled text: *"Hello, I want to know more about Brigadier's Institute."* |

### Footer (identical on all six pages)

**Wordmark:** BRIGADIER'S INSTITUTE

**Blurb:** "Brigadier's Defence & Skill Institute — premier coaching for defence, government and corporate career success. Character, competence and commitment, taught in Secunderabad."

| Column | Links |
|---|---|
| Programmes | Defence Coaching · UPSC & TGPSC · JEE & Tuitions · Reading Room · Spoken English |
| Institute | About Us · Leadership · Gallery · Contact · FAQ |
| Reach Us | +91 97011 47051 · +91 99897 47052 · Director@brigadiersinstitute.com · Instagram · Facebook · YouTube |

**Copyright:** © Brigadier's Defence & Skill Institute · Secunderabad
**Strip:** Character / Competence / Commitment

---

## 4. Home — `index.html`

**Title:** Brigadier's Defence & Skill Institute — NDA, CDS & AFCAT Coaching in Secunderabad
**Meta description:** Top NDA, CDS, AFCAT & CAPF coaching in Secunderabad. Led by Brigadier Krishna Raj, ex-Instructor at the Army War College. Defence, UPSC & TGPSC, JEE Foundation, tuitions and a silent reading room.

### Hero

- **Pill:** ADMISSIONS OPEN · BOOK YOUR SEAT
- **Headline:** BRIGADIER'S / INSTITUTE.
- **Tagline rule:** CHARACTER · COMPETENCE · COMMITMENT
- **Standfirst:** "Premier coaching for **NDA, CDS, AFCAT & CAPF** in Secunderabad — commanded by **Brigadier Krishna Raj**, former Instructor at the Army War College."
- **Buttons:** ENQUIRE NOW ⟶ · VIEW PROGRAMMES
- **Image:** `assets/b3.jpg`, captioned `// CLASSROOM · DR. A. S. RAO NAGAR`
- **Portrait card:** `assets/mentor-brigadier.jpg` — `// BRIGADIER KRISHNA RAJ`, EX-INSTRUCTOR / ARMY WAR COLLEGE, "Three decades of military service, now teaching the board."
- **Side rail:** DR. A. S. RAO NAGAR
- **Scroll cue:** SCROLL

**Hero counters:** 30+ Years Military Service · 20+ Years Academic Leadership · 05 Programme Wings

### Marquee strip

Repeating: NDA ◆ CDS ◆ AFCAT ◆ CAPF ◆ SSB INTERVIEW ◆ UPSC ◆ TGPSC GROUP 2 & 3 ◆ JEE FOUNDATION ◆ TUITIONS 8–12 ◆ READING ROOM ◆

### Section 01 — What We Offer

**Heading:** FOUR WINGS. ONE Standard.
**Eyebrow:** `// DEFENCE · CIVIL SERVICES · ACADEMICS · SKILLS`

| Card | Title | Body |
|---|---|---|
| WING 01 | Defence Coaching | NDA, CDS, AFCAT and CAPF — written preparation plus full SSB interview training, taught by serving-standard officers. |
| WING 02 | UPSC & TGPSC | Civil Services and TGPSC Group 2 & 3 — subject-wise specialists, answer writing and structured sectional tests. |
| WING 03 | JEE & Tuitions | Classes 8 to 12 in Mathematics and Science — small batches, regular tests and genuine personal attention. |
| WING 04 | The Reading Room | Silent air-conditioned study hall with WiFi, power backup and individual cabins — open to every serious aspirant. |

Each card carries an `OPEN WING ⟶` link.

**Stat band:** 30+ Years Military Service · 20+ Years Academic Leadership · 4 Defence Entries Covered · 5 Programme Wings

### Section 02 — Our Leadership (marker: LED)

**Heading:** GUIDED BY the Best.
**Eyebrow:** `// A SOLDIER AND A PRINCIPAL, IN THE SAME BUILDING`

- **Badge:** ◉ MENTOR — `// BRIGADIER KRISHNA RAJ — EX-INSTRUCTOR, ARMY WAR COLLEGE` — ★ CHIEF INSTRUCTOR
- **Pull quote:** "Discipline is the bridge between goals and achievement." — BRIGADIER KRISHNA RAJ
- **Body:** "Three decades of distinguished military service, and a tenure instructing at the Army War College — the institute's defence wing is run to the standard its mentor was trained in. The academic wing is headed by Ms. Rashmi, a former Degree College Principal with over twenty years in higher education."

| Sub-card | Body |
|---|---|
| Ex-Military Faculty | Officers who served in the Indian Armed Forces, teaching strategy and leadership from experience. |
| Academic Faculty | Teachers with proven records in government examination and board examination preparation. |
| Personality Development | Communication, confidence and leadership — the qualities the selection board is actually measuring. |

**CTA:** MEET THE LEADERSHIP ⟶

### Section 03 — Our Strengths (marker: EDGE)

**Heading:** WHY Brigadier's?

| Item | Body |
|---|---|
| Daily Current Affairs | Every day, national, international and defence news — briefed, analysed and turned into usable answers. |
| Weekly Assessments | Regular tests and full-length mocks so progress is measured, not assumed, and weak areas surface early. |
| One Campus, Every Need | Coaching, tuitions and a silent reading room in one building at Dr. A. S. Rao Nagar, Secunderabad. |

### Section 04 — Life at the Institute

**Heading:** INSIDE THE Campus. · **CTA:** VIEW FULL GALLERY ⟶

Four tiles: `01 READING ROOM` · `02 CLASSROOM` · `03 CADETS BATCH` · `04 CAMPUS`

### Closing

**Marquee:** CHARACTER ● COMPETENCE ● COMMITMENT ● JAI HIND ●

**Heading:** BOOK YOUR Seat.
**Body:** "Admissions are open across all wings. Send one enquiry and our team will call you back with the batch schedule and fee structure."
**Buttons:** ENQUIRE NOW ⟶ · CALL +91 97011 47051

---

## 5. Programmes — `programmes.html`

**Title:** Programmes — Defence, UPSC & TGPSC, JEE & Tuitions | Brigadier's Institute
**Meta description:** NDA, CDS, AFCAT & CAPF coaching, UPSC and TGPSC Group 2 & 3, JEE Foundation and tuitions for Classes 8–12, a silent reading room, and corporate interview and spoken English training in Secunderabad.

**Breadcrumb:** Home / Programmes
**Heading:** Our Programmes.
**Standfirst:** "Expertly designed programmes for defence, government and academic career excellence — each one taught by faculty who have done the thing they are teaching."
**Chips:** Admissions Open · Dr. A. S. Rao Nagar, Secunderabad · Five Wings · One Standard

### The five programme wings

Rendered from `BDSI_CONTENT.programmes` in `js/content.js`.

#### 1. Defence Coaching — *accent card*
- **Sub:** NDA · CDS · AFCAT · CAPF
- **Label:** DEFENCE WING
- **Image:** `assets/prog-defence.png`
- **Description:** Complete written-exam preparation plus SSB interview training for every defence entry. Taught by officers who have sat on the other side of the selection board — with daily current affairs, weekly mock tests and personality grooming built into the timetable.
- **Tags:** NDA · CDS · AFCAT · CAPF · SSB Interview

#### 2. UPSC & TGPSC — *accent card*
- **Sub:** Civil Services · Group 2 & Group 3
- **Label:** CIVIL SERVICES WING
- **Image:** `assets/prog-tgpsc.png`
- **Description:** Focused, subject-wise preparation for the Civil Services examination and TGPSC Group 2 & 3, led by specialists in each paper. Structured answer-writing practice, current affairs analysis and regular sectional tests.
- **Tags:** UPSC · TGPSC Group 2 · TGPSC Group 3 · Answer Writing

#### 3. JEE Foundation & Tuitions
- **Sub:** Classes 8 – 12 · Maths & Science
- **Label:** ACADEMIC WING
- **Image:** `assets/prog-tuitions.jpg`
- **Description:** Expert coaching in Mathematics and Science for senior school students, with small batches, regular tests and genuine personal attention. Builds the board-exam foundation and the JEE aptitude at the same time.
- **Tags:** Class 8–10 · Class 11–12 · Maths · Science · JEE Foundation

#### 4. The Reading Room
- **Sub:** Silent AC study library with WiFi
- **Label:** READING ROOM
- **Image:** `assets/prog-studyzone.jpg`
- **Description:** An air-conditioned silent study hall with high-speed WiFi, power backup and comfortable individual cabins. Open to serious aspirants whether or not you are enrolled in a coaching programme.
- **Tags:** Silent Cabins · High-Speed WiFi · Power Backup · Air Conditioned

#### 5. Corporate & Spoken English
- **Sub:** Interview training · Communication skills
- **Label:** SKILL WING
- **Image:** `assets/why-personality.jpg`
- **Description:** Mock interviews, group discussion practice and spoken English coaching for students and working professionals preparing for corporate selection. Confidence, clarity and presence — trained, not hoped for.
- **Tags:** Mock Interviews · Group Discussion · Spoken English · Résumé

### Section 02 — The Method (marker: METHOD)

**Heading:** HOW EVERY BATCH Runs. · **Eyebrow:** `// THE SAME DISCIPLINE IN EVERY WING`

| Item | Body |
|---|---|
| Daily Current Affairs | A briefing every day on national, international and defence news — with the analysis that turns a headline into an answer. |
| Weekly Tests & Mocks | Assessments every week and full-length mocks through the cycle, each one followed by a one-to-one performance review. |
| Personality Grooming | Communication, confidence, bearing and leadership — trained deliberately, because the board is marking all four. |

**Counters:** 4 Defence Entries — NDA · CDS · AFCAT · CAPF | 2 TGPSC Groups — 2 & 3 | 8–12 Tuition Classes Covered | 5 Programme Wings

### Section 03 — The Reading Room (marker: QUIET)

**Heading:** SOMEWHERE TO ACTUALLY Study.
**Badge:** ◉ SILENT — `// READING ROOM — STUDY CABINS & LIBRARY` — ★ Open to All
**Body:** "An air-conditioned silent hall with individual cabins, high-speed WiFi and power backup. You do not have to be enrolled in a coaching programme to take a seat — **membership is open to any serious aspirant**."

| Feature | Body |
|---|---|
| High-Speed WiFi | Reliable connectivity for online test series, lectures and research. |
| Power Backup | Study time is not surrendered to a power cut. |
| Individual Cabins | Air-conditioned, comfortable seating designed for long, focused sessions. |

**CTA:** Join the Reading Room ⟶

### Closing

**Heading:** NOT SURE WHICH Wing?
**Body:** "Tell us your age, qualification and target. We will tell you honestly which programme fits — and which one does not."
**Buttons:** Get Eligibility Counselling ⟶ · Call +91 97011 47051

---

## 6. About — `about.html`

**Title:** About — Character, Competence, Commitment | Brigadier's Defence & Skill Institute
**Meta description:** About Brigadier's Defence & Skill Institute, Secunderabad — ex-military faculty, academic faculty, personality development, daily current affairs and weekly assessments under one roof.

**Breadcrumb:** Home / About
**Heading:** The Institute.
**Standfirst:** "Brigadier's Defence & Skill Institute exists for one reason: to put well-prepared, well-spoken, well-drilled candidates in front of a selection board — and to make sure they belong there."
**Chips:** Character · Competence · Commitment
**Pull paragraph:** "Anyone can hand a student a syllabus. We hand them a **standard** — the one our mentor was held to across three decades in uniform, and the one our academic head enforced as a college principal. Preparation here is measured weekly, corrected in person, and finished only when the candidate can hold their own in front of a board."

### Section 01 — Who We Are (marker: HQ)

**Heading:** ONE BUILDING. EVERY Discipline.
**Badge:** ◉ HQ — `// JAYALAKSHMI ENCLAVE — DR. A. S. RAO NAGAR, SECUNDERABAD` — ★ Secunderabad

**Body:**
> "We are a defence and skill institute in Dr. A. S. Rao Nagar, Secunderabad, running **five wings out of one campus** — defence entrance coaching, civil services preparation, senior-school academics, a silent reading room, and corporate interview and spoken English training."
>
> "The combination is deliberate. A student preparing for NDA needs mathematics taught properly, current affairs briefed daily, and an interview panel that will tell them the truth about their bearing. Most institutes offer one of those three. We built the place so a candidate never has to leave the building to find the others."

| Wing summary | Body |
|---|---|
| Defence Wing | NDA, CDS, AFCAT and CAPF — written papers plus full SSB interview preparation. |
| Academic & Civil Services | UPSC, TGPSC Group 2 & 3, JEE Foundation and tuitions for Classes 8 to 12. |
| Reading Room & Skills | Silent study cabins, plus mock interviews, group discussion and spoken English. |

### Section 02 — Our Strengths (marker: WHY)

**Heading:** WHAT YOU ACTUALLY Get. · **Eyebrow:** `// SIX THINGS WE DO NOT COMPROMISE ON`

Rendered from `BDSI_CONTENT.strengths`:

| Strength | Image | Body |
|---|---|---|
| Ex-Military Faculty | `assets/why-military.png` | Learn from officers who served in the Indian Armed Forces and bring real strategic and leadership experience into the classroom. |
| Academic Faculty | `assets/why-academic.jpg` | Experienced teachers with proven track records in government examination and board examination preparation. |
| Personality Development | `assets/why-personality.jpg` | Comprehensive grooming in communication, confidence and leadership — the qualities the selection board is actually measuring. |
| Daily Current Affairs | `assets/why-current.jpg` | Everyday sessions covering national, international and defence-related news, with the analysis that turns headlines into answers. |
| Weekly Assessments | `assets/why-tests.jpg` | Regular tests and full-length mocks so progress is measured, weak areas are found early, and nothing is left to the last month. |
| The Reading Room | `assets/prog-studyzone.jpg` | A silent, air-conditioned library with WiFi and power backup — because preparation needs somewhere to actually happen. |

### Section 03 — Our Ethos (marker: CODE)

**Heading:** THREE WORDS. IN THAT Order.

**01 Character** — "Bearing, honesty and conduct come before syllabus. A board can teach a candidate a formula; it cannot install integrity in an interview. We start where the armed forces start."

**02 Competence** — "Then the work: mathematics, general ability, English, current affairs, subject papers — taught properly, tested weekly, and reviewed candidate by candidate rather than batch by batch."

**03 Commitment** — "And then the part nobody can do for you. We provide the hall, the WiFi, the tests and the mentors. Turning up every day, on time, prepared — that remains the candidate's own contribution."

**Pull quote:** "Education is the inspiration that lights the fire within." — MS. RASHMI · DIRECTOR & ACADEMIC HEAD
**Buttons:** Meet the Leadership ⟶ · See the Campus

---

## 7. Leadership — `leadership.html`

**Title:** Leadership & Faculty — Brigadier Krishna Raj & Ms. Rashmi | Brigadier's Institute
**Meta description:** Led by Brigadier Krishna Raj, ex-Instructor at the Army War College with 30+ years of military service, and Ms. Rashmi, former Degree College Principal with 20+ years in higher education.

**Breadcrumb:** Home / Leadership
**Heading:** Guided By the Best.
**Standfirst:** "Led by distinguished defence and academic veterans committed to your success — one who has commanded, and one who has run a college."
**Chips:** Ex-Instructor, Army War College · Ex-Principal, Degree College

### 01 — Brigadier Krishna Raj

- **Image:** `assets/mentor-brigadier.jpg`
- **Rank line:** Ex Instructor · Army War College
- **Eyebrow:** `// MENTOR & CHIEF INSTRUCTOR`
- **Role:** Mentor & Chief Instructor
- **Name:** Brigadier **Krishna Raj**
- **Remit:** Defence Wing · Leadership Training
- **Bio:** "A distinguished officer with over three decades of military service, Brigadier Krishna Raj brings unparalleled expertise in leadership, strategy and defence preparation. His tenure as Instructor at the prestigious **Army War College** equipped him with the finest pedagogical methodologies — and he applies them here, to candidates who have not yet worn the uniform."
- **Specialities:** Defence & Police Entry Guidance · NDA / CDS / AFCAT / CAPF · SSB Interview & Personality Training · Leadership Training
- **Quote:** "Discipline is the bridge between goals and achievement."

### 02 — Ms. Rashmi

- **Image:** `assets/director-rashmi.jpg`
- **Rank line:** Ex Principal · Degree College
- **Eyebrow:** `// DIRECTOR & ACADEMIC HEAD`
- **Role:** Director & Academic Head
- **Name:** Ms. **Rashmi**
- **Remit:** Academic Wing · Civil Services · Skills
- **Bio:** "A distinguished academician with over 20 years of experience in higher education and academic leadership. Having served as the **Principal of a reputed Degree College**, she brings deep academic insight, strong institutional leadership and a genuine passion for mentoring students through the years that decide their careers."
- **Specialities:** TGPSC Coaching · Corporate Training · Senior Class Tuitions (8th – 12th) · Spoken English
- **Quote:** "Education is the inspiration that lights the fire within."

### Section 03 — Our Faculty (marker: STAFF)

**Heading:** THE Desks. · **Eyebrow:** `// EVERY WING HAS SPECIALISTS BEHIND IT`

> Note in the source: faculty names and photographs can be added in `js/content.js`. The desks below are role nameplates, not named individuals.

Rendered from `BDSI_CONTENT.faculty`:

| Department | Desk | Body |
|---|---|---|
| Defence Wing | Written Exam Faculty | Mathematics, General Ability and English for NDA, CDS, AFCAT and CAPF written papers. |
| Defence Wing | SSB Interview Panel | Psychology tests, GTO tasks and personal interview practice conducted the way the board conducts it. |
| Civil Services | UPSC & TGPSC Faculty | Subject-wise specialists for polity, history, geography, economy and Telangana-specific papers. |
| Academic Wing | Maths & Science Faculty | Senior school teachers for Classes 8 to 12, board preparation and JEE foundation. |
| Skill Wing | Spoken English Trainers | Communication, pronunciation and fluency coaching for students and professionals. |
| Skill Wing | Corporate Interview Panel | Mock interviews, group discussions and résumé guidance for corporate placement. |
| Current Affairs | Current Affairs Desk | Daily national, international and defence news briefings with structured notes. |
| Assessment | Test & Evaluation Cell | Weekly assessments, full-length mocks and one-to-one performance review. |

### Section 04 — In the Classroom

**Badge:** ◉ IN SESSION — `// FACULTY CONDUCTING CLASS` (image `assets/b5.jpg`)
**Heading:** TAUGHT BY PEOPLE WHO HAVE Done It.
**Body:** "Ex-military officers for the defence wing. Career academics for the boards and civil services. Trainers who conduct interviews for the skill wing. Nobody teaches a paper here that they have not sat, set or marked themselves."
**CTA:** Talk to the Team ⟶

### Closing

**Heading:** COME AND Meet Them.
**Body:** "Walk into the institute at Dr. A. S. Rao Nagar, sit in on a session, and decide for yourself."
**Buttons:** Book a Visit ⟶ · Call +91 97011 47051

---

## 8. Gallery — `gallery.html`

**Title:** Gallery — Life at Brigadier's Defence & Skill Institute, Secunderabad
**Meta description:** A glimpse into training, infrastructure and student life at Brigadier's Defence & Skill Institute — classrooms, the reading room, cadet batches and the campus at Dr. A. S. Rao Nagar.

**Breadcrumb:** Home / Gallery
**Heading:** Life at the Institute.
**Standfirst:** "A glimpse into our training, our infrastructure, and the journey of our students towards excellence. Click any photograph to open it full size."
**Chip:** Campus · Classrooms · Reading Room
**Section title:** The Field Album

Twelve photographs, clicking opens a lightbox. Rendered from `BDSI_CONTENT.gallery`:

| # | Image | Caption |
|---|---|---|
| 1 | `assets/g1.png` | Cadets Batch — Group Photograph |
| 2 | `assets/b2.jpg` | Brigadier Krishna Raj in Uniform |
| 3 | `assets/g3.png` | India Today — Kargil Victory Coverage |
| 4 | `assets/g2.png` | Director — Brigadier Krishna Raj |
| 5 | `assets/b1.jpg` | Reading Room — Study Cabins & Library |
| 6 | `assets/b3.jpg` | Spacious Air-Conditioned Classroom |
| 7 | `assets/b4.jpg` | Classroom — Lecture Setup |
| 8 | `assets/g4.png` | Brigadier's Institute — Campus Building |
| 9 | `assets/b5.jpg` | Faculty Conducting Class |
| 10 | `assets/b6.jpg` | Students in Session |
| 11 | `assets/banner1.jpg` | Institute Frontage |
| 12 | `assets/banner3.jpg` | Training in Progress |

### Closing

**Heading:** SEE IT FOR Yourself.
**Body:** "Photographs only go so far. Visit the campus at Jayalakshmi Enclave, Gate No. 2, Dr. A. S. Rao Nagar — and sit in on a live session."
**Buttons:** Book a Campus Visit ⟶ · Call +91 97011 47051

---

## 9. Contact — `contact.html`

**Title:** Contact & Admissions — Brigadier's Defence & Skill Institute, Secunderabad
**Meta description:** Contact Brigadier's Defence & Skill Institute — Jayalakshmi Enclave, Gate No. 2, Dr. A. S. Rao Nagar, Secunderabad, Hyderabad 500062. Call +91 97011 47051 or send an enquiry.

**Breadcrumb:** Home / Contact
**Heading:** Get In Touch.
**Standfirst:** "Send one enquiry and our team will call you back with batch schedules, fee structure and honest eligibility advice."
**Chips:** Admissions Open · Secunderabad · 500062

### Reach Us panel

| Block | Content |
|---|---|
| Call / WhatsApp | +91 97011 47051 · +91 99897 47052 |
| Director | Director@brigadiersinstitute.com |
| Support | Support@brigadiersinstitute.com |
| Location | Jayalakshmi Enclave, Gate No. 2, Dr. A. S. Rao Nagar, Secunderabad, Hyderabad, Telangana – 500062 |

**QR block:** image `assets/qr-location.png` — "Scan for Directions / Point your phone camera at the code to open our location on the map."
**Buttons:** Call Now · WhatsApp Us

### Enquiry form

**Heading:** Send an Enquiry. · **Eyebrow:** `// WE CALL BACK WITHIN ONE WORKING DAY`

| Field | Required |
|---|---|
| Full Name | Yes |
| Phone Number | Yes |
| Email Address | No |
| City | No |
| Programme (select) | No |
| Message | No |

**Programme options:** Select a programme · Defence Coaching (NDA / CDS / AFCAT / CAPF) · UPSC Civil Services · TGPSC Special Coaching (Group 2 & 3) · JEE Foundation & Tuitions (Classes 8–12) · Reading Room Membership · Corporate Interview Training · Spoken English

**Consent checkbox:** "I agree to be contacted by Brigadier's Defence & Skill Institute about my enquiry on the phone number and email provided."

**Submit:** Send Enquiry ⟶
**Note:** `// OPENS WHATSAPP WITH YOUR DETAILS PRE-FILLED`

> The form does not post to a server. On submit it composes a WhatsApp message from the field values and opens `wa.me/919701147051`. There is no backend, database or email delivery.

### Section 02 — Find Us

**Heading:** DR. A. S. RAO NAGAR, Secunderabad.
**Map embed:** `https://www.google.com/maps?q=Jayalakshmi%20Enclave%2C%20Dr.%20A.%20S.%20Rao%20Nagar%2C%20Secunderabad%2C%20Telangana%20500062&output=embed`
**Link:** Open in Maps ⟶ → `https://www.google.com/maps/search/?api=1&query=Jayalakshmi+Enclave+Dr+A+S+Rao+Nagar+Secunderabad+500062`

### Section 03 — FAQ (marker: FAQ)

**Heading:** FREQUENTLY ASKED Questions. · **Eyebrow:** `// STILL UNSURE? CALL +91 97011 47051`

Accordion, rendered from `BDSI_CONTENT.faq`:

**1. Who is eligible to join the Defence Coaching programme?**
Any Indian citizen who meets the age and educational criteria for NDA (10+2), CDS (Graduate), AFCAT (Graduate) or CAPF can join. We also provide eligibility counselling to guide you to the programme that actually suits your age, qualification and target.

**2. What makes Brigadier's different from other coaching institutes?**
Our defence programmes are led by Brigadier Krishna Raj, a former Instructor at the Army War College with over three decades of military service, and our academic wing is headed by Ms. Rashmi, a former Degree College Principal with 20+ years in higher education. You are taught by people who have selected candidates and who have run institutions — not only by people who have passed exams.

**3. Is the TGPSC coaching available for all groups?**
We run special coaching for TGPSC Group 2 and Group 3, with subject-wise specialists and Telangana-specific preparation. Please call us to confirm the current batch schedule for the group you are targeting.

**4. Can I join the Reading Room without enrolling in a coaching programme?**
Yes. The Reading Room is open to any serious aspirant as a standalone membership. You get a silent air-conditioned hall, an individual cabin, high-speed WiFi and power backup, whether or not you attend our classes.

**5. How do mock interviews work in the Corporate preparation programme?**
Candidates sit a full-length simulated interview before a panel, followed by a structured debrief covering content, body language, communication and presence. Group discussion rounds and résumé review are part of the same programme.

**6. Are there any hostel or accommodation facilities?**
Please contact the office on +91 97011 47051 for the current position on accommodation and for guidance on paying-guest options near the institute in Dr. A. S. Rao Nagar.

**7. How can I download the prospectus?**
Send us an enquiry through the form on this page or message us on WhatsApp and we will share the current prospectus and fee structure with you directly.

**8. Do you offer tuition classes for school students (8th to 12th class)?**
Yes. We run tuition and JEE Foundation classes for Classes 8 to 12 in small batches, with regular tests and individual attention from senior faculty.

**9. What subjects are covered in the tuition programme?**
Mathematics and Science are our core tuition subjects across Classes 8 to 12, taught with both board examination and competitive-exam aptitude in mind.

**10. What are the timings for the tuition classes?**
Tuition batches are scheduled around school hours, with morning, evening and weekend options. Call us on +91 97011 47051 for the timings of the batch you need.

### Closing

**Heading:** BOOK YOUR Seat.
**Body:** "Admissions are open across all five wings. One enquiry, one call back, one honest recommendation."
**Buttons:** Send an Enquiry ⟶ · Browse Programmes

---

## 10. Asset inventory

26 images in `assets/`.

### Photographs — campus and classroom

| File | Used for |
|---|---|
| `b1.jpg` | Reading room — study cabins & library |
| `b2.jpg` | Brigadier Krishna Raj in uniform |
| `b3.jpg` | Air-conditioned classroom (home hero) |
| `b4.jpg` | Classroom — lecture setup |
| `b5.jpg` | Faculty conducting class (leadership section 04) |
| `b6.jpg` | Students in session |
| `banner1.jpg` | Institute frontage |
| `banner3.jpg` | Training in progress |

### Gallery and identity

| File | Used for |
|---|---|
| `g1.png` | Cadets batch group photograph |
| `g2.png` | Director — Brigadier Krishna Raj |
| `g3.png` | India Today — Kargil victory coverage |
| `g4.png` | Campus building |
| `logo.png` | Wordmark and favicon |
| `qr-location.png` | Location QR code (contact page) |

### Portraits

| File | Used for |
|---|---|
| `mentor-brigadier.jpg` | Brigadier Krishna Raj |
| `director-rashmi.jpg` | Ms. Rashmi |

### Programme cards

`prog-defence.png` · `prog-tgpsc.png` · `prog-tuitions.jpg` · `prog-studyzone.jpg`

### Strength cards

`why-military.png` · `why-academic.jpg` · `why-personality.jpg` · `why-current.jpg` · `why-tests.jpg`

---

## 11. Notes for anyone editing

- **Content changes** — programmes, strengths, gallery photos, faculty desks and FAQs are all data in `js/content.js`. Keep the quotes and commas intact; the file is plain JavaScript.
- **Prose changes** — hero copy, section headings and body paragraphs are hard-coded in the HTML and must be edited page by page. The footer and navigation are duplicated across all six pages, so a change there is six edits.
- **Faculty names** — the leadership page currently shows role nameplates, not named individuals. Real names and photographs can be added to `BDSI_CONTENT.faculty`.
- **Image weight** — several assets are large (`g1.png`, `g3.png`, `logo.png` and `why-academic.jpg` are each over 2 MB). Compressing them would be the single biggest performance win.
- **The enquiry form** has no backend. Submissions open WhatsApp on the visitor's device; nothing is stored, and nothing arrives if the visitor abandons the WhatsApp step.
