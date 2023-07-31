//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SCREENS } from '../../../shared/constants';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';
import TransactionList, { transactionData } from '../../components/TransactionList';
import DashboardIcon from '../../svg/DashboardIcon';
import DashboardLogo from '../../svg/DashboardLogo';
import DefaultNotification from '../../svg/DefaultNotification';
import LeftDashboard from '../../svg/LeftDashboard';
import MessageIcon from '../../svg/MessageIcon';
import Notification from '../../svg/Notification';
import RefreshIcon from '../../svg/RefreshIcon';
import TransferMoneyIcon from '../../svg/TransferMoneyIcon';
import numberWithCommas from '../../utils/numbersWithCommas';

// create a component
const Dashboard = (): JSX.Element => {
    const { navigate, goBack } = useNavigation();
    const sheetRef = useRef<RBSheet>(null);

    const { control, watch, handleSubmit, setValue } = useForm({
        // defaultValues: "",
        // resolver: yupResolver(RegisterUserSchema),
        mode: "onChange",
        reValidateMode: "onChange",
    });

    return (
        <Box style={styles.container}>
            <Box>
                <StackHeader
                    onBackPress={() => goBack}
                    icon1={<DefaultNotification />}
                    onPressIcon1={() => navigate(SCREENS.Notification)}
                />
            </Box>
            <Box style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: wp(90), marginTop: -48 }}>
                <Box style={styles.image}>
                    <Image source={require("../../../assets/images/dashboard-image.png")} style={{ height: 38, width: 36 }} />
                </Box>
                <Box ml="l">
                    <Text variant="text6">Welcome Back, Joseph</Text>
                    <Text variant="text7" color="text3">What do you want to do today?</Text>
                </Box>
            </Box>

            <Box style={styles.content}>
                <Box style={styles.boardSpacing}>
                    <Box style={styles.board}>
                        <Box mt="xxl" style={{ zIndex: 10 }}>
                            <Text textAlign={"center"} variant="text8" color="text4">Wallet Balance</Text>
                            <Box mt="s" flexDirection={"row"} alignItems={"center"}>
                                <Text mt="s" variant="text3" color="bg">{`UGx`}</Text>
                                <Text ml="s" variant="title4" color="bg">{numberWithCommas(`245379.58`)}</Text>
                            </Box>
                        </Box>
                        <Box style={styles.pointBoard}>
                            <Text variant="title1" color="bg">{numberWithCommas(`1500`)}</Text>
                            <Text variant="text9" color="text4">Reward Points</Text>
                            <Box style={{ position: 'absolute', width: wp(55), paddingLeft: 5 }}>
                                <DashboardLogo />
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{ position: 'absolute', justifyContent: 'flex-start', width: wp(89), flexDirection: 'row', marginTop: 145 }}>
                        <LeftDashboard />
                    </Box>
                    <Box style={{ position: 'absolute', paddingRight: 30, paddingTop: 100, opacity: 0.26, }}>
                        <DashboardIcon />
                    </Box>

                </Box>

                <Box style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <ImageBackground style={styles.vatBg} source={require("../../../assets/images/vat-bg.png")}>

                    </ImageBackground> */}
                    <TouchableOpacity onPress={() => navigate(SCREENS.SubmitVATNav)} style={styles.vatBg}>
                        {/* <MessageIcon /> */}
                        <Text variant="text3" color="text2">Submit VAT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => sheetRef.current?.open()} style={styles.pointsBg}>
                        {/* <RefreshIcon /> */}
                        <Text variant="text3" color="text2">Convert Points</Text>
                    </TouchableOpacity>

                </Box>


                <TouchableOpacity onPress={() => navigate(SCREENS.Transfer)} style={styles.transactBg}>
                    <Text mr="l" variant="text3" color="text2">Transfer Money</Text>
                    {/* <TransferMoneyIcon /> */}
                </TouchableOpacity>
            </Box>

            <Box style={styles.footer}>
                <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Text mb="l" variant="text10" color="text2">Recent Transactions</Text>
                    <TouchableOpacity>
                        <Text mb="l" variant="text3" color="primary">View all</Text>
                    </TouchableOpacity>
                </Box>

                <Box style={{ height: 300 }}>
                    <FlatList
                        data={transactionData}
                        keyExtractor={(item) => item.id.toString()}
                        // showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TransactionList
                                    name={item.name}
                                    date={item.date}
                                    amount={item.amount}
                                />
                            )
                        }}
                    />
                </Box>
            </Box>
            <RBSheet
                ref={sheetRef as any}
                height={hp(55)}
                closeOnDragDown={false}
                closeOnPressBack
                openDuration={200}
                dragFromTopOnly
                customStyles={{
                    container: {
                        borderTopRightRadius: 50,
                        borderTopLeftRadius: 50,
                    },
                }}
                closeOnPressMask
            >

                <Box style={{ width: wp(100), alignItems: "center", paddingTop: 10 }}>
                    <Box style={styles.drawer} />
                    <Text variant="text10" color="text1">
                        Convert Points
                    </Text>
                    <Text textAlign={'center'} mt="s" variant="text1">You have
                        <Text variant="text1" color="primary">
                            {''} {numberWithCommas('1500')} {''}
                        </Text>reward points
                    </Text>

                    <Box style={{ marginTop: 25 }}>
                        <Text mb="l" variant="text5" color="text">
                            Enter Points
                        </Text>

                        <FormInput
                            type={"input"}
                            name={"points"}
                            control={control}
                            keyboardType={"number-pad"}
                            placeholder={"Points"}
                        />
                    </Box>

                    <Box style={{ marginTop: -20 }}>
                        <Text mb="l" variant="text5" color="text">
                            Amount in UGx
                        </Text>
                        <Box
                            style={[
                                styles.bottomTrayContainer,
                                {
                                    borderRadius: 10,
                                    height: 58,
                                },
                            ]}
                        >
                            <Box style={{ flexDirection: "row", alignItems: "center" }}>
                                <Box style={styles.bottomTrayBorder}>
                                    <Text variant="text5" color="text">
                                        UGx
                                    </Text>
                                </Box>

                                <Box style={{ paddingTop: 40, paddingLeft: 5 }}>
                                    <FormInput
                                        control={control}
                                        name={"amount"}
                                        type={"number"}
                                        placeholder={"Amount"}
                                        keyboardType="numeric"
                                        editable={false}

                                        style={[
                                            styles.bottomTrayInput,
                                            {
                                                // paddingTop: props.multiline ? 15 : undefined,
                                                width: wp(75),
                                                height: 14,
                                                borderRadius: 6,
                                            },
                                        ]}
                                        placeholderTextColor={theme.colors.text2}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box mt="xxl" pb="s">
                        <Button
                            type="primary"
                            label="Convert"
                            onPress={() => navigate(SCREENS.ConvertPointSuccess)}
                        />
                    </Box>
                </Box>
            </RBSheet>
        </Box >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.bg
    },
    content: {
        width: wp(90),
        marginTop: 26
    },
    image: {
        width: 38,
        height: 38,
        borderRadius: 9,
        backgroundColor: theme.colors.gray,
    },
    boardSpacing: {
        alignItems: 'center',
    },
    board: {
        width: wp(90),
        height: 197,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        // zIndex: 1,
    },
    pointBoard: {
        width: wp(55),
        height: 59,
        borderRadius: 33,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.bg2,
        marginTop: 27,
        zIndex: 10000,
    },
    vatBg: {
        height: hp(8),
        width: wp(44),
        backgroundColor: '#FFFADC',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#FFF195',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointsBg: {
        height: hp(8),
        width: wp(44),
        backgroundColor: '#DEECFF',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#B2D4FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactBg: {
        height: hp(8),
        width: wp(90),
        backgroundColor: '#E1FFED',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#B1EEC9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flexDirection: 'row'
    },
    footer: {
        marginTop: 33,
        width: wp(90)
    },
    drawer: {
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.border,
        backgroundColor: theme.colors.border,
        width: 80,
        borderRadius: 4,
        height: 4,
        alignItems: 'center',
        marginBottom: 16,

    },
    bottomTrayInput: {
        // paddingHorizontal: 15,
        fontFamily: "Gilroy-Regular",
        fontSize: 14,
    },
    bottomTrayContainer: {
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: 6,
        backgroundColor: theme.colors.bg1,
        zIndex: -100,
        opacity: 0.5
    },
    bottomTrayBorder: {
        borderRightColor: theme.colors.border,
        borderRightWidth: 1,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        zIndex: 1000
    },
});

//make this component available to the app
export default Dashboard;
