import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    about_page: {
      sections: [
        {
          id: "about",
          text:
            "<h1 class='title'>Hi! I'm Sara.</h1><br/><h2 class='subtitle'>I am a graphic designer and front-end web developer based in Brooklyn, NY. I have several years of experience both working full-time at agencies as well as freelancing. A PDF portfolio and CV are available upon request.</h2>",
          image: ""
        }
      ]
    },
    work_page: {
      projects: [
        {
          id: 0,
          text: "WE ARE UNICORN",
          url: "we-are-unicorn",
          tags: ["all", "design"],
          subheader: "Campaign Event Branding",
          type: "student",
          description:
            "Developed branding for a campaign encouraging developers and designers to collaborate and expand their skillsets across the boundary between the fields.",
          numImages: 5,
          classes: "is-6 is-shady"
        },
        {
          id: 1,
          text: "NOUVEAU FRISSONS",
          url: "nouveau-frissons",
          tags: ["all", "design"],
          subheader: "Music Festival Branding",
          type: "student",
          description:
            "Developed the visual identity for a music festival in Portmerion. Focused on the use of illusions and complexity along with vibrant colors to invoke curiosity.",
          numImages: 4,
          classes: "is-6 is-shady"
        },
        {
          id: 2,
          text: "SLY FOX",
          url: "sly-fox",
          tags: ["all", "design"],
          subheader: "Startup Identity Branding",
          type: "student",
          description:
            "Developed a slick, quirky and fun identity for an online shaving kit sold directly to consumers through its website and a reputable LA barbershop.",
          numImages: 6,
          classes: "is-6 is-shady"
        },
        {
          id: 3,
          text: "KID A",
          url: "kid-a",
          tags: ["all", "design"],
          subheader: "Handmade Album Design",
          type: "student",
          description:
            "Redesigned the cover for the Radiohead album titled Kid A. Utilized the technique of anamorphosis to create the letterforms out of separate pieces of wood.",
          numImages: 4,
          classes: "is-6 is-shady"
        },
        // {
        //   id: 4,
        //   text: 'PLATFORM X',
        //   url: 'platform-x',
        //   tags: ['all', 'development'],
        //   subheader: 'Microsite Development',
        //   type: 'client',
        //   description: 'Utilized Vue.js to develop a microsite for Furthermore of Equinox. Website design provided by Furthermore.',
        //   link: 'https://furthermore.equinox.com/platformx#/',
        //   numImages: 2,
        //   classes: 'is-6 is-shady'
        // },
        {
          id: 4,
          text: "CONDITIONAL FORM",
          url: "conditional-form",
          tags: ["all", "development"],
          subheader: "Conditional Form Development",
          type: "client",
          description: "awef wef wef wf wef wefwe fawefawe fpawef",
          link: "https://github.com/sara-huser",
          classes: "is-6 is-shady"
        }
      ]
    },
    contact_page: {
      sections: [
        {
          id: "contact",
          text:
            "<div class='contact'><div>Thanks for stopping by! Let's keep in touch.</div>",
          icons: [
            {
              name: "email",
              url: "mailto:sara.huser@gmail.com"
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/in/sara-huser-a9a89648"
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/sara_huser/"
            },
            {
              name: "github",
              url: "https://github.com/sara-huser"
            },
            // {
            //   name: 'behance',
            //   url: ''
            // },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/huser0280/"
            }
            // {
            //   name: 'codepen',
            //   url: ''
            // }
          ]
        }
      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    getProjectByUrl: state => url => {
      return state.work_page.projects.find(project => project.url === url);
    }
  }
});
