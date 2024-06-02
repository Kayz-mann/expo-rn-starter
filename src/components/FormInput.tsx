import React from "react";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
} from "react-hook-form";
import { Text, View } from "react-native";
import TextInput, { InputFieldProps } from "./TextInput";
import theme from "./Theme";

export interface FormInputProps extends InputFieldProps {
  control?: Control<any, any> | any;
  name: string;
  resizable?: boolean;
  minHeight?: number;
  hideError?: boolean;
  inputRef?: any;
}

const FormInput = ({ control, name, ...rest }: FormInputProps) => {
  return (
    <Controller
      control={control}
      render={({ field, fieldState }) => (
        <FormInputItem
          inputRef={rest.inputRef}
          field={field}
          fieldState={fieldState}
          name={name}
          {...rest}
        />
      )}
      name={name}
    />
  );
};

export interface FormInputItemProps extends InputFieldProps {
  field: ControllerRenderProps<any, any>;
  fieldState: ControllerFieldState;
  process?: (e: any) => Promise<any>;
  resizable?: boolean;
  minHeight?: number;
  name?: string;
}

export const FormInputItem = ({
  field,
  fieldState,
  resizable,
  minHeight,
  name,
  ...rest
}: FormInputItemProps) => {
  return (
    <>
      <TextInput
        autoCapitalize="sentences"
        onChangeText={field.onChange}
        value={field?.value}
        {...rest}
        error={undefined}
        placeholderTextColor={rest.placeholderTextColor ?? theme.colors.gray}
      />
      <View style={{}}>
        <Text>
          {fieldState.error || rest?.error ? (
            <Text
              style={{ color: theme.colors.orange, top: 4, marginBottom: 15 }}
            >
              {fieldState.error?.message! ?? rest?.error}
            </Text>
          ) : undefined}
        </Text>
      </View>
    </>
  );
};

FormInputItem.defaultProps = {
  minHeight: 45,
};
export default FormInput;
