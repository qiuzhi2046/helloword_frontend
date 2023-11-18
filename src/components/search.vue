<template>
  <div class="search-container">

    <div class="search-header">
      <h1>Helloword.ai</h1>
      <p style="margin-bottom: 10px ">真的很不错哟，实在是全世界最全的ai导航网站，希望您不要错过</p>
      <p>在Helloword.ai ,发现，探索更多更好的ai应用，我们持续不断的更新最新的应用</p>


      <div class="news-today-button">
        <button class="news-today-btn">今日新增AI应用</button>
      </div>



    </div>

    <div class="search-bar">
      <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="submitSearch"
          placeholder="用AI搜索AI"
      />
      <button @click="submitSearch">搜索</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    submitSearch() {
      // 在这里实现搜索逻辑
      console.log('Searching for:', this.searchQuery);
      // 您可以在这里添加跳转逻辑或者发起搜索请求
    },
  },
};
</script>

<style >
.search-container {
  background-color: #ffffff; /* 白背景 */
  color: #333;
  text-align: center;
  padding-bottom: 80px;
  padding-top: 80px;
}

.search-header h1 {
  margin-bottom: 20px;
  margin-top: 60px;
  font-size: 60px;
  color: #5e5b5b;
  padding-right: 40px;
}

.search-header p {
  font-size: 16px;
  margin-bottom: 70px;
}

.news-today-button button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-right: 50px;
}


.news-today-btn {
  background-color: #de447d; /* 紫色背景 */
  color: white;
  margin-bottom: 40px;
}

.search-bar input {
  margin-right: 10px;
  width: 600px;
  height: 60px;
  border-radius: 16px;
  border: 0.8px solid #989595;
  font-size: 15px;
  font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  padding-left: 40px;
}

.search-bar button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #06c; /* 紫色背景 */
  color: white;
  cursor: pointer;
}
</style>
