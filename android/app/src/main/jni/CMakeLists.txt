cmake_minimum_required(VERSION 3.13)

# Define the source files for the native library
set(SOURCE_FILES OnLoad.cpp)

# Add the native library
add_library(MyNativeLibrary SHARED ${SOURCE_FILES})

# Specify the include directories for this library
include_directories(${CMAKE_SOURCE_DIR}/src/main/cpp/include)

# Link libraries required for this project
find_library(log-lib log)
target_link_libraries(MyNativeLibrary ${log-lib})
