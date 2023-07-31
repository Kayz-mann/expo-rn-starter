import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, Modal, Platform } from "react-native";
import { Picker as RNPicker, PickerProps } from "@react-native-picker/picker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box, Text } from "./Theme";
import { Control, Controller } from "react-hook-form";

const styles = StyleSheet.create({
    container: {
        width: 163,
        height: 53,
        justifyContent: "space-between",
        marginBottom: 38,
    },
    box: {
        height: 54,
        width: wp(90),
        borderRadius: 7,
        backgroundColor: theme.colors.bg,
        borderWidth: 1,
        borderColor: theme.colors.border,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 22,
        alignItems: "center",
    },
    picker: {
        backgroundColor: theme.colors.bg,
        width: "100%",
        height: "40%",
        position: "absolute",
        bottom: 0,
    },
    pickerContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        width: "100%",
        height: "100%",
        position: "absolute",
        bottom: 0,
    },
    error: {
        position: "absolute",
        top: 87,
        right: 1,
    },
    cancel: {
        width: 60,
        height: 30,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: theme.colors.bg,
    },
});

export interface DataProps {
    label: string;
    value: string;
    amount?: string;
}

export interface PickerInputProps extends PickerProps {
    control: Control<any, any> | any;
    value: string;
    setValue: (value: string) => void;
    data: DataProps[];
    label: string;
    name: string;
    placeholder: string;
    amount?: boolean;
}
interface Props extends PickerProps {
    label: string;
    placeholder: string;
    value: string;
    setValue: (state: string) => void;
    data: DataProps[];
    error?: string;
    width?: number | string;
    control: Control<any, any> | any;
    amount?: boolean;
}

export const PickerForm = ({
    control,
    value,
    setValue,
    data,
    label,
    name,
    placeholder,
    amount,
}: PickerInputProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ }) => (
                <Picker
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    setValue={setValue}
                    data={data}
                    control={control}
                />
            )}
        />
    );
};

const Picker: FC<Props> = ({
    label,
    placeholder,
    value,
    setValue,
    data,
    error,
    width,
    control,
    amount,
}) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            {Platform.OS === "ios" && (
                <>
                    <Box style={styles.container}>
                        <Text variant="text5" color="text1">
                            {label}
                        </Text>

                        <TouchableOpacity
                            style={styles.box}
                            activeOpacity={0.7}
                            onPress={() => setVisible(!visible)}
                        >
                            <Text variant="text2" color="text1">
                                {value !== "" ? value : placeholder}
                            </Text>
                            <Icon name="chevron-down" color={theme.colors.gray} size={20} />
                        </TouchableOpacity>

                        {error && (
                            <Box style={styles.error}>
                                <Text variant="text2" color="error">
                                    {error}
                                </Text>
                            </Box>
                        )}
                    </Box>
                    <Modal
                        animationType="fade"
                        transparent
                        visible={visible}
                        onRequestClose={() => {
                            setVisible(!visible);
                        }}
                    >
                        <Box style={styles.pickerContainer}>
                            <Box style={styles.picker}>
                                <TouchableOpacity
                                    style={{ padding: 20 }}
                                    onPress={() => setVisible(!visible)}
                                >
                                    <Box style={styles.cancel}>
                                        <Text variant="text2" color="primary">
                                            Done
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                                <RNPicker
                                    selectedValue={value}
                                    onValueChange={(itemValue: string) => setValue(itemValue)}
                                    style={{}}
                                >
                                    {/* eslint-disable-next-line prettier/prettier */}
                                    {data.map((d) => (
                                        <RNPicker.Item
                                            label={d.label}
                                            value={d.value}
                                            key={d.value}
                                        />
                                    ))}
                                </RNPicker>
                            </Box>
                        </Box>
                    </Modal>
                </>
            )}

            {Platform.OS === "android" && (
                <Box>
                    <Text variant="text5" color="text1">
                        {label}
                    </Text>
                    <Box
                        style={{
                            borderRadius: 7,
                            height: 54,
                            width: width || wp(90),
                            backgroundColor: theme.colors.bg,
                            marginBottom: 20,
                            marginTop: 10,
                            borderWidth: 1,
                            borderColor: theme.colors.border,
                        }}
                    >
                        <RNPicker
                            selectedValue={value}
                            onValueChange={(itemValue: string) => setValue(itemValue)}
                            style={{}}
                        >
                            {/* eslint-disable-next-line prettier/prettier */}
                            {data.map((d) => (
                                <RNPicker.Item label={d.label} value={d.value} key={d.value} />
                            ))}
                        </RNPicker>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Picker;
