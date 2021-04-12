<template>
  <ul class="tree-g-item">
    <li v-for="(item, index_) in treeData">
      <div class="tree-item no-select pr"
        :class="{ selected: item.selected }"
        @click="nodeClick(item)">
        
        <span v-if="item.nodes" class="toggle-icon ps" 
          :class="item.isOpen ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
          @click.stop="toggle(item)"/>
        
        <span class="item-name">
          <i class='el-icon-folder'></i>{{ item.name }}
          <span v-if="item.recmd" class="recommend">推荐</span>
        </span>
        <span v-if="item.pathNames" class="path-names">{{ item.pathNames }}</span>
        
      </div>
      <ul v-show="item.isOpen" v-if="item.nodes && item.nodes.length > 0" class="tree-p-item">
        <tree-item
          class="item"
          :lastNode="lastNode"
          :treeData="item.nodes"
          @setLastNode="setLastNode"
          @clearLastNode="clearLastNode"
        ></tree-item>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'tree-item',
  props: {
    lastNode: Object,
    item: Object,
    treeData: Array,
    defaultProps: {
      children: 'nodes',
      label: 'name'
    }
  },
  data: function() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle(item) {
      if (item.nodes) {
        item.isOpen = !item.isOpen;
        this.$forceUpdate()
      }
    },
    nodeClick(item) {
      this.toggle(item)

      if (this.lastNode) {
        this.clearLastNode()
      }
      item.selected = true
      this.$emit("setLastNode", item)
    },
    clearLastNode() {
      if (this.lastNode) {
        this.lastNode.selected = false
        this.$forceUpdate()
        this.$emit('clearLastNode', this.lastNode)
      }
    },
    setLastNode(item) {
      this.$emit("setLastNode", item)
    }
  }
}
</script>
<style
  lang="less" scope>

@iconColor: #66b0f8;
.tree-g-item {
  width: 100%;
  .tree-p-item {

  }
  .tree-item {
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    padding: 8px 5px;
    padding-left: 20px;
      
    &:hover {
      color: #333;
      background-color: @hoverBg;
      .el-icon-folder {
        color: @iconColor;
      }
      .toggle-icon {
        color: #fff;
      }
    }
    .item-name {
      display: inline-block;
      width: 100%;
      white-space: nowrap;

      .el-icon-folder {
        color: @iconColor;
        padding: 0 5px;
        font-size: 20px;
      }
    }
    .path-names {
      margin-left: 28px;
      color: @gray;
    }
    .recommend {
      border: 1px solid #ddd;
      width: 34px;
      padding: 0 2px;
      border-radius: 2px;
      font-size: 14px;
      font-weight: bold;
      color: @green;
    }
  }
  .selected {
    // background-color: @blue;  
    background: linear-gradient(
      to right,  rgb(76, 117, 234)0%,
      rgb(64, 158, 255) 100%);
    color: #fff;
    .toggle-icon {
      color: #fff;
    }
    &:hover {
      color: #fff;
      background-color: @blue;
    }
  }
  .toggle-icon {
    position: absolute;
    left: 0px;
    color: #696969;
  }
}
  

.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  line-height: 1.5em;
  list-style-type: dot;
}
.tree-p-item {
  padding-left: 20px;
}

</style>
