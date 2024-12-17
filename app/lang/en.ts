export default {
  downloadResume: 'Download Resume',
  experience: 'Experience',
  education: 'Education',
  personalProjects: 'Personal Projects & Open Source Projects',

  summary: `Experienced Web Developer with a strong passion for creating high-quality websites and web applications.

Over five years of proven expertise in developing reliable and scalable digital solutions, consistently adhering to modern standards and best practices.

Committed to delivering top-notch user experiences and driving project success through innovative web development.`,

  experienceEvents: {
    0: {
      time: 'FEBRUARY 2022 - JULY 2024',
      description: `Developing new projects and maintaining already created projects with Vue on the frontend and Laravel and MySql on the backend. <br>
     Used AWS, AWS Amplify and Laravel Vapor for deployments on new projects; AWS Elastic Beanstalk for the older ones.`

    },
    1: {
      time: 'JUNE 2018 - JANUARY 2022',
      description: [
        '- Creating and maintaining Single Page Applications and Landing Pages aimed at lead generation',
        '- Create a toolkit based on Vue to reduce the landing page\'s development time which consists of a custom landing pages components, a js core library to handle common features and vue-cli/vite vue template projects',
        '- Training and management of the development team'
      ].join('\n')
    }
  },

  projects: {
    vueInsane: 'A vue plugin to sanitize HTML strings called vue-insane.',
    jsFactory: 'A Javascript library to help to generate dynamic fake data.',
    openSourceTitle: 'I also have contributed to two open source projects:',
    vueSheppherd: 'Help to support vue 3 projects.',
    bootstrapVueCliPlugin: ' Add feature to support SCSS setup scaffolding'
  },

  educationEvents: {
    0: {
      description: [
        'The topics addressed are:',
        '',
        '- Foundations of Informatics',
        '- Systems and Networks',
        '- Object oriented programming',
        '- Web programming'
      ].join('\n')
    }
  }

}
