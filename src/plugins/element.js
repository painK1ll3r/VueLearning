import Vue from "vue";
import { Button, Message,Dialog,popover } from "element-ui";

Vue.use(Button);
Vue.use(Dialog);
Vue.use(popover);

Vue.prototype.$message = Message;
