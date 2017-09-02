export const cloudName = "dhd1eov8v";

export const data = {
  about: {
    image: "https://res.cloudinary.com/dhd1eov8v/image/upload/v1477872000/IMG_2509_a23chj.jpg",
    bold: "Hello, I'm Sarah...",
    text: "I am a full stack web developer and react/redux enthusiast.  I specialize in creating dynamic web sites clients can easily edit without having to compromise performance or security.  I love spending my free time outside--hiking and rock climbing."
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
          about: "Pork belly you probably haven't heard of them coloring book kitsch. Ennui vape pok pok cardigan. Bushwick hot chicken food truck waistcoat, art party thundercats offal poutine venmo typewriter vexillologist.",
          front: "Truffaut raw denim +1 keffiyeh roof party sustainable whatever 90's, polaroid palo santo flannel. Copper mug vexillologist palo santo taxidermy. Neutra tbh keytar, tote bag godard roof party iceland sartorial ugh. Cornhole DIY poutine sriracha deep v snackwave master cleanse waistcoat hexagon kombucha keytar craft beer pour-over.",
          back: "Blog williamsburg live-edge crucifix. Ramps chartreuse kombucha single-origin coffee. La croix salvia vape XOXO leggings before they sold out iceland jean shorts plaid. Ethical enamel pin before they sold out, intelligentsia gentrify aesthetic beard tote bag readymade williamsburg sriracha messenger bag. Heirloom asymmetrical chartreuse kogi gluten-free, mumblecore mlkshk readymade."
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
          about: "Pork belly you probably haven't heard of them coloring book kitsch. Ennui vape pok pok cardigan. Bushwick hot chicken food truck waistcoat, art party thundercats offal poutine venmo typewriter vexillologist.",
          front: "Truffaut raw denim +1 keffiyeh roof party sustainable whatever 90's, polaroid palo santo flannel. Copper mug vexillologist palo santo taxidermy. Neutra tbh keytar, tote bag godard roof party iceland sartorial ugh. Cornhole DIY poutine sriracha deep v snackwave master cleanse waistcoat hexagon kombucha keytar craft beer pour-over.",
          back: "Blog williamsburg live-edge crucifix. Ramps chartreuse kombucha single-origin coffee. La croix salvia vape XOXO leggings before they sold out iceland jean shorts plaid. Ethical enamel pin before they sold out, intelligentsia gentrify aesthetic beard tote bag readymade williamsburg sriracha messenger bag. Heirloom asymmetrical chartreuse kogi gluten-free, mumblecore mlkshk readymade."
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
    text: ["Whether you have any questions about my work, or have some feedback for me--I would love to hear from you!", "I will respond A.S.A.P." ,"" ,"Note: No spam/soliciting, please."]
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
