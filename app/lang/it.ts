export default {
  downloadResume: "Scarica CV",
  experience: "Esperienza",
  education: "Educazione",
  personalProjects: "Progetti personali e Open Source",

  summary: `Full Stack Developer con esperienza nello sviluppo di applicazioni performanti e scalabili.<br />
  Mi piace affrontare nuove sfide, trovare soluzioni efficienti e migliorare costantemente i processi di sviluppo.<br />
  Lavoro con attenzione al dettaglio e mi impegno a creare prodotti intuitivi e di alta qualità. <br />
   Sono una persona proattiva, curiosa e orientata al miglioramento del mio lavoro e alla crescita dei progetti a cui partecipo.`,

  experienceEvents: {
    0: {
      time: "FEBBRAIO 2022 - LUGLIO 2024",
      description: [
        `- Sviluppo e manutenzione di applicazioni web utilizzando PHP, Laravel, MySQL, Vue e TypeScript.`,
        `- Implementazione di nuove feature, refactoring di codice, integrazione con servizi terzi e scrittura di test automatici.`,
        `- Gestione dell’infrastruttura e deploy su AWS, con utilizzo principale di Elastic Beanstalk, RDS e Laravel Vapor.`,
        `- Workflow gestito con Docker (DevContainer per sviluppo), Git/GitHub, GitHub Actions e Linux.`,
      ].join("\n"),
    },
    1: {
      time: "GIUGNO 2018 - FEBBRAIO 2022",
      description: [
        "- Creazione e manuntenzione di Single Page Applications e Landing Page orientate alla Lead Generation",
        `- Creazione di un toolkit/framework basato su Vue per la semplificazione dello sviluppo delle Landing Pages.
           Composto da una libreria di componenti custom, una libreria javascript e un template vue realizzato con vue-cli/vite.js`,
        `- Gestione del codice tramite Git e GitHub`,
        "- Formazione e gestione del team",
      ].join("\n"),
    },
  },

  projects: {
    vueInsane:
      "Un plugin Vue.js per la sanitizzazione di stringhe HTML chiamato vue-insane.",
    jsFactory:
      "Una libreria JavaScript per la generazione dinamica di dati fasulli (utile in fase di test).",
    openSourceTitle: "Ho anche contributo a due progetti open source:",
    vueShepherd: "Implementato il supporto per Vue 3.",
    bootstrapVueCliPlugin: "Aggiunto lo scaffolding per l'utilizzo con SCSS",
  },

  educationEvents: {
    0: {
      description: [
        "Gli argomenti studiati sono:",
        "",
        "- Fondamenti di Informatica",
        "- Sistemi e Reti",
        "- Object oriented programming",
        "- Web programming",
      ].join("\n"),
    },
  },
};
