import { Renderer} from "@k8slens/extensions";
import { MachineCRD } from "./MachineCRD"

export class Machine extends Renderer.K8sApi.KubeObject {
  static kind = MachineCRD.kind;
  static apiBase = `/apis/${MachineCRD.apiVersion}/namespaces/{namespace}/${MachineCRD.kind.toLowerCase()}s`;
  static namespaced = true;

}