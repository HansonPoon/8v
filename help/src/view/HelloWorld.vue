<template>
    <div id="home">
        <div id="cal">
            <h3 align='center'>px换算rem表</h3>

            <div class="iptBox">
                <label for="">最小px：</label>
                <input v-model="min_px" type="text">
            </div>
            <div class="iptBox">
                <label for="">最大px：</label>
                <input v-model="max_px" type="text">
            </div>
            <div class="iptBox">
                <label for="">html元素字体大小（px）：</label>
                <input v-model="html_px" type="text">
                <button @click="cal" type="button">确认</button>
            </div>
            <table width='600px' border="1" cellpadding='8' cellspacing='5'>
                <thead>
                    <tr>
                        <th>像素(px)</th>
                        <th>对应rem</th>
                        <th>html字体大小</th>
                    </tr>
                </thead>
                <tbody align='center'>
                    <tr v-for="(item,idx) in list" :key="idx">
                        <td>{{item.px}}px</td>
                        <td>{{item.rem}}rem</td>
                        <td>{{item.html}}px</td>
                    </tr>
                </tbody>

            </table>
        </div>
        <div id="font">
          <p class='p1'>这是像素px</p>
          <p class="p2">这是rem</p>
        </div>

        <br>
        <router-link :to="{'path':'/news'}">跳转</router-link>
    </div>
</template>
<script>
export default {
  data() {
    return {
      min_px: "",
      max_px: "",
      html_px: "",
      list: []
    };
  },
  methods: {
    cal() {
      if (this.html_px !== "") {
        this.list = [];
        for (let i = this.min_px; i < Number(this.max_px) + 1; i++) {
          this.list.push({
            px: i,
            rem: (i / Number(this.html_px)).toFixed(2),
            html: this.html_px
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
}
.iptBox {
  padding: 3px;
}
#cal {
  table {
    margin-top: 20px;
  }
  thead tr {
    background: rgba(46, 43, 43, 0.342);
  }
  tbody tr:nth-child(odd) {
    background: rgba(160, 36, 36, 0.397);
  }
  tbody tr:nth-child(even) {
    background: rgba(23, 138, 28, 0.301);
  }
}
#font{

.p1{
  font-size: 28px;
}
.p2{
  font-size: 2rem;
}
}
</style>


