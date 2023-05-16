import { Renderer} from "@k8slens/extensions";
import { ClusterCRD } from "./ClusterCRD"

export class Cluster extends Renderer.K8sApi.KubeObject {
  static kind = ClusterCRD.kind;
  static apiBase = `/apis/${ClusterCRD.apiVersion}/namespaces/{namespace}/${ClusterCRD.kind.toLowerCase()}s`;
  static namespaced = true;

}