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
import TrailingArrow from "../../svg/TrailingArrow";
import numberWithCommas from "../../utils/numbersWithCommas";




export const bankData = ["", "Citi Bank", "XCEL", "United Bank of Africa",].map((i) =>
    i.toUpperCase());


export const locationData = ["", "Kampala", "Entebbe", "Jinja"].map((i) =>
    i.toUpperCase());



const EnterPin = (): JSX.Element => {
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
                                title="Enter PIN"
                            />
                        </Box>

                        <Box style={{ width: wp(90), alignContent: 'center', alignItems: 'center' }}>
                            <Box style={styles.sendBg}>
                                <Box flexDirection="row" alignItems="center">
                                    <Box style={styles.greenMarker} />
                                    <Text variant="text2" color="text" ml="l">You are sending </Text>
                                    <Text variant="text2" color="bg4">UGx {numberWithCommas(`2530`)}</Text>
                                </Box>
                            </Box>
                            <Box style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp(80), alignItems: 'center' }}>
                                <TrailingArrow />
                                <TrailingArrow />

                            </Box>
                            <Box style={styles.recieveBg}>
                                <Box mb="s" flexDirection="row" alignItems="center">
                                    <Box style={styles.redMarker} />
                                    <Text ml="l" variant="text2" color="text">To</Text>
                                </Box>
                                <Box ml="xxl">
                                    <Text variant="text2" color="text">CitiBank, {`1234567890`}</Text>
                                    <Text variant="text2" color="text">Joseph Akello</Text>
                                </Box>
                            </Box>
                            <Box mt="xxl">
                                <Text mb="l" variant="text5" color="text">
                                    Enter PIN
                                </Text>

                                <FormInput
                                    type={"input"}
                                    name={"reason"}
                                    control={control}
                                    keyboardType={"default"}
                                    secured
                                    placeholder={"******"}
                                />
                            </Box>

                        </Box>
                        <Box style={{ paddingTop: 30, paddingBottom: 50 }}>
                            <Button
                                type="primary"
                                label="Send"
                                onPress={() => navigate(SCREENS.TransferSuccess)}
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
    sendBg: {
        width: wp(90),
        height: 72,
        backgroundColor: theme.colors.bg3,
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 50
    },
    greenMarker: {
        width: 19,
        height: 19,
        borderRadius: 50,
        backgroundColor: theme.colors.bg4
    },
    redMarker: {
        width: 19,
        height: 19,
        borderRadius: 50,
        backgroundColor: theme.colors.bg5
    },
    recieveBg: {
        width: wp(90),
        height: 121,
        backgroundColor: theme.colors.bg3,
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 20,
        // marginTop: 50
    },




});

export default EnterPin;
