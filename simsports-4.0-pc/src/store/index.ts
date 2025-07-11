import { createPinia } from "pinia";
import { useStores } from "./modules/user";
import { dialogStores } from "./modules/dialog";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; //引入pinia数据持久化插件

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useStores, dialogStores };
export default pinia;
