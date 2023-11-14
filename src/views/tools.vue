<template>
  <div class="tools-view">
    <h1>工具</h1>
    <p>这里是一些有用的工具。</p>
    <div class="tool-cards">
      <div class="tool-card" v-for="tool in tools" :key="tool.id">
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <!-- 这里可以添加更多的工具信息，如按钮或链接 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        { id: 1, name: '工具1', description: '这是工具1的描述。' },
        { id: 2, name: '工具2', description: '这是工具2的描述。' },
        // ... 更多工具
      ]
    };
  }
};
</script>

<style>


</style>
