interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Senior Software Engineer (iOS)",
    company: "HiddenBrains InfoTech Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "June 2019 - Present",
    description: [
      "Managing project dependencies using Cocoapods and Swift Package Manager across 15 iOS projects, ensuring smooth integration resulting reduction in build times by 20%",
      "Refining the API calling structure by migrating from the traditional completion handler to using async/await operations using URLSession, resulting 70% reduction in app loading time",
      "Implementing Bluetooth printer for seamless receipt printing post-sales transactions",
      "Attaining a 20% reduction in crash rates by managing strong reference cycles & ARC",
      "Scripting Firebase Cloud Functions to trigger push notifications whenever users receive new messages in the Firebase RealTime Database for seamless real-time communication",
      "Guiding a team of 5+ members, performing code refactoring, overseeing efficient deployments, conducting rigorous code reviews, and reducing code complexity",
      "Utilized High Charts for data visualization, improving the presentation analytics within the app",
      "Integrated Rave Payment API to provide secure and efficient payment functionalities"
    ],
    achievements: [
      "Achieved a notable 40% reduction in manual workload and decreased the chances of error by 20% by implementing separate Schemas & Targets, eliminating the necessity for manual certificate and resource adjustments specific to the app, for each deployment process"
    ],
    skills: ["Swift", "Cocoapods", "URLSession", "Firebase", "High Charts", "Rave Payment API", "Code Review", "Team Leadership"]
  },
  {
    id: "exp2",
    title: "Sr. iOS Developer",
    company: "Magnatesage Technologies Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Feb 2018 - June 2019",
    description: [
      "Pioneered the integration of augmented reality (AR) by taking advantage of the ARKit framework for seamless virtual content integration and enhancing user experience",
      "Executed view modularization in iOS Swift development, reducing code duplication by 25% and boosting efficiency by 30%, while enhancing codebase modularity and maintainability",
      "Conducted training sessions on optimal coding practices, resulting in a 20% increase in team productivity, fostering efficient and collaborative development environment",
      "Managed version control using SourceTree, GitHub, and Git, successfully handling over 500 merge requests and resolving 200+ conflicts, including complex storyboard conflicts"
    ],
    skills: ["ARKit", "Swift", "Git", "SourceTree", "GitHub", "Training", "Code Modularization"]
  },
  {
    id: "exp3",
    title: "iOS Developer",
    company: "Agile Infoways Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Nov 2015 - Jan 2018",
    description: [
      "Led a team in transitioning from Objective-C to Swift and Auto Layout across all major modules, reducing codebase complexity by 40% and improving app performance by 25%, resulting in improved scalability and manageability",
      "Utilized the AVFoundation framework to craft a multifaceted video recording, video notes, text overlay, and drawing capabilities, enhancing user experience and engagement",
      "Crafted 2+ cross-platform applications using Xamarin, ensuring consistent performance and user experience across all Apple devices, while optimizing code reuse and minimizing platform-specific maintenance overhead",
      "Implemented MVC and MVVM architectural patterns, streamlining the codebase by 30% and boosting development efficiency by 25%"
    ],
    skills: ["Swift", "Objective-C", "Auto Layout", "AVFoundation", "Xamarin", "MVC", "MVVM"]
  },
  {
    id: "exp4",
    title: "iOS Developer",
    company: "GreyCell Labs Inc.",
    location: "Ahmedabad, India",
    period: "Apr 2015 - Nov 2015",
    description: [
      "Gained proficiency in Swift and modern iOS development methodologies within 3 months, rapidly adapting to new frameworks, tools, and best practices to contribute effectively to production-level projects"
    ],
    skills: ["Swift", "iOS Development", "Mobile Development"]
  }
];