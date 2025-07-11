import { createPinia } from "pinia";
import { useStores } from "./modules/user";
import { dialogStores } from "./modules/dialog";
import { globalStores } from "./modules/global";
import piniaPluginPersist from "pinia-plugin-persist"; //引入pinia数据持久化插件

const pinia = createPinia();
pinia.use(piniaPluginPersist);

export { useStores, dialogStores, globalStores };
export default pinia;
