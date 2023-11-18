<template>
  <div class="tools-view">


   <el-container>


    <el-main>

    <div class="tool-cards">
      <div class="tool-card" v-for="tool in tools" :key="tool.id">
        <div class="circle-image">
          <img :src=tool.ref alt="描述">
        </div>
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <div class="detal">
        <p>{{tool.detail}}</p>
        </div>
        <el-button @click="goToPage(tool.link)" color="#026eda" round class="btn" size="large">使用 </el-button>
      </div>
    </div>
    <div class="tool-cards2">
      <div class="tool-card2" v-for="tool in tools" :key="tool.id">
        <div class="circle-image">
          <img :src=tool.ref alt="描述">
        </div>
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <div class="detail">
        <p>{{tool.detail}}</p>
          </div>
        <el-button @click="goToPage(tool.link)" color="#026eda" round class="btn" size="large">使用 </el-button>
      </div>
      <div class="tool-card2" v-for="tool in tools" :key="tool.id">
        <div class="circle-image">
          <img :src=tool.ref alt="描述">
        </div>
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <div class="detail">
        <p>{{tool.detail}}</p>
        </div>
        <el-button  @click="goToPage(tool.link)" color="#026eda" round class="btn" size="large">使用 </el-button>
      </div>
    </div>
    </el-main>
   </el-container>
  </div>
</template>

<script>
import search from "../components/search.vue";
import SideNav from "@/components/SideNav.vue";
export default {
  components: {
    search,SideNav
  },
  data() {
    return {
      tools: [
        { id: 1, name: 'ChatGPT4', description: 'OpenAI的语言模型' ,ref:"src/assets/img/LOGO/openai.jpg",detail:"我们创造安全和有益的人工智能的工作需要深入了解潜在的风险和收益，并仔细考虑其影响。",link:"https://openai.com/"},
        { id: 2, name: 'Claude3', description: '美国的长文本语言模型',ref:"src/assets/img/LOGO/claude.jpg" ,detail:"Anthropic 是一家位于旧金山的人工智能安全和研究公司。我们的跨学科团队在机器学习、物理、政策和产品方面拥有丰富的经验。我们共同开展研究并创建可靠、有益的人工智能系统。",link:"https://www.anthropic.com/"},
        { id: 3, name: 'Grok', description: 'X.ai的大语言模型' ,ref:"src/assets/img/LOGO/xai.jpg",detail: "Grok 是一款模仿《银河系漫游指南》的人工智能，因此几乎可以回答任何问题，更难的是，它甚至可以建议要问什么问题！",link:"https://x.ai/"},
      ]
    };
  },
  methods: {
    goToPage(link) {
      window.open(link)
    }
  }
};
</script>

<style>
.tools-view{
  background-color: #f8f8f8;
}
.circle-image img {
  width: 200px;        /* 图片宽度 */
  height: 200px;       /* 图片高度 */
  border-radius: 50%;  /* 使图片变为圆形 */
  object-fit: cover;   /* 保证图片覆盖整个区域 */
}
.tool-cards{
  display: flex;
  justify-items: center;
  justify-content: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #313030;
  font-weight: bolder;
}
.tool-card{
  margin: 20px;
  width: 500px;
  height: 500px;
  background-color: #f8f8f8;
  border-radius: 5px;
  text-align: center;
  padding: 50px 0;
  box-sizing: border-box;
}
.tool-cards2{
  display: flex;
  justify-items: center;

  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #313030;
  font-weight: bolder;
}
.tool-card2{
  margin: 20px;
  width: 300px;
  height: 500px;
  background-color: #f8f8f8;
  border-radius: 5px;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
}
.tool-card2 p{
  margin: 10px;
  font-weight: normal;
  font-size: 13px;
  color: #726e6e;
}
p{
  margin: 20px;
  font-weight: normal;
  font-size: 13px;
  color: #726e6e;
}

.type p{
  margin: 30px 150px;
  font-weight: bolder;
  font-size: 20px;
  color: #3d3b3b;
}
.detail{
  height: 100px;
  margin-bottom: 15px;
}



</style>
