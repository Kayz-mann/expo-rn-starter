import React, { FC, useState } from "react";
import {
    StyleSheet,
    TextInput as RNTextInput,
    TextInputProps,
    TouchableOpacity,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import theme, { Box, Text } from "./Theme";

export interface InputFieldProps extends TextInputProps {
    type: "number" | "input";
    placeholder: string;
    secured?: boolean;
    email?: boolean;
    inputRef?: any;
    error?: string;
    width?: number;
    errorRight?: number;
    height?: number;
}

const TextInput: FC<InputFieldProps> = ({
    placeholder,
    secured,
    email,
    type,
    inputRef,
    error,
    width,
    errorRight,
    height: heightValue,
    ...props
}) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <Box
            style={[
                styles.container,
                {
                    borderRadius: 12,
                    height: heightValue ? heightValue : 58,
                },
            ]}
        >
            <Box
                style={[
                    styles.inputContainer,
                    {
                        borderRadius: 12,
                        height: heightValue ? heightValue : 48,
                    },
                ]}
            >
                <RNTextInput
                    placeholder={placeholder}
                    style={[
                        styles.input,
                        {
                            paddingTop: props.multiline ? 15 : undefined,
                            width: width || theme.layout.screenWidth,
                            height: heightValue ? heightValue : type === "input" ? 56 : 56,
                            borderRadius: 12,
                        },
                    ]}
                    placeholderTextColor={theme.colors.border}
                    ref={inputRef}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...props}
                    secureTextEntry={secured ? !visible : false}
                />

                {secured && (
                    <TouchableOpacity
                        onPress={() => setVisible(!visible)}
                        style={styles.eye}
                    >
                        {visible ? (
                            <Entypo name="eye" size={17} color={theme.colors.gray} />
                        ) : (
                            <Entypo name="eye" size={17} color={theme.colors.gray} />
                        )}
                    </TouchableOpacity>
                )}

                {email && (
                    <TouchableOpacity style={styles.eye}>
                        <Feather name="mail" size={17} color={theme.colors.gray} />
                    </TouchableOpacity>
                )}

                {error && (
                    <Box style={[styles.error, { right: errorRight || 10 }]}>
                        <Text variant="text2" color="error">
                            {error}
                        </Text>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: theme.colors.border,
        // backgroundColor: theme.colors.inputPink,
        paddingHorizontal: 15,
        fontFamily: "Gilroy-Regular",
        fontSize: 14,
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    eye: {
        position: "absolute",
        right: 20,
    },
    flag: {
        position: "absolute",
        zIndex: 10,
        marginLeft: 15,
        flexDirection: "row",
        borderRightWidth: 1.5,
        height: 41,
        alignItems: "center",
        borderColor: theme.colors.border,
        paddingRight: 15,
    },
    search: {
        position: "absolute",
        zIndex: 10,
        marginLeft: 15,
        flexDirection: "row",
        marginRight: wp(2),
    },
    error: {
        position: "absolute",
        top: 28,
    },
    location: {
        position: "absolute",
        right: 20,
        zIndex: 1,
    },
});

export default TextInput;
