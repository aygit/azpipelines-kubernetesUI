/*
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the MIT license.
*/

import { BaseComponent } from "@uifabric/utilities";
import * as React from "react";
import { IPodRightPanelProps } from "./PodsRightPanel";
import * as JsYaml from "js-yaml";
import { PodContentReader } from "./PodContentReader";

export interface IPodYamlProps extends IPodRightPanelProps { }

export class PodYaml extends BaseComponent<IPodYamlProps> {
    public render(): JSX.Element {
        return (
            <PodContentReader
                className="pod-yaml"
                contentClassName="pod-yaml-content"
                text={JsYaml.safeDump(this.props.pod)}
            />
        );
    }
}