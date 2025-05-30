/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeader2OverridesProps = {
    NavBarHeader2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Acquire_logo_black 1"?: PrimitiveOverrideProps<ImageProps>;
    DASHBOARD?: PrimitiveOverrideProps<TextProps>;
    "AI ASSISTANT"?: PrimitiveOverrideProps<TextProps>;
    SETTINGS?: PrimitiveOverrideProps<TextProps>;
    USER?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button13434?: PrimitiveOverrideProps<FlexProps>;
    Button13435?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type NavBarHeader2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeader2OverridesProps | undefined | null;
}>;
export default function NavBarHeader2(props: NavBarHeader2Props): React.ReactElement;
