<template>
  <div>
		
<el-tabs type="border-card">
  <el-tab-pane label="属性" key="props">
        <Props
          name="Hello Vue！"
          :type="type"
          :is-visible="false"
          :on-change="handlePropChange"
          title="属性Demo"
          class="test1"
          :class="['test2']"
          :style="{ marginTop: '20px' }"
          style="margin-top: 10px"
        />
		</el-tab-pane>
  <el-tab-pane label="事件" key="event">
		<Event :name="name" @change="handleEventChange" />
		</el-tab-pane>
  <el-tab-pane label="插槽" key="slot">
        <h2>2.6 新语法</h2>
				
				
        <SlotDemo>
          <p>default slot</p>
          <template v-slot:title>
            <p>title slot1</p>
            <p>title slot2</p>
          </template>
          <template v-slot:item="props">
            <p>item slot-scope {{ props }}</p>
          </template>
        </SlotDemo>
				
				
        <br />
				
				
				
        <h2>老语法</h2>
				
				
				
        <SlotDemo>
          <p>default slot</p>
          <p slot="title">title slot1</p>
          <p slot="title">title slot2</p>
          <p slot="item" slot-scope="props">item slot-scope {{ props }}</p>
        </SlotDemo>
		</el-tab-pane>
  <el-tab-pane label="大属性" key="bigProps">
        <BigProps
          :name="bigPropsName"
          :on-change="handleBigPropChange"
          :slot-default="getDefault()"
          :slot-title="getTitle()"
          :slot-scope-item="getItem"
        />
		</el-tab-pane>
</el-tabs>
		
		

  </div>
</template>

<script>
import Props from "./Props";
import Event from "./Event";
import Slot from "./Slot";
import BigProps from "./BigProps";
export default {
  components: {
    Props,
    Event,
    SlotDemo: Slot,
    BigProps
  },
  data: () => {
    return {
      name: "",
      type: "success",
      bigPropsName: "Hello world!"
    };
  },
  methods: {
    handlePropChange(val) {
      this.type = val;
    },
    handleEventChange(val) {
      this.name = val;
    },
    handleBigPropChange(val) {
      this.bigPropsName = val;
    },
    getDefault() {
      return [this.$createElement("p", "default slot")];
    },
    getTitle() {
      return [
        this.$createElement("p", "title slot1"),
        this.$createElement("p", "title slot2")
      ];
    },
    getItem(props) {
      return [
        this.$createElement("p", `item slot-scope ${JSON.stringify(props)}`)
      ];
    }
  }
};
</script>
