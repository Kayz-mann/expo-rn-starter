import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    KeyboardAvoidingView,
    Pressable,
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
import Checkbox from "../../../components/Checkbox";
import FormInput from "../../../components/FormInput";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { PickerForm } from "../../../components/Picker";
import RegistrationSteps from "../../../components/RegistrationSteps";
import StackHeader from "../../../components/StackHeader";
import theme, { Box, Text } from "../../../components/Theme";
import { RegistrationOptions } from "../Registration";


export const emailData = [""].map((i) =>
    i.toUpperCase());

export const entityData = ["", "Government", "Private", "Non Govermental Organization"].map((i) =>
    i.toUpperCase());

const ThirdMerchantSignUp = ({
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
    const [selectBrandOffice, setSelectBrandOffice] = useState<boolean>(false);

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
                            <Box style={{ marginTop: 65, alignItems: 'center', paddingLeft: 40, position: 'absolute' }}>
                                <RegistrationSteps steps={steps} totalSteps={totalSteps} />
                            </Box>
                        </Box>

                        <Box style={{ width: wp(90), alignContent: 'center' }}>
                            <Text style={{ marginTop: 13, textAlign: 'center' }} variant="title3" color="text1">
                                Login Details
                            </Text>

                            <Box style={{ marginTop: 30 }}>
                                <Box>
                                    <Text mb="l" variant="text5" color="text">
                                        Director's Email address
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"directorEmail"}
                                        control={control}
                                        placeholder={"Director's Email Address"}
                                    />
                                </Box>

                                <Box style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Text mb="l" variant="text5" color="text">
                                            Director's First name
                                        </Text>
                                        <FormInput
                                            type={"input"}
                                            name={"directorFirstName"}
                                            control={control}
                                            placeholder={"First Name"}
                                            width={wp(40)}
                                        />
                                    </Box>

                                    <Box>
                                        <Text mb="l" variant="text5" color="text">
                                            Director's Last Name
                                        </Text>
                                        <FormInput
                                            type={"input"}
                                            name={"directorLastName"}
                                            control={control}
                                            placeholder={"Last Name"}
                                            keyboardType="default"
                                            width={wp(40)}
                                        />
                                    </Box>
                                </Box>

                                <Text variant="text5" color="text" mb="l">Phone Number</Text>

                                <Box
                                    style={[
                                        styles.licenseContainer,
                                        {
                                            borderRadius: 10,
                                            height: 58,
                                        },
                                    ]}
                                >
                                    <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity style={styles.inputBorder}>
                                            <CountryPicker
                                                withFlag
                                                withCallingCodeButton
                                                withAlphaFilter={true}
                                                withCallingCode
                                                onSelect={(country) => {
                                                    setValue("selectedCountry", country.cca2);
                                                    const { cca2 } = country;
                                                    setCountryCode(cca2);
                                                }}
                                                containerButtonStyle={{
                                                    alignItems: "center",
                                                }}
                                                countryCode={countryCode ? countryCode : "UG"}
                                            />
                                        </TouchableOpacity>

                                        <Box style={{ paddingTop: 40, paddingLeft: 5 }}>
                                            <FormInput
                                                control={control}
                                                name={"phoneNumber"}
                                                type={"number"}
                                                placeholder={"Phone Number"}
                                                keyboardType="numeric"
                                                style={[
                                                    styles.licenseInput,
                                                    {
                                                        // paddingTop: props.multiline ? 15 : undefined,
                                                        width: wp(50),
                                                        height: 56,
                                                        borderRadius: 6,
                                                    },
                                                ]}
                                                placeholderTextColor={theme.colors.border}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Box mt="l">
                                    <Text mb="l" variant="text5" color="text">
                                        Password
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"password"}
                                        control={control}
                                        placeholder={"********"}
                                        keyboardType="default"
                                        secured
                                    />
                                </Box>

                                <Box>
                                    <Text mb="l" variant="text5" color="text">
                                        Re-enter password
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"confirmPassword"}
                                        control={control}
                                        placeholder={"********"}
                                        keyboardType="default"
                                        secured
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ paddingTop: 30, paddingBottom: 50 }}>
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

export default ThirdMerchantSignUp;
