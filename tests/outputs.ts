export const nativeResult = `/**
 * This file was generated from MyWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { ActionValue, DynamicValue, EditableValue, FileValue, ImageValue } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type MywidgetTypeEnum = "badge" | "label";

export interface ActionsType {
    name: string;
    enabled: boolean;
    action?: ActionValue;
    image: DynamicValue<ImageValue>;
}

export interface MyWidgetProps<Style> extends CommonProps<Style> {
    valueAttribute?: EditableValue<string | BigJs.Big>;
    mywidgetValue?: string;
    valueExpression?: DynamicValue<string>;
    valueExpressionDecimal?: DynamicValue<BigJs.Big>;
    file: DynamicValue<FileValue>;
    bootstrapStyle: BootstrapStyleEnum;
    mywidgetType: MywidgetTypeEnum;
    tries?: number;
    amount?: BigJs.Big;
    image?: DynamicValue<ImageValue>;
    onClickAction?: ActionValue;
    onChange?: ActionValue;
    actions: ActionsType[];
}
`;

export const webResult = `/**
 * This file was generated from MyWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, DynamicValue, EditableValue, FileValue, ImageValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type MywidgetTypeEnum = "badge" | "label";

export interface ActionsType {
    name: string;
    enabled: boolean;
    action?: ActionValue;
    image: DynamicValue<ImageValue>;
}

export interface ActionsPreviewType {
    name: string;
    enabled: boolean;
    action: ActionPreview;
    image: ImageValue;
}

export interface ActionsVisibilityType {
    name: boolean;
    enabled: boolean;
    action: boolean;
    image: boolean;
}

export interface MyWidgetContainerProps extends CommonProps {
    valueAttribute?: EditableValue<string | BigJs.Big>;
    mywidgetValue?: string;
    valueExpression?: DynamicValue<string>;
    valueExpressionDecimal?: DynamicValue<BigJs.Big>;
    file: DynamicValue<FileValue>;
    bootstrapStyle: BootstrapStyleEnum;
    mywidgetType: MywidgetTypeEnum;
    tries?: number;
    amount?: BigJs.Big;
    image?: DynamicValue<ImageValue>;
    onClickAction?: ActionValue;
    onChange?: ActionValue;
    actions: ActionsType[];
}

export interface MyWidgetPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    valueAttribute?: string;
    mywidgetValue?: string;
    valueExpression?: string;
    valueExpressionDecimal?: BigJs.Big;
    file: FileValue;
    bootstrapStyle: BootstrapStyleEnum;
    mywidgetType: MywidgetTypeEnum;
    tries?: number;
    amount?: BigJs.Big;
    image?: ImageValue;
    onClickAction?: ActionPreview;
    onChange?: ActionPreview;
    actions: ActionsPreviewType[];
}

export interface VisibilityMap {
    valueAttribute: boolean;
    mywidgetValue: boolean;
    valueExpression: boolean;
    valueExpressionDecimal: boolean;
    file: boolean;
    bootstrapStyle: boolean;
    mywidgetType: boolean;
    tries: boolean;
    amount: boolean;
    image: boolean;
    onClickAction: boolean;
    onChange: boolean;
    actions: ActionsVisibilityType[] | boolean;
}
`;
