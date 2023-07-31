import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";


import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";


import { SCREENS } from "../../../../shared/constants";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Button from "../../../components/Button";
import FormInput from "../../../components/FormInput";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { PickerForm } from "../../../components/Picker";
import RegistrationSteps from "../../../components/RegistrationSteps";
import StackHeader from "../../../components/StackHeader";
import theme, { Box, Text } from "../../../components/Theme";
import { RegistrationOptions } from "../Registration";


export const genderData = ["", "male", "female"].map((i) =>
    i.toUpperCase());

const NextUserSignUp = ({
    onNext,
    onPrev,
    steps,
    totalSteps,
}: RegistrationOptions): JSX.Element => {
    const dispatchApp = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const { navigate } = useNavigation();
    const { userType } = useAppSelector((state) => state.global);
    const [countryCode, setCountryCode] = useState<any>(
        // userRegistration?.selectedCountry ?? ""
    );

    const { control, watch, handleSubmit, setValue } = useForm({
        // defaultValues: "",
        // resolver: yupResolver(RegisterUserSchema),
        mode: "onChange",
        reValidateMode: "onChange",
    });

    // let control: any




    return (
        <KeyboardAwareScrollView>
            <ScrollView style={{ flex: 1 }}>
                <Box style={styles.container}>
                    <KeyboardAvoidingView style={{ alignItems: "center" }}>
                        <Box>
                            <StackHeader onBackPress={() => onPrev?.()} />
                            <Box style={{ marginTop: 65, paddingLeft: 40, position: 'absolute' }}>
                                <RegistrationSteps steps={steps} totalSteps={totalSteps} />
                            </Box>
                        </Box>

                        <Box style={{ width: wp(90), alignContent: 'center' }}>

                             <Text style={{ marginTop: 33, textAlign: 'center' }} variant="title3" color="text1">
                                Tell us more about you
                            </Text>

                            <Box mt="xxl">
                                <Text mb="l" variant="text5" color="text">
                                    Date of Birth
                                </Text>

                                <FormInput
                                    type={"input"}
                                    name={"date"}
                                    control={control}
                                    keyboardType={"default"}
                                    placeholder={"Date"}
                                />
                            </Box>

                            <Box mt="s">
                                <Text mb="l" variant="text5" color="text">
                                    Address
                                </Text>

                                <FormInput
                                    type={"input"}
                                    name={"date"}
                                    control={control}
                                    keyboardType={"default"}
                                    placeholder={"Enter address"}
                                    height={100}
                                />
                            </Box>

                            <Box style={{ marginTop: 5 }}>
                                <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Text mb="l" variant="text5" color="text">
                                            State
                                        </Text>
                                        <FormInput
                                            type={"input"}
                                            name={"state"}
                                            control={control}
                                            placeholder={"State"}
                                            width={wp(44)}
                                        />
                                    </Box>

                                    <Box>
                                        <Text mb="l" variant="text5" color="text">
                                            Post code/ P.O. Box
                                        </Text>
                                        <FormInput
                                            type={"input"}
                                            name={"postCode"}
                                            control={control}
                                            placeholder={"Post code/ PO Box"}
                                            width={wp(44)}
                                        />
                                    </Box>
                                </Box>


                            </Box>
                        </Box>
                        <Box style={{ paddingTop: 60, paddingBottom: 30 }}>
                            <Button
                                type="primary"
                                label="Next"
                                onPress={() => onNext?.()}
                            />
                        </Box>

                    </KeyboardAvoidingView>
                </Box>
            </ScrollView>
            <LoadingIndicator isLoading={loading} />
        </KeyboardAwareScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.bg,
    },
    countryCodePicker: {
        alignSelf: "center",
    },
    togglerContainerStyle: {
        backgroundColor: "#baffc0",
        borderRadius: 10,
        padding: 5,
    },
    togglerLabelStyle: {
        fontSize: 20,
    },
    searchInputStyle: {
        borderColor: "#888888",
        borderWidth: 1,
        height: 36,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    pickerItemLabelStyle: {
        marginLeft: 10,
        marginVertical: 10,
        alignSelf: "center",
    },
    pickerItemContainerStyle: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "center",
    },
    callInput: {
        // paddingHorizontal: 15,
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
    },
    inputBorder: {
        borderRightColor: theme.colors.border,
        borderRightWidth: 1,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    licenseInput: {
        // paddingHorizontal: 15,
        fontFamily: "Gilroy-Regular",
        fontSize: 14,
    },
    licenseContainer: {
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: 6,
    },
});

export default NextUserSignUp;
