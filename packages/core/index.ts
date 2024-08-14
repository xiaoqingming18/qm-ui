import { makeInstaller } from "@qm-ui/utils";
import components from "./components";
import "@qm-ui/theme/index.css";

const installer = makeInstaller(components);

export * from "@qm-ui/components";

export default installer;
