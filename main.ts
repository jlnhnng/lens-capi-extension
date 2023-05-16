import { Renderer } from "@k8slens/extensions";

export default class ClusterAPIExtensionMain extends Renderer.LensExtension {
  onActivate() {
    console.log("ClusterAPI extension activated");
  }

  onDeactivate() {
    console.log("ClusterAPI extension de-activated");
  }
}
