export const cloudName = "dhd1eov8v";

export const data = {
  about: {
    image: "IMG_2509_a23chj",
    bold: "Hello, I'm Sarah...",
    text: "I am a full stack web developer and react/redux enthusiast.  I specialize in creating dynamic web sites clients can easily edit on their own without having to compromise their site's performance or security.  When I am not coding over coffee, I love spending my free time outside--hiking and rock climbing."
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
        info: "This web site provides a space for the clients to post their research progress.  The web site allows for easy image and pdf upload through drag and drop. While react drag and drop is not available in Safari and IE, the clients and I opted to use the more user friendly drag and drop since the clients would be the only users editing content.",
        disclaimer: "The prototype listed below demonstrates the client’s editing capabilities. Please be courteous while editing."
      },
      {
        url: {
          final: "https://angular2recipebox.herokuapp.com/",
          github: "https://github.com/sarahheacock/Angular2RecipeBox",
        },
        title: "Recipe Box (In Progress)",
        image: "Screen_Shot_2017-10-30_at_5.06.11_PM_p99imw",
        info: "This web app creates a recipe box from http://orangette.net/. Users are then able to sign in securely through gmail or facebook in order to add their own recipes and create their own shopping list.",
        disclaimer: "Recipes are created by and owned by http://orangette.net/."
      },
      {
        url: {
          final: "https://sarahbedbreakfast.herokuapp.com/",
          github: "https://github.com/sarahheacock/sarahbedbreakfast"
        },
        title: "Bed & Breakfast",
        image: "Screen_Shot_2017-09-23_at_10.19.29_AM_p8kp3m",
        info: "This web site is not for a particular client but provides small bed & breakfast establishments a space to create a customizable web site to fit their booking needs. Clients can login through email or facebook to select and book their own reservations. Admin can also book reservations, cancel reservations, and charge clients using the web site. This web site is an example so feel free to book as many fake reservations as you like. If you would rather use a fake credit card number, 5555555555554444 with 555 security code will work.",
        disclaimer: "Due to the sensitivity of information, I did not create an admin prototype for this web site. If you would like to check out the admin features, contact me below and I can create a temporary password for you."
      },
      {
        url: {
          final: "https://pattys-pet-pals.herokuapp.com",
          prototype: "https://polar-coast-33051.herokuapp.com/",
          github: "https://github.com/sarahheacock/pattys-pets-pals",
        },
        title: "Patty's Pets",
        image: "Screen_Shot_2017-08-11_at_10.10.04_AM_ohxdqd.png",
        info: "This web site for the client (a new business owner) to change her content and rates as needed. The messaging system connects to her slack account to allow her to receive messages safely and easily.",
        disclaimer: "The prototype listed below demonstrates the client’s editing capabilities. Please be courteous while editing."
      }
    ]
  },
  contact: {
    bold: "Want to get in touch?",
    text: ["Whether you have any questions about my work, would like to see my resume, have some feedback for me, or just want to chat about rock climbing--I would love to hear from you!", "I will respond A.S.A.P." ,"" ,"Note: No spam/soliciting, please."]
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
// export const windowOffset = () => Math.floor(window.pageYOffset ||
//   document.documentElement.scrollTop ||
//   document.body.scrollTop); //scrolled vertically from upper left
//
// export const windowInnerHeight = () => Math.floor(window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight); //height of window content
//
// export const scrollHeight = () => Math.floor(document.body.scrollHeight ||
//   document.body.clientHeight); //entire height (not including scrollbar)
//
// export const contentHeight = () => {
//   const main = document.getElementById('main');
//   return (main) ? Math.floor(main["scrollHeight"] || main["clientHeight"]) : 0;
// };
