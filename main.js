var app = new Vue({
  el: '#root',

  data: {
    images: [
      'https://www.muralswallpaper.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain.jpg',
      'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/',
      'https://i.imgur.com/sjvtlq0.jpg',
      'https://images6.alphacoders.com/859/thumb-1920-859553.png'
    ],

    imageIndex: 0,
  },

  methods: {
    nextImg() {
      setInterval(() => {
        this.imageIndex += 1;

        if (this.imageIndex >= this.images.length) {
          this.imageIndex = 0
        }


      }, 2000)
    },

    prevImg() {
      this.imageIndex -= 1;

      if (this.imageIndex < 0) {
        this.imageIndex = this.images.length -1
      }
    },
    imgChange(index) {
      this.imageIndex = index;
    }
  },

  created() {
    this.nextImg()
  },
});
tempo = 0;

let time = setInterval(function(){
  tempo += 1;
  console.log(tempo);
  if (tempo === 5) {
    clearInterval(time)
    console.log('stop');

  }
}, 1000)

// var i = 0;
// var timer = setInterval(function() {
//   console.log(++i);
//   if (i === 5) clearInterval(timer);
//   console.log('post-interval'); //this will still run after clearing
// }, 1000);
