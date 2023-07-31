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


export const categoryData = ["", "Agriculture", "Logistics", "Telecommunication", "Information Technlogy"].map((i) =>
    i.toUpperCase());

export const entityData = ["", "Government", "Private", "Non Govermental Organization"].map((i) =>
    i.toUpperCase());

const SecondMerchantSignUp = ({
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
                                Business Details and Entity{'\n'}Type
                            </Text>

                            <Box style={{ marginTop: 30 }}>

                                <Box>


                                    <Box mt="s">
                                        <PickerForm
                                            label={t("Business category")}
                                            placeholder={t("Select category")}
                                            value={watch("businessCategory")}
                                            setValue={(e) => {
                                                setValue("businessCategory", e);
                                            }}
                                            data={categoryData.map((i) => ({ label: i, value: i }))}
                                            control={control}
                                            name={"businessCategory"}
                                        />
                                        {/* <Text variant="text2" color="error">
                                                {businessypeError}
                                            </Text> */}
                                    </Box>

                                </Box>

                                <Box>
                                    <Box mt="s">
                                        <PickerForm
                                            label={t("Entity type")}
                                            placeholder={t("Select type")}
                                            value={watch("entityType")}
                                            setValue={(e) => {
                                                setValue("entityType", e);
                                            }}
                                            data={entityData.map((i) => ({ label: i, value: i }))}
                                            control={control}
                                            name={"entityType"}
                                        />
                                        {/* <Text variant="text2" color="error">
                                                {entityTypeError}
                                            </Text> */}
                                    </Box>
                                </Box>

                                <Box>
                                    <Text mb="l" variant="text5" color="text">
                                        Nature of business
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"natureOfBusiness"}
                                        control={control}
                                        placeholder={"Nature of Business"}
                                    />
                                </Box>

                                <Box>
                                    <Text mb="l" variant="text5" color="text">
                                        TIN
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"tin"}
                                        control={control}
                                        placeholder={"Enter TIN"}
                                        keyboardType="number-pad"
                                    />
                                </Box>

                                <Box>
                                    <Text mb="l" variant="text5" color="text">
                                        VAT number
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"vat"}
                                        control={control}
                                        placeholder={"Enter VAT number"}
                                        keyboardType="number-pad"
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

export default SecondMerchantSignUp;
