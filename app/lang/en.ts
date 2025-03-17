export default {
  downloadResume: "Download Resume",
  experience: "Experience",
  education: "Education",
  personalProjects: "Personal Projects & Open Source Projects",

  summary: `Full Stack Developer with experience in building high-performance and scalable applications. <br />
  I enjoy tackling new challenges, finding efficient solutions, and continuously improving development processes. <br /> 
  I work with great attention to detail and strive to create intuitive, high-quality products. <br />
  I am proactive, curious, and always focused on improving my work and contributing to the growth of the projects I take part in`,

  experienceEvents: {
    0: {
      time: "FEBRUARY 2022 - JULY 2024",
      description: [
        `- Development and maintenance of web applications using PHP, Laravel, MySQL, Vue, and TypeScript.`,
        `- Implementation of new features, code refactoring, integration with third-party services, and writing automated tests.`,
        `- Management of infrastructure and deployment on AWS, primarily using Elastic Beanstalk, RDS, and Laravel Vapor.`,
        `- Workflow managed with Docker (DevContainer for development), Git/GitHub, GitHub Actions, and Linux.`,
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
