<template>
  <div id="app">
    <div class="centered">
      <h1>Hi, im maria</h1>
      <h1>{{ message }}</h1>
      <p>
        I am a versatile graphic designer and frontend programmer with a passion for creating
        stunning visual designs and crafting seamless user experiences. With a broad range of skills
        and expertise, I can help you bring your vision to life and create a powerful online
        presence for your brand.
      </p>
    </div>
    <div class="box">
      <textarea v-model="message" placeholder="You can greet me here."></textarea>
      <button @click="sayHi">Hi</button>
    </div>
    <br />
    <p>some skillset i have represented by logos</p>
    <p3>You can move it by pushing "left" or "right" to slide</p3>
    <div class="scroll-container">
      <div class="button-container">
        <button @click="changeDirection(-1)">Left</button>
        <button @click="changeDirection(1)">Right</button>
      </div>

      <div class="image-container">
        <img v-for="n in 28" :key="n" :src="`/components/Icon${n}.png`" alt="Icon" />
      </div>
    </div>
    <p>get to know some of my projects</p>
    <p>get to know some of my projects</p>
    <div class="grid-container">
      <div class="grid-item" v-for="(picture, index) in pictures" :key="index">
        <img :src="picture.src" :alt="picture.description" />
        <p>{{ picture.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollDirection: 1,
      message: 'Hi! Welcome!',
      pictures: [
        { src: '/components/Image1.webp', description: 'Picture 1' },
        { src: '/components/Image2.webp', description: 'Picture 2' },
        { src: '/components/Image3.webp', description: 'Picture 3' },
        { src: '/components/Image4.webp', description: 'Picture 4' }
      ]
    }
  },
  methods: {
    scroll(direction) {
      let container = this.$el.querySelector('.image-container')
      let scrollAmount = 0
      let slideTimer = setInterval(function () {
        container.scrollLeft += direction
        scrollAmount += Math.abs(direction)
        if (scrollAmount >= 100) {
          window.clearInterval(slideTimer)
        }
      }, 25)
    },
    startScroll() {
      let container = this.$el.querySelector('.image-container')
      this.scrollInterval = setInterval(() => {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += this.scrollDirection
        }
      }, 25)
    },
    changeDirection(direction) {
      this.scrollDirection = direction
    },
    sayHi() {
      this.message = 'Hi, ' + this.message
    }
  },

  mounted() {
    this.startScroll()
  }
}
</script>

<style scoped>
/* Add your existing styles here */
#app {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  margin-left: 10%;
  margin-right: 10%;
}

.centered {
  text-align: center;
}

.box {
  margin-top: 20px;
  /* width: 300px; */
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

textarea {
  width: 80%;
  height: 80%;
}

/* Add styles for the buttons */
button {
  background: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
}

button:hover {
  background: #cac8f1;
}

.scroll-container {
  position: relative;
  /* width: 100%;
  max-width: 100vw; */
  height: auto;
  overflow: hidden;
}
.image-container img {
  gap: 30%;
  height: 100%;
}

.image-container {
  margin-right: 3%;
  margin-left: 3%;
  display: flex;
  overflow-x: auto;
  gap: 3%;
  margin-block-end: 10%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  /* height: 100%; */
  /* width: 100%; */
  overflow: scroll;
  align-content: center;
}

.grid-item {
  width: 100%;

  overflow: hidden;
  text-align: center;
}

.grid-item img {
  width: 100%;
  height: auto;
}
</style>
