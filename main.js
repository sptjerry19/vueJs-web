// const app = Vue.createApp({
//   data() {
//     return {
//       message: "hello work",
//       count: 0,
//     };
//   },
//   methods: {
//     eventInput: function (event) {
//       //   alert("Hello" + this.message);
//       console.log(event);
//       this.message = "event....";
//     },
//   },
// });

// app.mount("#app");

const products = Vue.createApp({
  data() {
    return {
      message: "AsgasgasGA",
      manyFoods: [
        {
          name: "Burrito",
          url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372040179_880974800255856_5639884076745247136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=dVLS_B831d0AX-72o0l&_nc_ht=scontent.fhph1-2.fna&oh=00_AfCamGH7rUl8jQMQABbAGX7qqzEM2VJijseF0f9gOh6J_Q&oe=64FA044B",
        },
        {
          name: "Salad",
          url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/371951142_879839163702753_2903337041590895067_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=9tZl5dDcOIEAX_D25a6&_nc_oc=AQnGfzThyi2WUaZ4OJ_kiM9dzsEHImWICy1NNek3qh2jwu5M8PiZRz6ywdKKCVL3Fyg&_nc_ht=scontent.fhph1-2.fna&oh=00_AfAus6ca6hEO8DLfhRgdX_1Kdto_-9KP3JMHNRw0aUBihQ&oe=64F9AF1D",
        },
        {
          name: "Cake",
          url: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/372014468_878716753814994_3325690803628466197_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=AN8633gdvs4AX-uU1PF&_nc_ht=scontent.fhph2-1.fna&oh=00_AfAmmYFqhifyd_ZpTYCOS85DPc4L834u-CMXsql4Tg_ClQ&oe=64F90B00",
        },
        {
          name: "Soup",
          url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372919388_878531163833553_7407989410135178329_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=yMvg-aAyHEgAX9dsJcm&_nc_ht=scontent.fhph1-2.fna&oh=00_AfDR6h9wvRDK6L92KTdEFHsFHLdXHVD1oY42f7lyDvQjNw&oe=64F96224",
        },
        {
          name: "Fish",
          url: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/369650612_877984493888220_8481154548386717373_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=2ifTY7zuY30AX_t7yFa&_nc_ht=scontent.fhph2-1.fna&oh=00_AfCG10h7I7LqSFyv5zdg4958PUm8jVrCdXen-TBrw6nRIA&oe=64F9DC7C",
        },
        {
          name: "Pizza",
          url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372040179_880974800255856_5639884076745247136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=dVLS_B831d0AX-72o0l&_nc_ht=scontent.fhph1-2.fna&oh=00_AfCamGH7rUl8jQMQABbAGX7qqzEM2VJijseF0f9gOh6J_Q&oe=64FA044B",
        },
        {
          name: "Rice",
          url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372040179_880974800255856_5639884076745247136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=dVLS_B831d0AX-72o0l&_nc_ht=scontent.fhph1-2.fna&oh=00_AfCamGH7rUl8jQMQABbAGX7qqzEM2VJijseF0f9gOh6J_Q&oe=64FA044B",
        },
        // {
        //   name: "Burrito",
        //   url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372040179_880974800255856_5639884076745247136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=dVLS_B831d0AX-72o0l&_nc_ht=scontent.fhph1-2.fna&oh=00_AfCamGH7rUl8jQMQABbAGX7qqzEM2VJijseF0f9gOh6J_Q&oe=64FA044B",
        // },
        // {
        //   name: "Salad",
        //   url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/371951142_879839163702753_2903337041590895067_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=9tZl5dDcOIEAX_D25a6&_nc_oc=AQnGfzThyi2WUaZ4OJ_kiM9dzsEHImWICy1NNek3qh2jwu5M8PiZRz6ywdKKCVL3Fyg&_nc_ht=scontent.fhph1-2.fna&oh=00_AfAus6ca6hEO8DLfhRgdX_1Kdto_-9KP3JMHNRw0aUBihQ&oe=64F9AF1D",
        // },
        // {
        //   name: "Cake",
        //   url: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/372014468_878716753814994_3325690803628466197_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=AN8633gdvs4AX-uU1PF&_nc_ht=scontent.fhph2-1.fna&oh=00_AfAmmYFqhifyd_ZpTYCOS85DPc4L834u-CMXsql4Tg_ClQ&oe=64F90B00",
        // },
        // {
        //   name: "Soup",
        //   url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372919388_878531163833553_7407989410135178329_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=yMvg-aAyHEgAX9dsJcm&_nc_ht=scontent.fhph1-2.fna&oh=00_AfDR6h9wvRDK6L92KTdEFHsFHLdXHVD1oY42f7lyDvQjNw&oe=64F96224",
        // },
        // {
        //   name: "Fish",
        //   url: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/369650612_877984493888220_8481154548386717373_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=2ifTY7zuY30AX_t7yFa&_nc_ht=scontent.fhph2-1.fna&oh=00_AfCG10h7I7LqSFyv5zdg4958PUm8jVrCdXen-TBrw6nRIA&oe=64F9DC7C",
        // },
        // {
        //   name: "Pizza",
        //   url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372040179_880974800255856_5639884076745247136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=dVLS_B831d0AX-72o0l&_nc_ht=scontent.fhph1-2.fna&oh=00_AfCamGH7rUl8jQMQABbAGX7qqzEM2VJijseF0f9gOh6J_Q&oe=64FA044B",
        // },
        // {
        //   name: "Rice",
        //   url: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/372040179_880974800255856_5639884076745247136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=dVLS_B831d0AX-72o0l&_nc_ht=scontent.fhph1-2.fna&oh=00_AfCamGH7rUl8jQMQABbAGX7qqzEM2VJijseF0f9gOh6J_Q&oe=64FA044B",
        // },
      ],
      isActive: true,
    };
  },
  methods: {
    inputText: function (event) {
      this.message = event.target.value;
    },
    mouseOverEvent: function (event) {
      console.log(event);
      this.isActive = !this.isActive;
    },
  },
  template: `
  
  <input type="text" @input="inputText" placeholder="start writing...." />
  <h2>{{message}}</h2>
  
  <div class="manyFoods_class">
    <figure class="manyFoods_class_figure" v-for="food in manyFoods" @mouseover="mouseOverEvent(this)" :class="{active: isActive}">
      <img class="image_infor_Foods" :src="food.url" alt="image" />
      <figcaption>{{food.name}}</figcaption>
    </figure>
  </div>

  `,
}).mount("#products");
