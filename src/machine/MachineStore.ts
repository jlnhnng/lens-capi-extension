import { Renderer} from "@k8slens/extensions";
import { Machine } from "./MachineObject";

export class MachineApi extends Renderer.K8sApi.KubeApi<Machine> {
}

export class MachineStore extends Renderer.K8sApi.KubeObjectStore<Machine> {
  api = new MachineApi({
    objectConstructor: Machine
  });
}

export const machineStore = new MachineStore();

Renderer.K8sApi.apiManager.registerStore(machineStore);