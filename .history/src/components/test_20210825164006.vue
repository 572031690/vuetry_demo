<template>
  <div class="box">
    <div class="box-center" @touchstart.native.prevent="touchstart">
      <div class="box-certer-select">
        <span @touchstart="touchstart()"> 时间：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      目前共排摸{{ industry }}家规上企业，实际用地面积{{ ground }}亩。

      <div class="box-certer-body" v-for="(item, index) in data" :key="index">
        <h2>{{ item.name }}</h2>
        <span> {{ getTipIndustry(item) }}/{{ item.data.length }}</span>
        {{ getCity }}

        <div class="box-certer-body-box">
          <div v-for="(industrys, i) in item.data" :key="i">
            <div>
              {{ industrys.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData();
  },
  computed: {
    getCity() {
      return 0;
    }
  },
  data() {
    return {
      a: [1, 2, 3],
      ground: 137541.01,
      industry: 821,
      data: [
        {
          name: "杭州市",
          data: [
            {
              name: "上城区",
              tip: "已排摸",
              color: "red",
              status: 1
            },
            {
              name: "下城区",
              tip: "",
              color: "red",
              status: 0
            },
            {
              name: "拱墅区",
              tip: "已排摸",
              color: "red",
              status: 1
            }
          ]
        },
        {
          name: "宁波市",
          data: [
            {
              name: "江北区",
              tip: "已加油",
              color: "blue",
              status: 1
            },
            {
              name: "镇海区",
              tip: "",
              color: "",
              status: 0
            }
          ]
        }
      ],
      options: [
        {
          value: "2018",
          label: "2018"
        },
        {
          value: "2019",
          label: "2019"
        },
        {
          value: "2020",
          label: "2020"
        }
      ],
      value: "2019"
    };
  },
  methods: {
    getData() {},
    getTipIndustry(item) {
      const map = item.data.filter(item => item.status === 1);
      return map.length;
    },
    touchstart() {
      console.log("dsadas");
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.box {
  width: 100%;
  border: 1px solid black;
  padding: 100px;
}

.box-center {
  border: 1px solid black;
}
.box-certer-select {
  margin-bottom: 50px;
}
</style>
