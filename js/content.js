/* ============================================================
   BRIGADIER'S INSTITUTE — EDITABLE CONTENT
   ------------------------------------------------------------
   This is the ONLY file you need to touch to change programmes,
   photos, faculty, FAQs or blog posts. Drop new images into
   assets/ and point to them here. Keep the quotes and commas
   exactly as-is.
   ============================================================ */
window.BDSI_CONTENT = {

  /* ---------- PROGRAMMES (programmes.html) ---------------- */
  programmes: [
    {
      title: 'Defence Coaching',
      sub: 'NDA · CDS · AFCAT · CAPF',
      image: 'assets/b3.jpg',
      label: 'DEFENCE WING',
      desc: 'Complete written-exam preparation, with IIT-JEE level instructors available for Mathematics and Physics. Full SSB interview training taught by serving-standard officers — with daily current affairs, weekly mock tests and personality grooming built into the timetable. Available online and offline.',
      tags: ['NDA', 'CDS', 'AFCAT', 'CAPF', 'SSB Interview', 'Online & Offline'],
      accent: true
    },
    {
      title: 'Banking Exams & SSC CGL',
      sub: 'IBPS · SBI · Officer Level · SSC CGL',
      image: 'assets/why-academic.jpg',
      label: 'BANKING & SSC WING',
      desc: 'Focused preparation for banking recruitment at both clerical and officer level, and for SSC CGL. Subject-wise specialists, structured practice in quantitative aptitude, reasoning and English, and regular sectional tests through the cycle.',
      tags: ['Banking Exams', 'Officer Level', 'SSC CGL', 'Aptitude', 'Reasoning'],
      accent: true
    },
    {
      title: 'Sainik School & Tuitions',
      sub: 'Sainik School · RMS · Classes 8 – 12',
      image: 'assets/prog-tuitions.jpg',
      label: 'ACADEMIC WING',
      desc: 'Sainik School and RMS entrance training, plus Mathematics and Science tuitions for Classes 8 to 12. Small batches, regular tests and genuine personal attention. Sainik School preparation runs online; tuitions run online and in the classroom.',
      tags: ['Sainik School', 'RMS', 'Class 8–10', 'Class 11–12', 'Online & Classroom'],
      accent: false
    },
    {
      title: 'The Reading Room',
      sub: 'Silent study library with WiFi',
      image: 'assets/b1.jpg',
      label: 'READING ROOM',
      desc: 'A silent study hall with high-speed WiFi, power backup and comfortable individual cabins. Open to serious aspirants whether or not you are enrolled in a coaching programme.',
      tags: ['Silent Cabins', 'High-Speed WiFi', 'Power Backup', 'Individual Seating'],
      accent: false
    },
    {
      title: 'Spoken English & Interview Skills',
      sub: 'Communication · Group discussion · Interview practice',
      image: 'assets/b5.jpg',
      label: 'SKILL WING',
      desc: 'Spoken English coaching, group discussion practice and mock interviews for students and working professionals, taught by a TOEFL-qualified English faculty member. Confidence, clarity and presence — trained, not hoped for.',
      tags: ['Spoken English', 'TOEFL-Qualified Faculty', 'Group Discussion', 'Mock Interviews'],
      accent: false
    }
  ],

  /* ---------- STRENGTHS (about.html) ---------------------- */
  strengths: [
    { title: 'Ex-Military Faculty',      image: 'assets/brigadier-uniform.jpg', text: 'Learn from officers who served in the Indian Armed Forces and bring real strategic and leadership experience into the classroom.' },
    { title: 'Academic Faculty',         image: 'assets/why-academic.jpg',      text: 'Teachers with proven records — IIT-JEE level instructors for Mathematics and Physics, GK and Polity instructors from TIME Institute, and a TOEFL-qualified English teacher.' },
    { title: 'Personality Development',  image: 'assets/b5.jpg',                text: 'Comprehensive grooming in communication, confidence and leadership — the qualities the selection board is actually measuring.' },
    { title: 'Daily Current Affairs',    image: 'assets/b4.jpg',                text: 'Everyday sessions on national, international and defence news, with cutouts taken from the papers and issued in a folder to every student.' },
    { title: 'Weekly Assessments',       image: 'assets/b6.jpg',                text: 'Regular tests and full-length mocks so progress is measured, weak areas are found early, and nothing is left to the last month.' },
    { title: 'The Reading Room',         image: 'assets/b1.jpg',                text: 'A silent library with WiFi and power backup — because preparation needs somewhere to actually happen.' }
  ],

  /* ---------- GALLERY (gallery.html) ---------------------- */
  gallery: [
    { image: 'assets/g1.jpg', caption: 'Cadets Batch — Group Photograph' },
    { image: 'assets/brigadier-uniform.jpg', caption: 'Brigadier Krishna Raj in Uniform' },
    { image: 'assets/g3.jpg', caption: 'India Today — Kargil Victory Coverage' },
    { image: 'assets/g2.jpg', caption: 'Director — Brigadier Krishna Raj' },
    { image: 'assets/b1.jpg', caption: 'Reading Room — Study Cabins & Library' },
    { image: 'assets/b3.jpg', caption: 'Spacious Classroom' },
    { image: 'assets/b4.jpg', caption: 'Classroom — Lecture Setup' },
    { image: 'assets/g4.jpg', caption: "Brigadier's Institute — Campus Building" },
    { image: 'assets/b5.jpg', caption: 'Faculty Conducting Class' },
    { image: 'assets/b6.jpg', caption: 'Students in Session' },
    { image: 'assets/why-academic.jpg', caption: 'Classroom in Session' },
    { image: 'assets/b2.jpg', caption: 'Classroom — Dr. A. S. Rao Nagar' }
  ],

  /* ---------- FACULTY CREDENTIALS (leadership.html) ------- */
  faculty: [
    { dept: 'English',                  name: 'TOEFL Specialist',       text: 'TOEFL specialist and former Principal. Spoken English, comprehension and the English papers across every entrance.' },
    { dept: 'Mathematics',              name: 'MSc Mathematics',        text: 'IIT-JEE level instructor. Mathematics for NDA, CDS, banking aptitude, SSC CGL and Classes 8 to 12.' },
    { dept: 'Physics',                  name: 'MSc Physics',            text: 'IIT-JEE specialist. Physics for senior school, JEE foundation and Sainik School entrance science.' },
    { dept: 'Chemistry & Life Science', name: 'MSc Biotechnology',      text: 'Chemistry and Life Science for Classes 8 to 12 and board examination preparation.' },
    { dept: 'GK & Current Affairs',     name: 'MA Political Science',   text: 'Ex-TIME Institute. General knowledge, polity and the daily current affairs briefing.' },
    { dept: 'Direction',                name: 'MA English & History',   text: 'Former Degree College Principal. Academic direction across the banking, SSC and academic wings.' },
    { dept: 'Defence Wing',             name: 'SSB Interview Panel',    text: 'Psychology tests, GTO tasks and personal interview practice conducted the way the board conducts it.' },
    { dept: 'Assessment',               name: 'Test & Evaluation Cell', text: 'Weekly assessments, full-length mocks and one-to-one performance review.' }
  ],

  /* ---------- BLOG (blog.html + blog-*.html) --------------
     To add a post: copy a block, change the fields, then copy
     an existing blog-*.html file and rewrite its article body. */
  blog: [
    {
      url: 'blog-ssb-interview.html',
      title: 'What the SSB Interview Actually Measures',
      excerpt: 'Five days, fifteen officer-like qualities, and almost none of it is about what you know. What the board is really watching for — and the three mistakes that end most attempts before the third day.',
      dateLabel: '7 September 2026',
      read: '8 min read',
      category: 'SSB Interview',
      image: 'assets/brigadier-uniform.jpg',
      author: 'Brigadier Krishna Raj'
    },
    {
      url: 'blog-nda-preparation.html',
      title: 'The NDA Written Exam: A Six-Month Plan',
      excerpt: 'Mathematics carries 300 marks, the GAT carries 600, and most candidates prepare for them in the wrong proportion. A month-by-month plan built around how the paper is actually scored.',
      dateLabel: '7 September 2026',
      read: '10 min read',
      category: 'NDA Preparation',
      image: 'assets/b3.jpg',
      author: "Brigadier's Institute Faculty"
    }
  ],

  /* ---------- FAQ (contact.html) -------------------------- */
  faq: [
    {
      q: 'Who is eligible to join the Defence Coaching programme?',
      a: 'Any Indian citizen who meets the age and educational criteria for NDA (10+2), CDS (Graduate), AFCAT (Graduate) or CAPF can join. We also provide eligibility counselling to guide you to the programme that actually suits your age, qualification and target.'
    },
    {
      q: "What makes Brigadier's different from other coaching institutes?",
      a: 'Our defence programmes are led by Brigadier Krishna Raj, a former Instructor at the Army War College with over three decades of military service, and our academic wing is headed by a former Degree College Principal with 20+ years in higher education. You are taught by people who have selected candidates and who have run institutions — not only by people who have passed exams.'
    },
    {
      q: 'Is Banking Exam and SSC CGL coaching available for all groups?',
      a: 'We run coaching for banking recruitment at both clerical and officer level, and for SSC CGL. Please call us on +91 72078 47051 to confirm the current batch schedule for the examination you are targeting.'
    },
    {
      q: 'Can I join the Reading Room without enrolling in a coaching programme?',
      a: 'Yes. The Reading Room is open to any serious aspirant as a standalone membership. You get a silent hall, an individual cabin, high-speed WiFi and power backup, whether or not you attend our classes.'
    },
    {
      q: 'Is there a facility for Sainik School, RMS and tuitions?',
      a: 'Yes. We run Sainik School and RMS entrance training, along with tuitions for Classes 8 to 12 in Mathematics and Science. Sainik School preparation is conducted online; tuitions run both online and in the classroom.'
    },
    {
      q: 'Are there any hostel or accommodation facilities?',
      a: 'We do not provide hostel or accommodation facilities. Please contact the office on +91 72078 47051 and we will guide you to paying-guest options near the institute in Dr. A. S. Rao Nagar.'
    },
    {
      q: 'How can I download the prospectus?',
      a: 'Send us an enquiry through the form on this page or message us on WhatsApp and we will share the current prospectus and fee structure with you directly.'
    },
    {
      q: 'Do you offer tuition classes for school students (8th to 12th class)?',
      a: 'Yes. We run tuition and Sainik School preparation for Classes 8 to 12 in small batches, with regular tests and individual attention from senior faculty — including IIT-JEE level instructors for Mathematics and Physics.'
    },
    {
      q: 'What subjects are covered in the tuition programme?',
      a: 'Mathematics, Physics, Chemistry and Life Science across Classes 8 to 12, taught with both board examination and competitive-exam aptitude in mind.'
    },
    {
      q: 'What are the timings for the tuition classes?',
      a: 'Tuition batches are scheduled around school hours, with morning, evening and weekend options. Call us on +91 72078 47051 for the timings of the batch you need.'
    }
  ]
};
