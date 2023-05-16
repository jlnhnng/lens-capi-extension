import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Machine } from "../machine/MachineObject"
import { machineStore } from "../machine/MachineStore";

enum sortBy {
  name = "name"
}

export class MachinesPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
        <Renderer.Component.KubeObjectListLayout
            tableId="MachinesTable"
            className="Machines" store={machineStore}
            sortingCallbacks={{
              [sortBy.name]: (machine: Machine) => machine.getName()
            }}
            searchFilters={[
              (machine: Machine) => machine.getSearchFields()
            ]}
            renderHeaderTitle="Machines"
            renderTableHeader={[
              { title: "Name", className: "name", sortBy: sortBy.name }              
            ]}
            renderTableContents={(machine: Machine ) => [
              machine.getName(),
            ]}
        />
    ) 
  }
}