export const iconWebOutput = `/**
 * This file was generated from MyWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { DynamicValue, IconValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface IconsType {
    firstIcon: DynamicValue<IconValue>;
    secondIcon: DynamicValue<IconValue>;
}

export interface IconsPreviewType {
    firstIcon: IconValue;
    secondIcon: IconValue;
}

export interface IconsVisibilityType {
    firstIcon: boolean;
    secondIcon: boolean;
}

export interface MyWidgetContainerProps extends CommonProps {
    icons: IconsType[];
}

export interface MyWidgetPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    icons: IconsPreviewType[];
}

export interface VisibilityMap {
    icons: IconsVisibilityType[] | boolean;
}
`;

export const iconNativeOutput = `/**
 * This file was generated from MyWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { DynamicValue, IconValue } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface IconsType {
    firstIcon: DynamicValue<IconValue>;
    secondIcon: DynamicValue<IconValue>;
}

export interface MyWidgetProps<Style> extends CommonProps<Style> {
    icons: IconsType[];
}
`;
