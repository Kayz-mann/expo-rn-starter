// import i18next from "i18next";
// import React, { useCallback, useEffect } from "react";
// import { useApi } from "src/hooks/useApi";
// import useDefaultQuery from "src/hooks/useDefaultQuery";
// import { AllDataTypes, DriverDto, PoliceDto } from "swagger/services";
// import Environment from "../../shared/Environment";
// import { setUserInfo } from "../../store/auth";
// import { Error, setIsReady } from "../../store/global";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { useAppState } from "../hooks/useAppState";

// /**
//  * Component that initializes the app.
//  * The redux store is already initialized and can be used here.
//  */
// const AfterNavigationIntitializer = () => {
//   const { isReady, userType } = useAppSelector((state) => state.global);
//   const { token, userInfo } = useAppSelector((state) => state.auth);
//   const dispatchStore = useAppDispatch();
//   const api = useApi();

//   const callback = useCallback(() => {
//     if (userType === "police") {
//       return api()
//         .UserService.policeDetail({
//           headers: {
//             Authorization: `Bearer ${token?.accessToken}`,
//           },
//         } as any)
//         .then((result) => {
//           dispatchStore(setUserInfo(result.data as PoliceDto));
//           dispatchStore(setIsReady(true));
//         })
//         .catch(() => {});
//     }

//     return api()
//       .UserService.driverDetail({
//         headers: {
//           Authorization: `Bearer ${token?.accessToken}`,
//         },
//       } as any)
//       .then((result) => {
//         dispatchStore(setUserInfo(result.data as DriverDto));
//         dispatchStore(setIsReady(true));
//       })
//       .catch((e: Error) => {
//         console.log(e.response.data);
//       });
//   }, [userType, token?.accessToken]);

//   const { refetch: refetchMe } = useDefaultQuery(
//     ["me", userInfo, token],
//     () => (token ? callback() : Promise.resolve()),
//     {
//       enabled: !!token && isReady,
//       onError: (e) => {
//         console.log(e, " error getting user details");
//       },
//     }
//   );

//   useEffect(() => {
//     i18next.changeLanguage(Environment.defaultLanguage);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [i18next]);

//   useAppState(
//     (state) => {
//       if (isReady && state === "active") {
//         refetchMe();
//       }
//     },
//     [isReady]
//   );

//   useEffect(() => {
//     if (token) {
//       refetchMe();
//     }

//     dispatchStore(setIsReady(true));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token, refetchMe]);

//   return <></>;
// };

// export default AfterNavigationIntitializer;
