import * as wasm from "./joint_sim_bg.wasm";
import { __wbg_set_wasm } from "./joint_sim_bg.js";
__wbg_set_wasm(wasm);
export * from "./joint_sim_bg.js";
