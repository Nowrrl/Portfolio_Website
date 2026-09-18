export const identity = {
  name: "Rasul Novruzov",
  role: "Full-Stack Engineer & AI/ML Engineer",
  tagline: "Building intelligent systems. Engineering real-world solutions.",
  intro:
    "I'm Rasul Novruzov, a Computer Science and Engineering graduate from Sabancı University. I develop end-to-end software products that combine modern web technologies, backend engineering, and artificial intelligence. My experience spans computer vision, satellite image processing, AI integration, and production-ready web applications.",
  location: "Baku, Azerbaijan",
  email: "rasul.novruzov@sabanciuniv.edu",
  phone: "+994 70 747 77 25",
  github: "https://github.com/Nowrrl",
  linkedin: "https://www.linkedin.com/in/nowr",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning and Deep Learning",
  "Computer Vision",
  "Full-Stack Software Development",
  "AI-powered applications",
  "Software product engineering",
];

export const experiences = [
  {
    company: "A.R.A.Z",
    companyDetail: "Azercosmos Earth Observation Startup",
    role: "AI/ML Engineer & Full-Stack Developer",
    period: "June 2026 – Present",
    location: "Baku, Azerbaijan",
    summary: "Building an AI-powered Earth Observation product across the application stack.",
    details: [
      "Built and deployed an end-to-end AI-powered satellite change-detection web platform.",
      "Developed frontend functionality and Java Spring Boot backend services.",
      "Designed and maintained PostgreSQL database integration.",
      "Integrated GPU-based AI inference with web application workflows.",
      "Developed satellite image-processing functionality, including super-resolution techniques.",
      "Participated in product planning, UI/UX design, deployment, and production maintenance.",
    ],
  },
  {
    company: "4SIM",
    companyDetail: "",
    role: "AI/ML Intern",
    period: "September 2025 – August 2026",
    location: "Baku, Azerbaijan",
    summary: "Developed and deployed practical AI applications across vision and language tasks.",
    details: [
      "Developed AI-driven applications involving computer vision, NLP, and chatbots.",
      "Trained and fine-tuned deep learning models.",
      "Gained practical experience with AI deployment.",
      "Developed a computer vision solution for identifying workers.",
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "AI-Powered Satellite Change Detection",
    category: "Professional / AI / Full-Stack",
    description:
      "An end-to-end Earth Observation platform integrating satellite imagery, AI-based change detection, backend services, PostgreSQL, and GPU-powered inference.",
    details:
      "My work included frontend development, Java Spring Boot services, database integration, AI processing integration, and deployment.",
    technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "Python", "GPU AI Inference"],
    visual: "satellite",
    featured: true,
  },
  {
    number: "02",
    title: "Satellite Image Retrieval Using Deep Learning",
    category: "Graduation Project / Deep Learning",
    description:
      "A CNN-based content-based image retrieval system that identifies visually similar satellite images through image preprocessing, feature extraction, and similarity measurement.",
    details:
      "The system focuses on visual similarity in satellite imagery through a deep-learning retrieval pipeline.",
    technologies: ["Python", "Deep Learning", "CNNs", "Computer Vision"],
    visual: "retrieval",
    featured: false,
  },
  {
    number: "03",
    title: "Person Re-Identification",
    category: "Deep Learning / Computer Vision",
    description:
      "A computer vision system designed to match individuals across different camera views despite changes in lighting and viewpoint.",
    details:
      "The project explores robust visual identity matching across varied camera conditions.",
    technologies: ["Python", "CNNs", "Deep Learning", "Computer Vision"],
    visual: "person",
    featured: false,
  },
  {
    number: "04",
    title: "Full-Stack E-Commerce Platform",
    category: "Full-Stack Development",
    description:
      "A complete shopping application featuring authentication, product filtering, shopping carts, wishlists, reviews, and order management.",
    details:
      "The product combines a responsive client experience with a Java service layer and relational data model.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    visual: "commerce",
    featured: false,
  },
  {
    number: "05",
    title: "Object Detection",
    category: "Computer Vision",
    description:
      "An object detection project comparing YOLOv5 and Faster R-CNN on custom objects, incorporating transfer learning, data augmentation, and evaluation using precision and F1-score.",
    details:
      "The study compares two detection approaches through a consistent training and evaluation workflow.",
    technologies: ["Python", "YOLOv5", "Faster R-CNN", "PyTorch"],
    visual: "detection",
    featured: false,
  },
] as const;

export const skillGroups = [
  { title: "Programming", skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C#"] },
  { title: "Frontend", skills: ["React", "HTML5", "CSS3", "State Management", "Responsive Design", "Reusable Components", "UI/UX Design"] },
  { title: "Backend", skills: ["Spring Boot", "Node.js", "REST APIs", "API Integration"] },
  { title: "AI & Machine Learning", skills: ["TensorFlow", "PyTorch", "Computer Vision", "Deep Learning", "Image Processing"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "SQL", "Relational Database Design"] },
  { title: "Infrastructure & Development", skills: ["AWS S3", "Docker", "Kubernetes", "Railway", "Git", "GitHub", "CI/CD", "Linux", "Jest", "Postman"] },
];

export const languages = ["English — IELTS Academic 8", "Azerbaijani", "Turkish", "Russian"];

export const coursework = [
  "Software Engineering",
  "Database Systems",
  "Data Structures and Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Deep Learning",
  "Human-Computer Interaction",
];

export const education = {
  institution: "Sabancı University",
  degree: "Bachelor of Science in Computer Science and Engineering",
  period: "September 2022 – June 2026",
};

export const achievements = [
  "2026 Hackathon Prize Winner: Awarded USD 2,000 for developing and presenting a cheat-detection system.",
  "Fully funded scholarship awarded by the Ministry of Education of Azerbaijan for academic excellence.",
  "Gold medals in district, city, and national chess competitions.",
];
