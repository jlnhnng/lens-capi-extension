import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Cluster } from "../cluster/ClusterObject"
import { clusterStore } from "../cluster/ClusterStore";

enum sortBy {
  name = "name"
}

export class ClustersPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
        <Renderer.Component.KubeObjectListLayout
            tableId="ClustersTable"
            className="Clusters" store={clusterStore}
            sortingCallbacks={{
              [sortBy.name]: (cluster: Cluster) => cluster.getName()
            }}
            searchFilters={[
              (cluster: Cluster) => cluster.getSearchFields()
            ]}
            renderHeaderTitle="Clusters"
            renderTableHeader={[
              { title: "Name", className: "name", sortBy: sortBy.name }              
            ]}
            renderTableContents={(cluster: Cluster ) => [
              cluster.getName(),
            ]}
        />
    ) 
  }
}