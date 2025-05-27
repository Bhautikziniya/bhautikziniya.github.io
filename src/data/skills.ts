interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      "Swift",
      "Objective-C",
      "SwiftUI",
      "Python",
      "TypeScript",
      "JavaScript",
      "HTML/CSS"
    ]
  },
  {
    category: "Frameworks & SDKs",
    icon: "Library",
    skills: [
      "UIKit",
      "Cocoa/Cocoa Touch",
      "AVFoundation",
      "Core Data",
      "ARKit",
      "Firebase",
      "Core Location",
      "MapKit",
      "Core ML",
      "Vision"
    ]
  },
  {
    category: "Tools & Others",
    icon: "Wrench",
    skills: [
      "Xcode",
      "Git/GitHub",
      "TestFlight",
      "Adobe XD",
      "Figma",
      "Agile/Scrum",
      "App Store Connect",
      "CocoaPods"
    ]
  }
];