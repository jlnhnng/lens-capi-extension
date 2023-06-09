import { Renderer } from "@k8slens/extensions";
import React from "react";
import { ClustersPage } from "./src/pages/ClusterPage";
import { MachinesPage } from "./src/pages/MachinePage";


const enum id {
  clusters = "clusters",
  machines = "machines"
}

export function CAPIIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="auto_mode"/>;
}

export function ClustersIcon(props: Renderer.Component.IconProps) {
  return (
  <i className="Icon svg focusable"><span className="icon">
    <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m22.1 14.3c-.1 0-.1 0 0 0-.1 0-.1 0-.2 0s-.3 0-.4 0-.1 0-.2 0c-.4 0-.8-.1-1.1-.2-.1-.1-.2-.1-.2-.2l-.3-.1c.1-.9.1-1.9-.1-2.8-.3-1.1-.6-2-1.2-2.8l.2-.2c0-.1 0-.2.1-.3.3-.3.6-.4.9-.7.1 0 .1-.1.2-.1.1-.1.2-.1.3-.2 0 0 .1 0 .1-.1.3-.2.3-.6.1-.9-.1-.1-.3-.2-.5-.2s-.3.1-.4.2-.1.1-.1.1c-.1.1-.2.2-.3.3 0 0-.1.1-.1.1-.3.3-.5.5-.8.7 0 .1 0 .1-.1.1h-.1l-.2.2c-.3-.3-.5-.5-.8-.8-1.2-.9-2.7-1.5-4.2-1.7v-.3c-.1-.1-.1-.1-.2-.3 0-.3 0-.7.1-1.1 0-.1 0-.1 0-.2s0-.2.1-.4v-.1c0-.4-.3-.7-.6-.7-.2 0-.3.1-.4.2s-.2.3-.2.5v.1c0 .1 0 .3.1.4v.2c0 .4.1.8.1 1.1 0 .1-.1.2-.2.3v.3c-.4 0-.7.1-1.1.2-1.8.3-3.1 1.1-4.2 2.2l-.2-.2h-.1c-.1 0-.1 0-.2-.1-.3-.1-.6-.3-.8-.6s-.1-.1-.1-.1c-.2-.2-.2-.3-.3-.4 0 0-.1 0-.1-.1-.2-.1-.4-.1-.5-.1-.2 0-.4.1-.5.2-.2.2-.1.6.2.9s.1.1.1.1c.1.1.2.1.3.2.1 0 .1.1.2.1.4.2.7.4.9.6.1.1.1.2.1.3l.2.2c0 .1-.1.1-.1.2-1 1.6-1.4 3.5-1.1 5.3l-.3.1c0 .1-.1.2-.2.2-.3.1-.7.2-1.1.2-.1 0-.1 0-.2 0s-.2 0-.4 0h-.1s0 0-.1 0c-.4.1-.6.4-.5.7s.3.5.6.5h.2.1c.1 0 .2-.1.4-.1.1 0 .1-.1.2-.1.4-.1.7-.3 1-.3.1 0 .2.1.3.1h.3c.5 1.5 1.4 2.8 2.6 3.8.3.2.6.4.9.6l-.1.3c0 .1.1.2 0 .3-.1.3-.3.6-.5.9 0 .1-.1.1-.1.2-.1.1-.1.2-.2.3 0 0 0 .1-.1.1-.2.3 0 .7.3.9.1 0 .2.1.2.1.2 0 .5-.2.6-.4s0-.1.1-.1c.1-.1.1-.2.1-.4 0-.1 0-.1.1-.2.1-.4.2-.7.4-1 .2-.1.3-.1.3-.2l.1-.3c.9.3 1.8.5 2.8.5.6 0 1.2-.1 1.7-.2.4-.1.7-.2 1-.3l.1.2c.1 0 .2.1.3.2.2.3.3.6.4 1 0 .1 0 .1.1.2 0 .1.1.2.1.4 0 0 0 .1.1.1.1.2.4.4.6.4.1 0 .2 0 .2-.1.1-.1.3-.2.3-.4s0-.3 0-.5 0-.1-.1-.1c-.1-.1-.1-.2-.2-.3 0-.1-.1-.1-.1-.2-.2-.3-.4-.6-.5-.9 0-.1 0-.2 0-.3l.1-.2c1.1-.6 2-1.5 2.6-2.6.4-.6.6-1.2.8-1.8h.2c.1 0 .1-.1.3-.1.3 0 .7.2 1 .3.1 0 .1.1.2.1.1.1.2.1.4.1h.1.1.2c.3 0 .6-.2.6-.5.1-.1-.1-.4-.4-.5zm-9.3-1-.9.4-.9-.4-.2-.9.6-.8h1l.6.8zm5.2-2.1c.2.7.2 1.4.1 2l-3.1-.9c-.3-.1-.4-.4-.4-.6 0-.1.1-.2.1-.2l2.4-2.2c.5.6.7 1.2.9 1.9zm-1.7-3.1-2.6 1.9c-.2.1-.5.1-.7-.1-.1-.1-.1-.1-.1-.2l-.2-3.3c1.4.1 2.6.7 3.6 1.7zm-5.8-1.7c.2 0 .4-.1.6-.1l-.2 3.2c0 .3-.2.5-.5.5-.1 0-.2 0-.2-.1l-2.7-1.8c.8-.8 1.8-1.4 3-1.7zm-4 2.9 2.4 2.1c.2.2.2.5.1.7-.1.1-.1.1-.2.2l-3.1.9c-.2-1.3.1-2.7.8-3.9zm-.5 5.4 3.2-.5c.3 0 .5.2.6.4v.3l-1.2 2.9c-1.2-.6-2.1-1.8-2.6-3.1zm7.3 4c-.5.1-.9.2-1.4.2-.7 0-1.4-.1-2-.3l1.6-2.9c.2-.2.4-.3.6-.1.1.1.2.1.2.2l1.5 2.8c-.1 0-.3.1-.5.1zm3.9-2.8c-.5.8-1.2 1.4-1.9 1.9l-1.3-3c-.1-.2 0-.5.3-.6.1 0 .2-.1.3-.1l3.2.5c-.1.5-.3.9-.6 1.3z"></path>
    </svg>
  </span></i>
  )
}

export function MachinesIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="dns"/>;
}

export function SubIcon(props: Renderer.Component.IconProps): React.ReactElement {
  return (null)
}

export default class ClusterAPIExtension extends Renderer.LensExtension {

  clusterPages = [
      {
        id: id.clusters,
        components: {
          Page: () => <ClustersPage extension={this}/>,
        }
      },
      {
        id: id.machines,
        components: {
          Page: () => <MachinesPage extension={this}/>,
        }
      }
    ];

    clusterPageMenus = [
      {
        id: "capi",
        title: "ClusterAPI",
        components: {
          Icon: CAPIIcon
        }
      },
      {
        parentId: "capi",
        target: {pageId: id.clusters},
        title: "Clusters",
        components: {
          Icon: ClustersIcon
        }
      },
      {
        parentId: "capi",
        target: {pageId: id.machines},
        title: "Machines",
        components: {
          Icon: MachinesIcon
        }
      }
    ];
}
