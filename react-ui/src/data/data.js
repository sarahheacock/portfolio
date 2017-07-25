export const data = {
  about: {
    image: "https://res.cloudinary.com/dhd1eov8v/image/upload/v1477872000/IMG_2509_a23chj.jpg",
    bold: "Oh. You need a little dummy text for your mockup? How quaint.",
    text: "Pork belly you probably haven't heard of them coloring book kitsch. Ennui vape pok pok cardigan. Bushwick hot chicken food truck waistcoat, art party thundercats offal poutine venmo typewriter vexillologist. Truffaut raw denim +1 keffiyeh roof party sustainable whatever 90's, polaroid palo santo flannel. Copper mug vexillologist palo santo taxidermy. Neutra tbh keytar, tote bag godard roof party iceland sartorial ugh. Cornhole DIY poutine sriracha deep v snackwave master cleanse waistcoat hexagon kombucha keytar craft beer pour-over. Blog williamsburg live-edge crucifix. Ramps chartreuse kombucha single-origin coffee. La croix salvia vape XOXO leggings before they sold out iceland jean shorts plaid. Ethical enamel pin before they sold out, intelligentsia gentrify aesthetic beard tote bag readymade williamsburg sriracha messenger bag. Heirloom asymmetrical chartreuse kogi gluten-free, mumblecore mlkshk readymade."
  },
  projects: {
    portfolio: [
      {
        url: "#",
        image: "https://images.pexels.com/photos/406972/pexels-photo-406972.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      },
      {
        url: "#",
        image: "https://images.pexels.com/photos/406972/pexels-photo-406972.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      },
      {
        url: "#",
        image: "https://images.pexels.com/photos/406972/pexels-photo-406972.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      }
    ]
  },
  contact: {
    bold: "Oh. You need a little dummy text for your mockup? How quaint.",
    text: "Pork belly you probably haven't heard of them coloring book kitsch. Ennui vape pok pok cardigan. Bushwick hot chicken food truck waistcoat, art party thundercats offal poutine venmo typewriter vexillologist. Truffaut raw denim +1 keffiyeh roof party sustainable whatever 90's, polaroid palo santo flannel. Copper mug vexillologist palo santo taxidermy. Neutra tbh keytar, tote bag godard roof party iceland sartorial ugh. Cornhole DIY poutine sriracha deep v snackwave master cleanse waistcoat hexagon kombucha keytar craft beer pour-over. Blog williamsburg live-edge crucifix. Ramps chartreuse kombucha single-origin coffee. La croix salvia vape XOXO leggings before they sold out iceland jean shorts plaid. Ethical enamel pin before they sold out, intelligentsia gentrify aesthetic beard tote bag readymade williamsburg sriracha messenger bag. Heirloom asymmetrical chartreuse kogi gluten-free, mumblecore mlkshk readymade."
  }
}

export const buffer = 10;

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
