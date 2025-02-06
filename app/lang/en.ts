export default {
  downloadResume: "Download Resume",
  experience: "Experience",
  education: "Education",
  personalProjects: "Personal Projects & Open Source Projects",

  summary: `Experienced Web Developer with a strong passion for creating high-quality websites and web applications.

Over five years of proven expertise in developing reliable and scalable digital solutions, consistently adhering to modern standards and best practices.

Committed to delivering top-notch user experiences and driving project success through innovative web development.`,

  experienceEvents: {
    0: {
      time: "FEBRUARY 2022 - JULY 2024",
      description: [
        `- Development and maintenance of web applications using PHP, Laravel, MySQL, Vue, and TypeScript.`,
        `- Implementation of new features, code refactoring, integration with third-party services, and writing automated tests.`,
        `- Management of infrastructure and deployment on AWS, primarily using Elastic Beanstalk, RDS, and Laravel Vapor.`,
        `- Workflow managed with Docker (DevContainer for development), Git/GitHub, CI/CD, and Linux.`,
      ].join("\n"),
    },
    1: {
      time: "JUNE 2018 - JANUARY 2022",
      description: [
        "- Creating and maintaining Single Page Applications and Landing Pages aimed at lead generation",
        "- Create a toolkit based on Vue to reduce the landing page's development time which consists of a custom landing pages components, a js core library to handle common features and vue-cli/vite vue template projects",
        "- Training and management of the development team",
      ].join("\n"),
    },
  },

  projects: {
    vueInsane: "A vue plugin to sanitize HTML strings called vue-insane.",
    jsFactory: "A Javascript library to help to generate dynamic fake data.",
    openSourceTitle: "I also have contributed to two open source projects:",
    vueShepherd: "Help to support vue 3 projects.",
    bootstrapVueCliPlugin: " Add feature to support SCSS setup scaffolding",
  },

  educationEvents: {
    0: {
      description: [
        "The topics addressed are:",
        "",
        "- Foundations of Informatics",
        "- Systems and Networks",
        "- Object oriented programming",
        "- Web programming",
      ].join("\n"),
    },
  },
};
