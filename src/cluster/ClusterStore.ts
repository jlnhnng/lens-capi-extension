import { Renderer} from "@k8slens/extensions";
import { Cluster } from "./ClusterObject";

export class ClusterApi extends Renderer.K8sApi.KubeApi<Cluster> {
}

export class ClusterStore extends Renderer.K8sApi.KubeObjectStore<Cluster> {
  api = new ClusterApi({
    objectConstructor: Cluster
  });
}

export const clusterStore = new ClusterStore();

Renderer.K8sApi.apiManager.registerStore(clusterStore);