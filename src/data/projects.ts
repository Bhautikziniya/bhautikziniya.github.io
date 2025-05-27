interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  appStoreLink?: string;
  websiteLink?: string;
}

export const projects: Project[] = [
  {
    id: "rockeye-attendance-hub",
    title: "ROCKEYE Attendance Hub",
    description: "A comprehensive attendance management solution tracking employee productivity, attendance, and visitor management. Features real-time location tracking, detailed attendance summaries, visitor management, and employee movement tracking with photo verification.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core Location", "Core Data", "MapKit", "Camera API"],
    appStoreLink: "https://apps.apple.com/in/app/rockeye-attendance-hub/id6471335195"
  },
  {
    id: "rockeye-attendance-punch",
    title: "ROCKEYE Attendance Punch",
    description: "A streamlined employee attendance app with visitor management capabilities. Enables easy punch-in/out functionality and comprehensive visitor tracking with detailed information management.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core Location", "UIKit", "Core Data"],
    appStoreLink: "https://apps.apple.com/in/app/rockeye-attendance-punch/id6468650075"
  },
  {
    id: "mrs-portal",
    title: "MRS Portal",
    description: "A comprehensive business management app enabling online registration, price checking, order placement, loading ticket creation, delivery scheduling, and more. Streamlines operations with real-time updates and digital documentation.",
    image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core Data", "PDF Kit", "Network"],
    appStoreLink: "https://apps.apple.com/us/app/mrs-portal/id1451053466"
  },
  {
    id: "portal-operations",
    title: "Portal Operations",
    description: "An operations management app providing real-time updates on fuel requests, delivery status, bowser allocation, and site inspections. Features comprehensive tracking and management of various operational aspects.",
    image: "https://images.pexels.com/photos/7648467/pexels-photo-7648467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "MapKit", "Core Location", "Push Notifications"],
    appStoreLink: "https://apps.apple.com/in/app/portal-operations/id1565534631"
  },
  {
    id: "rockeye-transporter",
    title: "Rockeye Transporter",
    description: "Rockeye Transporter is an ultimate app for managing your transportation business with ease and efficiency. Whether you're a fleet owner, logistics manager, or a truck driver, our comprehensive platform has you covered. Say goodbye to the hassle of paperwork and hello to streamlined operations. Features include intuitive trip creation with real-time traffic updates, route optimization, and comprehensive fleet management with driver assignment and performance tracking.",
    image: "https://images.pexels.com/photos/7648467/pexels-photo-7648467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "MapKit", "Core Location", "Push Notifications", "Core Data"],
    appStoreLink: "https://apps.apple.com/us/app/rockeye-transporter/id6468956066"
  },
  {
    id: "quickmart",
    title: "Quickmart",
    description: "A comprehensive retail platform enabling customers to purchase products online and redeem them at nearby Quickmart outlets. Features include wishlist management, store locator, corporate customer management with staff allocation systems, and an innovative invite-based rewards program.",
    image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core Location", "MapKit", "Core Data", "Push Notifications"],
    appStoreLink: "https://apps.apple.com/in/app/quickmart/id1614636080"
  },
  {
    id: "datums-ai",
    title: "Datums.AI",
    description: "An AI-powered platform revolutionizing data analysis and decision-making. Leveraging advanced machine learning algorithms to provide actionable insights and predictive analytics for businesses.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core ML", "Vision", "Natural Language", "Charts"],
    websiteLink: "https://www.datums.ai"
  },
  {
    id: "url-opener",
    title: "URL Opener (Mac App)",
    description: "A powerful Mac utility that expands shortened web links and provides browser selection from the menu bar. Features include URL tracking parameter removal, automatic HTTPS upgrading, and support for multiple browsers including Safari, Chrome, Firefox, Opera, Brave, and Edge.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "AppKit", "URL Session", "macOS Development"]
  },
  {
    id: "notepad-sticky-notes",
    title: "Notepad + Sticky Notes (Mac App)",
    description: "Simple text editor. No formatting, no styles, no headaches. Supports .TXT, CSV, .XML and more! Jot down your thoughts quickly, and autosave the content! Customize the app's transparency according to your needs! See the other open windows underneath. Stick your notes on top of all windows! Seven colors to choose from, Notepad has never been more colorful! The counters update instantly as you type! No Loading Screens or lag, opens immediately.",
    image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "AppKit", "Text Editor", "Notes", "macOS Development"]
  },
  {
    id: "baps-vachnamruts",
    title: "BAPS Swaminarayan - Vachnamruts",
    description: "A comprehensive study app featuring 273 spiritual discourses with illuminating analogies, metaphors, and divine revelations. Includes easy-to-understand notes and explanations, making ancient wisdom accessible through modern technology.",
    image: "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core Text", "Core Data", "Search Kit"],
    appStoreLink: "https://apps.apple.com/in/app/vachanamrut-study-app/id482931473"
  },
  {
    id: "mirrar",
    title: "MirrAR",
    description: "An innovative AR application allowing users to virtually try on diamond rings. Features include different diamond shapes, ring customization, 3D viewing, and 360-degree rotation for a complete virtual try-on experience.",
    image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "ARKit", "SceneKit", "Metal"]
  },
  {
    id: "beams",
    title: "Beams-App",
    description: "An end-to-end innovation platform revolutionizing organizational development. Features AI-powered insights and predictions, transforming idea management into a comprehensive innovation 2.0 solution.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core ML", "Firebase", "Charts"],
    appStoreLink: "https://itunes.apple.com/ao/app/beams-app/id1277720316"
  },
  {
    id: "vybz",
    title: "VYBZ - Social Music Network",
    description: "A social music network connecting artists and music lovers. Features an in-app music editor for recording 60-second performance videos over instrumental tracks, fostering a community of musicians and fans sharing their musical journey.",
    image: "https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "AVFoundation", "Social Integration", "Core Audio"],
    appStoreLink: "https://appadvice.com/app/vybz-social-music-network/1001116565"
  },
  {
    id: "rayaku",
    title: "Rayaku",
    description: "A feature-rich communication platform enabling global connectivity. Users can easily message and call contacts worldwide, with cross-platform support ensuring seamless communication across different devices.",
    image: "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "CallKit", "Push Notifications", "Core Data"],
    appStoreLink: "https://itunes.apple.com/us/app/rayaku/id1364799087"
  },
  {
    id: "athlete-rocket",
    title: "Athlete Rocket",
    description: "An innovative video analysis platform connecting athletes with expert coaches worldwide. Athletes can submit performance videos for professional review and receive detailed feedback, creating a global coaching marketplace.",
    image: "https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "AVFoundation", "Core Video", "Firebase"],
    websiteLink: "http://athleterocket.com"
  },
  {
    id: "taskchat",
    title: "TaskChat",
    description: "A powerful team collaboration tool combining task management with real-time chat. Features include task assignment, deadline tracking, calendar integration, and smart task scheduling based on team availability and priority.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "Core Data", "Push Notifications", "Calendar Kit"],
    appStoreLink: "https://itunes.apple.com/us/app/taskchat/id1172739065?mt=8"
  },
  {
    id: "pva-trainer",
    title: "PVA Trainer",
    description: "A comprehensive fitness application providing custom and free workouts created by University educated professionals. Features include detailed workout instructions with pictures, videos, rep/set tracking, and built-in timers for seamless workout execution.",
    image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Swift", "AVKit", "HealthKit", "Core Data", "Firebase"],
    appStoreLink: "https://itunes.apple.com/us/app/pva-trainer/id1012641006?mt=8"
  }
];