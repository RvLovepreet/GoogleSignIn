# Install script for directory: /Users/chicmic/Desktop/reactnative/cloneProject/GoogleSignIn/node_modules/react-native/ReactAndroid/cmake-utils/default-app-setup

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/usr/local")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Debug")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "0")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "TRUE")
endif()

# Set default install directory permissions.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "/Users/chicmic/Library/Android/Sdk/ndk/23.1.7779620/toolchains/llvm/prebuilt/darwin-x86_64/bin/llvm-objdump")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("/Users/chicmic/Desktop/reactnative/cloneProject/GoogleSignIn/android/app/.cxx/Debug/5t5u2b5k/x86_64/rngesturehandler_codegen_autolinked_build/cmake_install.cmake")
  include("/Users/chicmic/Desktop/reactnative/cloneProject/GoogleSignIn/android/app/.cxx/Debug/5t5u2b5k/x86_64/reactnativemmkv_autolinked_build/cmake_install.cmake")
  include("/Users/chicmic/Desktop/reactnative/cloneProject/GoogleSignIn/android/app/.cxx/Debug/5t5u2b5k/x86_64/RNCViewPager_autolinked_build/cmake_install.cmake")
  include("/Users/chicmic/Desktop/reactnative/cloneProject/GoogleSignIn/android/app/.cxx/Debug/5t5u2b5k/x86_64/safeareacontext_autolinked_build/cmake_install.cmake")
  include("/Users/chicmic/Desktop/reactnative/cloneProject/GoogleSignIn/android/app/.cxx/Debug/5t5u2b5k/x86_64/rnscreens_autolinked_build/cmake_install.cmake")

endif()

if(CMAKE_INSTALL_COMPONENT)
  set(CMAKE_INSTALL_MANIFEST "install_manifest_${CMAKE_INSTALL_COMPONENT}.txt")
else()
  set(CMAKE_INSTALL_MANIFEST "install_manifest.txt")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
file(WRITE "/Users/chicmic/Desktop/reactnative/cloneProject/GoogleSignIn/android/app/.cxx/Debug/5t5u2b5k/x86_64/${CMAKE_INSTALL_MANIFEST}"
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")
