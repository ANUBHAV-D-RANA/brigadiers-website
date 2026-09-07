/* ============================================================
   BRIGADIER'S INSTITUTE — EDITABLE CONTENT
   ------------------------------------------------------------
   This is the ONLY file you need to touch to change programmes,
   photos, faculty or FAQs. Drop new images into  assets/  and
   point to them here. Keep the quotes and commas exactly as-is.
   ============================================================ */
window.BDSI_CONTENT = {

  /* ---------- PROGRAMMES (programmes.html) ---------------- */
  programmes: [
    {
      title: 'Defence Coaching',
      sub: 'NDA · CDS · AFCAT · CAPF',
      image: 'assets/prog-defence.png',
      label: 'DEFENCE WING',
      desc: 'Complete written-exam preparation plus SSB interview training for every defence entry. Taught by officers who have sat on the other side of the selection board — with daily current affairs, weekly mock tests and personality grooming built into the timetable.',
      tags: ['NDA', 'CDS', 'AFCAT', 'CAPF', 'SSB Interview'],
      accent: true
    },
    {
      title: 'UPSC & TGPSC',
      sub: 'Civil Services · Group 2 & Group 3',
      image: 'assets/prog-tgpsc.png',
      label: 'CIVIL SERVICES WING',
      desc: 'Focused, subject-wise preparation for the Civil Services examination and TGPSC Group 2 & 3, led by specialists in each paper. Structured answer-writing practice, current affairs analysis and regular sectional tests.',
      tags: ['UPSC', 'TGPSC Group 2', 'TGPSC Group 3', 'Answer Writing'],
      accent: true
    },
    {
      title: 'JEE Foundation & Tuitions',
      sub: 'Classes 8 – 12 · Maths & Science',
      image: 'assets/prog-tuitions.jpg',
      label: 'ACADEMIC WING',
      desc: 'Expert coaching in Mathematics and Science for senior school students, with small batches, regular tests and genuine personal attention. Builds the board-exam foundation and the JEE aptitude at the same time.',
      tags: ['Class 8–10', 'Class 11–12', 'Maths', 'Science', 'JEE Foundation'],
      accent: false
    },
    {
      title: 'The Reading Room',
      sub: 'Silent AC study library with WiFi',
      image: 'assets/prog-studyzone.jpg',
      label: 'READING ROOM',
      desc: 'An air-conditioned silent study hall with high-speed WiFi, power backup and comfortable individual cabins. Open to serious aspirants whether or not you are enrolled in a coaching programme.',
      tags: ['Silent Cabins', 'High-Speed WiFi', 'Power Backup', 'Air Conditioned'],
      accent: false
    },
    {
      title: 'Corporate & Spoken English',
      sub: 'Interview training · Communication skills',
      image: 'assets/why-personality.jpg',
      label: 'SKILL WING',
      desc: 'Mock interviews, group discussion practice and spoken English coaching for students and working professionals preparing for corporate selection. Confidence, clarity and presence — trained, not hoped for.',
      tags: ['Mock Interviews', 'Group Discussion', 'Spoken English', 'Résumé'],
      accent: false
    }
  ],

  /* ---------- STRENGTHS (about.html) ---------------------- */
  strengths: [
    { title: 'Ex-Military Faculty',      image: 'assets/why-military.png',  text: 'Learn from officers who served in the Indian Armed Forces and bring real strategic and leadership experience into the classroom.' },
    { title: 'Academic Faculty',         image: 'assets/why-academic.jpg',  text: 'Experienced teachers with proven track records in government examination and board examination preparation.' },
    { title: 'Personality Development',  image: 'assets/why-personality.jpg', text: 'Comprehensive grooming in communication, confidence and leadership — the qualities the selection board is actually measuring.' },
    { title: 'Daily Current Affairs',    image: 'assets/why-current.jpg',   text: 'Everyday sessions covering national, international and defence-related news, with the analysis that turns headlines into answers.' },
    { title: 'Weekly Assessments',       image: 'assets/why-tests.jpg',     text: 'Regular tests and full-length mocks so progress is measured, weak areas are found early, and nothing is left to the last month.' },
    { title: 'The Reading Room',         image: 'assets/prog-studyzone.jpg', text: 'A silent, air-conditioned library with WiFi and power backup — because preparation needs somewhere to actually happen.' }
  ],

  /* ---------- GALLERY (gallery.html) ---------------------- */
  gallery: [
    { image: 'assets/g1.png', caption: 'Cadets Batch — Group Photograph' },
    { image: 'assets/b2.jpg', caption: 'Brigadier Krishna Raj in Uniform' },
    { image: 'assets/g3.png', caption: 'India Today — Kargil Victory Coverage' },
    { image: 'assets/g2.png', caption: 'Director — Brigadier Krishna Raj' },
    { image: 'assets/b1.jpg', caption: 'Reading Room — Study Cabins & Library' },
    { image: 'assets/b3.jpg', caption: 'Spacious Air-Conditioned Classroom' },
    { image: 'assets/b4.jpg', caption: 'Classroom — Lecture Setup' },
    { image: 'assets/g4.png', caption: "Brigadier's Institute — Campus Building" },
    { image: 'assets/b5.jpg', caption: 'Faculty Conducting Class' },
    { image: 'assets/b6.jpg', caption: 'Students in Session' },
    { image: 'assets/banner1.jpg', caption: 'Institute Frontage' },
    { image: 'assets/banner3.jpg', caption: 'Training in Progress' }
  ],

  /* ---------- FACULTY NAMEPLATES (leadership.html) -------- */
  faculty: [
    { dept: 'Defence Wing',    name: 'Written Exam Faculty',   text: 'Mathematics, General Ability and English for NDA, CDS, AFCAT and CAPF written papers.' },
    { dept: 'Defence Wing',    name: 'SSB Interview Panel',    text: 'Psychology tests, GTO tasks and personal interview practice conducted the way the board conducts it.' },
    { dept: 'Civil Services',  name: 'UPSC & TGPSC Faculty',   text: 'Subject-wise specialists for polity, history, geography, economy and Telangana-specific papers.' },
    { dept: 'Academic Wing',   name: 'Maths & Science Faculty', text: 'Senior school teachers for Classes 8 to 12, board preparation and JEE foundation.' },
    { dept: 'Skill Wing',      name: 'Spoken English Trainers', text: 'Communication, pronunciation and fluency coaching for students and professionals.' },
    { dept: 'Skill Wing',      name: 'Corporate Interview Panel', text: 'Mock interviews, group discussions and résumé guidance for corporate placement.' },
    { dept: 'Current Affairs', name: 'Current Affairs Desk',   text: 'Daily national, international and defence news briefings with structured notes.' },
    { dept: 'Assessment',      name: 'Test & Evaluation Cell', text: 'Weekly assessments, full-length mocks and one-to-one performance review.' }
  ],

  /* ---------- FAQ (contact.html) -------------------------- */
  faq: [
    {
      q: 'Who is eligible to join the Defence Coaching programme?',
      a: 'Any Indian citizen who meets the age and educational criteria for NDA (10+2), CDS (Graduate), AFCAT (Graduate) or CAPF can join. We also provide eligibility counselling to guide you to the programme that actually suits your age, qualification and target.'
    },
    {
      q: "What makes Brigadier's different from other coaching institutes?",
      a: 'Our defence programmes are led by Brigadier Krishna Raj, a former Instructor at the Army War College with over three decades of military service, and our academic wing is headed by Ms. Rashmi, a former Degree College Principal with 20+ years in higher education. You are taught by people who have selected candidates and who have run institutions — not only by people who have passed exams.'
    },
    {
      q: 'Is the TGPSC coaching available for all groups?',
      a: 'We run special coaching for TGPSC Group 2 and Group 3, with subject-wise specialists and Telangana-specific preparation. Please call us to confirm the current batch schedule for the group you are targeting.'
    },
    {
      q: 'Can I join the Reading Room without enrolling in a coaching programme?',
      a: 'Yes. The Reading Room is open to any serious aspirant as a standalone membership. You get a silent air-conditioned hall, an individual cabin, high-speed WiFi and power backup, whether or not you attend our classes.'
    },
    {
      q: 'How do mock interviews work in the Corporate preparation programme?',
      a: 'Candidates sit a full-length simulated interview before a panel, followed by a structured debrief covering content, body language, communication and presence. Group discussion rounds and résumé review are part of the same programme.'
    },
    {
      q: 'Are there any hostel or accommodation facilities?',
      a: 'Please contact the office on +91 97011 47051 for the current position on accommodation and for guidance on paying-guest options near the institute in Dr. A. S. Rao Nagar.'
    },
    {
      q: 'How can I download the prospectus?',
      a: 'Send us an enquiry through the form on this page or message us on WhatsApp and we will share the current prospectus and fee structure with you directly.'
    },
    {
      q: 'Do you offer tuition classes for school students (8th to 12th class)?',
      a: 'Yes. We run tuition and JEE Foundation classes for Classes 8 to 12 in small batches, with regular tests and individual attention from senior faculty.'
    },
    {
      q: 'What subjects are covered in the tuition programme?',
      a: 'Mathematics and Science are our core tuition subjects across Classes 8 to 12, taught with both board examination and competitive-exam aptitude in mind.'
    },
    {
      q: 'What are the timings for the tuition classes?',
      a: 'Tuition batches are scheduled around school hours, with morning, evening and weekend options. Call us on +91 97011 47051 for the timings of the batch you need.'
    }
  ]
};
