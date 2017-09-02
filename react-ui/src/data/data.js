export const cloudName = "dhd1eov8v";

export const data = {
  about: {
    image: "https://res.cloudinary.com/dhd1eov8v/image/upload/v1477872000/IMG_2509_a23chj.jpg",
    bold: "Hello, I'm Sarah...",
    text: "I am a full stack web developer and react/redux enthusiast.  I specialize in creating dynamic web sites clients can easily edit on their own without having to compromise their site's performance or security.  I love spending my free time outside--hiking and rock climbing."
  },
  projects: {
    portfolio: [
      {
        url: {
          final: "https://www.pediatricbalancescale.com/",
          prototype: "https://young-ocean-23070.herokuapp.com/",
          github: "https://github.com/sarahheacock/pt-balance",
        },
        title: "Pediatric Balance Scale",
        image: "Screen_Shot_2017-08-14_at_3.16.09_PM_ejjfar",
        info: {
          about: "This web site provides a space for the clients to post their research progress.  The web site allows for easy image and pdf upload through drag and drop. While react drag and drop is not available in Safari and IE, the clients and I opted to use the more user friendly drag and drop since the clients would be the only users editing content. The prototype listed below shows the client’s editing capabilities. Please be courteous when editing the prototype's content. ",
          front: "The front-end is built with react, redux, and react-router. The most central react state is the edit state. Changes to the edit state are focused on a more functional approach. When an edit button is clicked, that section’s content is copied into the edit state. If the client decides to click ‘Edit Content’, the state replaces the content in the data base and the edit state becomes an empty object again.",
          back: "The back-end is built with express and is connected to a mongo database. JSON web tokens are used to authenticate admin upon login.  After building Patty’s Pet Pals, I reconfigured most of the logic of this site to the back-end. While slightly less efficient, the code is more organized and testable. Routes are ordered such that api calls are answered first, followed by remaining static file calls, and finally followed by an error handler to catch any unknown routes. This allows for server-side and client-side rendering. I hope to further improve performance by upgrading to an isomorphic solution later."
        }
      },
      {
        url: {
          final: "https://pattys-pet-pals.herokuapp.com",
          prototype: "https://polar-coast-33051.herokuapp.com/",
          github: "https://github.com/sarahheacock/pattys-pets-pals",
        },
        title: "Patty's Pets",
        image: "Screen_Shot_2017-08-11_at_10.10.04_AM_ohxdqd.png",
        info: {
          about: "This web site for the client (a new business owner) to change her content and rates as needed. The messaging system connects to her slack account to allow her to receive messages safely and easily. The prototype listed below shows the client’s editing capabilities. Please be courteous when editing the prototype's content. ",
          front: "The front-end is built with react, redux, and react-router. The editing modal appears when the react’s edit state contains a copy of the content the client needs to edit. The edited copy is then uploaded to the mongo database when editing is complete and the object passes the back-end's middleware. ",
          back: "The back-end is built with express and is connected to a mongo database. JSON web tokens are used to authenticate admin upon login. Routes are ordered in the same catch all system as the Pediatric Balance Scale site. This allows for server-side and client-side rendering. I hope to further improve performance by upgrading to an isomorphic solution later."
        }
      },

      // {
      //   url: {
      //     final: "#",
      //     prototype: "#",
      //     github: "#",
      //   },
      //   title: "Bed and Breakfast",
      //   title2: "Coming Soon",
      //   image: "https://images.pexels.com/photos/406972/pexels-photo-406972.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
      //   info: {
      //     about: "Pork belly you probably haven't heard of them coloring book kitsch. Ennui vape pok pok cardigan. Bushwick hot chicken food truck waistcoat, art party thundercats offal poutine venmo typewriter vexillologist.",
      //     front: "Truffaut raw denim +1 keffiyeh roof party sustainable whatever 90's, polaroid palo santo flannel. Copper mug vexillologist palo santo taxidermy. Neutra tbh keytar, tote bag godard roof party iceland sartorial ugh. Cornhole DIY poutine sriracha deep v snackwave master cleanse waistcoat hexagon kombucha keytar craft beer pour-over.",
      //     back: "Blog williamsburg live-edge crucifix. Ramps chartreuse kombucha single-origin coffee. La croix salvia vape XOXO leggings before they sold out iceland jean shorts plaid. Ethical enamel pin before they sold out, intelligentsia gentrify aesthetic beard tote bag readymade williamsburg sriracha messenger bag. Heirloom asymmetrical chartreuse kogi gluten-free, mumblecore mlkshk readymade."
      //   }
      // }
    ]
  },
  contact: {
    bold: "Want to get in touch?",
    text: ["Whether you have any questions about my work, would like to see my resume, or have some feedback for me--I would love to hear from you!", "I will respond A.S.A.P." ,"" ,"Note: No spam/soliciting, please."]
  }
}

export const projectURL = {
  github: {
    icon: 'fa fa-github fa-lg',
    text: 'View Github Code'
  },
  prototype: {
    icon: 'fa fa-globe fa-lg',
    text: 'View Prototype'
  },
  final: {
    icon: 'fa fa-globe fa-lg',
    text: 'View Final Product'
  }
}

export const messageData = {
  name: {
    type: 'text',
    placeholder: 'Your Name',
    componentClass: 'input'
  },
  email: {
    type: 'email',
    placeholder: 'Email Address',
    componentClass: 'input'
  },
  phone: {
    type: 'text',
    placeholder: 'Phone Number',
    componentClass: 'input'
  },
  message: {
    type: 'text',
    placeholder: 'Message',
    componentClass: 'textarea'
  },
  error: ''

};

export const messageStatus = {
  error: 'Unable to send message',
  formError: '* Fill out required fields',
  success: 'Message Sent! I will get back to you as soon as possible.'
}

// export const url = 'https://hooks.slack.com/services/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';

export const links = {
  github: 'https://github.com/sarahheacock',
  fcc: 'https://www.freecodecamp.org/sarahheacock',
  linkedin: 'https://www.linkedin.com/in/sarah-heacock-ab8677126'
};

//these are functions so that they return updated dimensions when called
export const windowOffset = () => Math.floor(window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop); //scrolled vertically from upper left

export const windowInnerHeight = () => Math.floor(window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight); //height of window content

export const scrollHeight = () => Math.floor(document.body.scrollHeight ||
  document.body.clientHeight); //entire height (not including scrollbar)

export const contentHeight = () => {
  const main = document.getElementById('main');
  return (main) ? Math.floor(main["scrollHeight"] || main["clientHeight"]) : 0;
};
