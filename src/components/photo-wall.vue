<template>
  <div class="photo-wall-wrap">
    <div class="photo-item" v-for="(item, index) in imageArr" :key="index">
      <img :src="item.src" />
    </div>
  </div>
</template>
<script>
export default {
  name: "photoWall",
  data() {
    return {
      imageArr: [
        {
          src: "/public/images/Alps.jpg"
        },
        {
          src: "/public/images/Avengers.jpg"
        },
        {
          src: "/public/images/Bible.jpg"
        },
        {
          src: "/public/images/Brand.jpg"
        },
        {
          src: "/public/images/carb.jpg"
        },
        {
          src: "/public/images/castle.jpg"
        },
        {
          src: "/public/images/dinner.jpg"
        },
        {
          src: "/public/images/dolphin.jpg"
        },
        {
          src: "/public/images/dream.jpg"
        },
        {
          src: "/public/images/dusk.jpg"
        },
        {
          src: "/public/images/house.jpg"
        },
        {
          src: "/public/images/Maldives.jpg"
        },
        {
          src: "/public/images/Monaco.jpg"
        },
        {
          src: "/public/images/Naruto.jpg"
        },
        {
          src: "/public/images/Norway.jpg"
        },
        {
          src: "/public/images/Phoenix.jpg"
        },
        {
          src: "/public/images/Prague.jpg"
        },
        {
          src: "/public/images/sky.jpg"
        },
        {
          src: "/public/images/snow.jpg"
        },
        {
          src: "/public/images/swing.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.photo-wall-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .photo-item {
    width: 220px;
    height: 170px;
  }
}
</style>
