
export const englishLocale = {
  navbar: {
    "links": [
      {
        "href": "/",
        "label": "home"
      },
      {
        "href": "/works",
        "label": "works"
      },
      {
        "href": "/about-me",
        "label": "about-me"
      },
      {
        "href": "/contacts",
        "label": "contacts"
      }
    ]
  },
  homepage: {
    banner: {
      title: "Youssef Nesafe is a <br class='hidden desktop:block' /><span class='primary-text'>front-end developer</span>",
      description: "He crafts responsive websites where technologies meet creativity",
      button: {
        label: "Contact me!!",
        href: "/contacts"
      }
    },
    quote: {
      text: "All dreams are within reach. All you have to do is keep moving towards them.",
      name: "- Viola Davis"
    },
    projects: {
      header: {
        title: "projects",
        link: {
          label: 'view all',
          href: '/works'
        }
      },
      cards: [
        {
          image: {
            src: "/images/projects/project1.jpg",
            alt: "Project_1",
            width: 331,
            height: 201
          },
          technologies: "HTML, CSS, JavaScript, TDD",
          details: {
            projectName: "ChertNodes",
            description: "Minecraft servers hosting",
            buttons: [
              {
                label: "Live",
                href: "/"
              },
              {
                label: "Github",
                href: "/"
              }
            ]
          }
        },
        {
          image: {
            src: "/images/projects/project1.jpg",
            alt: "Project_1",
            width: 331,
            height: 201
          },
          technologies: "HTML, CSS, JavaScript",
          details: {
            projectName: "ChertNodes",
            description: "Minecraft servers hosting Minecraft servers hosting ",
            buttons: [
              {
                label: "Live",
                href: "/"
              },
              {
                label: "Github",
                href: "/"
              }
            ]
          }
        },
        {
          image: {
            src: "/images/projects/project1.jpg",
            alt: "Project_1",
            width: 331,
            height: 201
          },
          technologies: "HTML, CSS, JavaScript, TDD",
          details: {
            projectName: "ChertNodes",
            description: "Minecraft servers hosting",
            buttons: [
              {
                label: "Live",
                href: "/"
              },
              {
                label: "Github",
                href: "/"
              }
            ]
          }
        }
      ]
    },
    aboutMe: {
      header: {
        title: "about-me",
      },
      details: {
        text: "Hello, i’m Youssef! <br /> <br /> I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br /> <br /> Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.",
        link: {
          label: "Read more",
          href: "/about-me"
        }
      }
    }
  }
};