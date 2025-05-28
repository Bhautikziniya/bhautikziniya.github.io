interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string[];
}

export const educationData: Education[] = [
  {
    id: "edu1",
    degree: "Master of Computer Application (MCA)",
    institution: "Gujarat Technological University",
    location: "Ahmedabad, India",
    period: "Mar 2012 - Apr 2015",
    description: [
      "Specialized in Computer Science and Applications",
      "Focused on software development and system design"
    ]
  },
  {
    id: "edu2",
    degree: "Computer Science",
    institution: "Laurentian University/Université Laurentienne",
    location: "Ontario, Canada",
    period: "June 2014 - Jul 2014",
    description: [
      "International exchange program",
      "Advanced studies in computer science"
    ]
  }
]; 