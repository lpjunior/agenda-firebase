@echo off
echo Atualizando caminhos...

set "ANDROID_SDK_ROOT=%localappdata%\Android\Sdk"

set "PATH=%APPDATA%\npm;%~dp0;%PATH%;%ANDROID_SDK_ROOT%\tools;%ANDROID_SDK_ROOT%\platform-tools;C:\gradle\bin;%ANDROID_SDK_ROOT%\tools\bin"

sdkmanager && sdkmanager --list && sdkmanager "platform-tools" && sdkmanager "platforms;android-30" && sdkmanager "build-tools;30.0.3" && sdkmanager && sdkmanager --licenses

Android virtual device Pixel_3a_API_30_x86 was successfully created
emulator -avd Pixel_API_30