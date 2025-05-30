/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JobPostsCreateFormInputValues = {
    jobtitle?: string;
    jobdescription?: string;
    salaryrange?: number;
};
export declare type JobPostsCreateFormValidationValues = {
    jobtitle?: ValidationFunction<string>;
    jobdescription?: ValidationFunction<string>;
    salaryrange?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobPostsCreateFormOverridesProps = {
    JobPostsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    jobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    jobdescription?: PrimitiveOverrideProps<TextFieldProps>;
    salaryrange?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobPostsCreateFormProps = React.PropsWithChildren<{
    overrides?: JobPostsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobPostsCreateFormInputValues) => JobPostsCreateFormInputValues;
    onSuccess?: (fields: JobPostsCreateFormInputValues) => void;
    onError?: (fields: JobPostsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobPostsCreateFormInputValues) => JobPostsCreateFormInputValues;
    onValidate?: JobPostsCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobPostsCreateForm(props: JobPostsCreateFormProps): React.ReactElement;
