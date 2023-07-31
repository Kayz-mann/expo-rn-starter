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
import { goBack } from "react-navigation-helpers";
import { SCREENS } from "../../../shared/constants";
import { useAppDispatch } from "../../../store/hooks";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import FormInput from "../../components/FormInput";
import LoadingIndicator from "../../components/LoadingIndicator";
import { PickerForm } from "../../components/Picker";
import StackHeader from "../../components/StackHeader";
import theme, { Box, Text } from "../../components/Theme";
import QRIcon from "../../svg/QRIcon";




export const bankData = ["", "Citi Bank", "XCEL", "United Bank of Africa",].map((i) =>
    i.toUpperCase());


export const locationData = ["", "Kampala", "Entebbe", "Jinja"].map((i) =>
    i.toUpperCase());



const Transfer = (): JSX.Element => {
    const dispatchApp = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const { navigate } = useNavigation();
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

    return (
        <KeyboardAwareScrollView>
            <ScrollView style={{ flex: 1 }}>
                <Box style={styles.container}>
                    <KeyboardAvoidingView style={{ alignItems: "center" }}>
                        <Box>
                            <StackHeader
                                onBackPress={() => goBack()}
                                title="Transfer Money"
                            />
                        </Box>

                        <Box style={{ width: wp(90), alignContent: 'center' }}>


                            <Box style={{ marginTop: 30 }}>

                                <Box mt="xl">
                                    <Text mb="l" variant="text5" color="text">
                                        Amount
                                    </Text>
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
                                            <Box style={styles.inputBorder}>
                                                <Text variant="text5" color="text">
                                                    UGx
                                                </Text>
                                            </Box>

                                            <Box style={{ paddingTop: 40, paddingLeft: 5 }}>
                                                <FormInput
                                                    control={control}
                                                    name={"vatAmount"}
                                                    type={"number"}
                                                    placeholder={"VAT Amount"}
                                                    keyboardType="numeric"
                                                    style={[
                                                        styles.licenseInput,
                                                        {
                                                            width: wp(50),
                                                            height: 14,
                                                            borderRadius: 6,
                                                        },
                                                    ]}
                                                    placeholderTextColor={theme.colors.border}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box mt="l">
                                    <PickerForm
                                        label={t("Select Bank")}
                                        placeholder={t("Select bank")}
                                        value={watch("bank")}
                                        setValue={(e) => {
                                            setValue("bank", e);
                                        }}
                                        data={bankData.map((i) => ({ label: i, value: i }))}
                                        control={control}
                                        name={"country"}
                                    />
                                    {/* <Text variant="text2" color="error">
                                                {countryTypeError}
                                            </Text> */}
                                </Box>



                                <Box mt="l">
                                    <Text mb="l" variant="text5" color="text">
                                        Account Number
                                    </Text>

                                    <FormInput
                                        type={"input"}
                                        name={"accountNumber"}
                                        control={control}
                                        keyboardType={"number-pad"}
                                        placeholder={"Account number"}
                                    />
                                </Box>

                                <Box mt="l">
                                    <Text mb="l" variant="text5" color="text">
                                        Reason (Optional)
                                    </Text>

                                    <FormInput
                                        type={"input"}
                                        name={"reason"}
                                        control={control}
                                        keyboardType={"number-pad"}
                                        placeholder={"Type message..."}
                                    />
                                </Box>

                            </Box>
                        </Box>
                        <Box style={{ paddingTop: 30, paddingBottom: 50 }}>
                            <Button
                                type="primary"
                                label="Proceed"
                                onPress={() => navigate(SCREENS.EnterPin)}
                            />
                        </Box>

                        <Box style={{ paddingBottom: 50, width: wp(90) }}>
                            <Text variant="text3" color="text1">Beneficiaries</Text>
                            <Box mt="xxxl">
                                <Text textAlign={'center'} variant="text5" color="text">No Beneficiaries Found!</Text>
                            </Box>
                        </Box>
                    </KeyboardAvoidingView>
                </Box >
            </ScrollView >
            <LoadingIndicator isLoading={loading} />
        </KeyboardAwareScrollView >
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

export default Transfer;
