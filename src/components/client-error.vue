<template>
  <div class="client-error-wrap">
    <div class="client-error-ghost">
      <div class="ghost-eye-left"></div>
      <div class="ghost-eye-right"></div>
    </div>
    <div class="client-error-text">
      <h2>404 not found</h2>
      <div>
        The page you are looking for is not here. Why don’t you try the
        <router-link to="/mainPage">homepage</router-link>?
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClientError"
};
</script>
<style lang="scss" scoped>
.client-error-wrap {
  width: 100%;
  height: 100%;
  background-color: #d5dde1;
  display: flex;
  justify-content: center;
  align-items: center;
  .client-error-ghost {
    width: 110px;
    height: 120px;
    padding-top: 10px;
    background-color: #fff;
    position: relative;
    border-radius: 70px 70px 0px 0px;
    margin-right: 30px;
    animation: ghost-float 3s alternate infinite ease-in-out;
    &:after {
      content: "";
      width: 100%;
      display: block;
      height: 15px;
      border-radius: 50%;
      position: absolute;
      bottom: -30px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.2);
      animation: shadow-fade 3s alternate infinite ease-in-out;
    }
    .ghost-eye-left {
      width: 16px;
      height: 16px;
      background-color: #000;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: 10px;
      margin-top: -5px;
    }
    .ghost-eye-right {
      width: 16px;
      height: 16px;
      background-color: #000;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -10px;
      margin-top: -5px;
    }
  }
  .client-error-text {
    width: 400px;
    color: #64707d;
    font-weight: 600;
    font-size: 20px;
    h2 {
      margin: 0px 0px 10px;
      font-weight: 700;
      font-size: 30px;
    }
  }
  @keyframes shadow-fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.3;
    }
  }
  @keyframes ghost-float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-15px);
    }
  }
}
</style>
