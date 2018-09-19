<template>
    <div id="nodata">
        <div class="imgBox">
            <img src="../assets/images/nodata.png" alt="">
        </div>
        <p>抱歉！当前暂无数据</p>
    </div>
</template>

<style lang="scss" scoped>
#nodata {
  width: 100%;
  // height: 200px;
  //   line-height: 200px;
  text-align: center;
  background-color: #fff;

  .imgBox {
    text-align: center;

    img {
      width: 40%;
      margin-top: 40px;
    }
  }
  p {
    font-size: 14px;
    padding: 20px 0;
  }
}
</style>

