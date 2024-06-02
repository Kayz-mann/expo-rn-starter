# Wallet Viewer

This application basically interacts with the Solana blockchain and allows users view wallet balances and transactions.

# App Function

Enter the wallet address in the input field and click view to see the list of transactions available.

You have extra options to view more transactions, mask wallet balance and copy wallet address...

please note the app runs on yarn package manager && expo-dev-client. You will need to install a developement build by following the instructions below.

To run the app locally, clone the repo and install dependencies with `yarn` (**yarn.lock** was generated with Yarn v1). Next, [build and run it with EAS](#build-and-run-with-eas).

## Compile and run locally

To compile the app locally, you will need to have Xcode ([learn more](https://docs.expo.dev/guides/local-app-development/#ios)) and/or Android ([learn more](https://docs.expo.dev/guides/local-app-development/#android)) toolchains installed and configured.

In order to run a build with EAS, you will need to update the EAS owner and project ID fields in **app.json**. Change the `extra.eas.projectId` to empty strings, then run `eas init` and `eas update:configure` to get the new values for your username (never used EAS before? [look at this guide](https://docs.expo.dev/build/setup/)).

### Android

```sh
# Create a development build. When it's completed, you will be prompted to install it
eas build --profile development-simulator --platform android
# Create a preview build. This is like a production build, but intended to be
# installed directly to your device
eas build --platform android --profile production:ci
```

### iOS

```sh
# Create a development build. When it's completed, you will be prompted to install it
eas build --profile development-simulator --platform ios
# Create a preview build. This is like a production build, but intended to be
# installed directly to your device
eas build --platform ios --profile production:ci
```
