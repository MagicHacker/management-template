<template>
  <div class="photo-wall-wrap">
    <img v-for="(item, index) in imageArr" :key="index" :src="item" class="photo-item" />
  </div>
</template>
<script>
export default {
  name: 'photoWall',
  data() {
    return {
      // TODO: 待优化
      imageArr: [
        require('../assets/images/Alps.jpg'),
        require('../assets/images/Avengers.jpg'),
        require('../assets/images/Bible.jpg'),
        require('../assets/images/Brand.jpg'),
        require('../assets/images/carb.jpg'),
        require('../assets/images/castle.jpg'),
        require('../assets/images/dinner.jpg'),
        require('../assets/images/dolphin.jpg'),
        require('../assets/images/dream.jpg'),
        require('../assets/images/dusk.jpg'),
        require('../assets/images/house.jpg'),
        require('../assets/images/Maldives.jpg'),
        require('../assets/images/Monaco.jpg'),
        require('../assets/images/Naruto.jpg'),
        require('../assets/images/Norway.jpg'),
        require('../assets/images/Phoenix.jpg'),
        require('../assets/images/Prague.jpg'),
        require('../assets/images/sky.jpg'),
        require('../assets/images/snow.jpg'),
        require('../assets/images/swing.jpg'),
        require('../assets/images/lake.jpg'),
      ],
    };
  },
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
    margin-bottom: 10px;
  }
}
</style>
