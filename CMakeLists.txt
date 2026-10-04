# Minimum CMake version required
cmake_minimum_required(VERSION 3.14)

project(loopster VERSION 1.0.0 LANGUAGES NONE)

# Specify the script file to be installed
set(LOOPSTER_NAME "loopster")
set(LOOPSTER_PATH "${CMAKE_CURRENT_SOURCE_DIR}/${LOOPSTER_NAME}")

# Install the script to a destination directory
install(PROGRAMS ${LOOPSTER_PATH} 
    DESTINATION bin
    PERMISSIONS OWNER_READ OWNER_WRITE OWNER_EXECUTE GROUP_READ GROUP_EXECUTE WORLD_READ WORLD_EXECUTE
)

# Install the man page with proper section handling
install(
    FILES ${CMAKE_CURRENT_SOURCE_DIR}/man/loopster.1
    DESTINATION share/man/man1
    COMPONENT Runtime
)

# --------------------------------------------------------------
# CPack Packaging Configuration (.tar.gz and .deb packages)
# --------------------------------------------------------------
set(CPACK_PACKAGE_NAME "loopster")
set(CPACK_PACKAGE_VENDOR "Joshua Edward McLaughlin Cox")
set(CPACK_PACKAGE_DESCRIPTION_SUMMARY "Intelligent CLI & Bash Loop Automation Tool")
set(CPACK_PACKAGE_VERSION_MAJOR 1)
set(CPACK_PACKAGE_VERSION_MINOR 0)
set(CPACK_PACKAGE_VERSION_PATCH 0)
set(CPACK_RESOURCE_FILE_LICENSE "${CMAKE_CURRENT_SOURCE_DIR}/LICENSE")
set(CPACK_PACKAGE_CONTACT "josh@webhosting.coop")
set(CPACK_GENERATOR "TGZ;DEB")
set(CPACK_DEBIAN_PACKAGE_MAINTAINER "Joshua Edward McLaughlin Cox <josh@webhosting.coop>")
set(CPACK_DEBIAN_PACKAGE_SECTION "utils")
set(CPACK_DEBIAN_PACKAGE_DEPENDS "bash (>= 4.0), util-linux")

include(CPack)

message(STATUS "Install prefix: ${CMAKE_INSTALL_PREFIX}")
message(STATUS "Binary will be installed to: ${CMAKE_INSTALL_PREFIX}/bin")
message(STATUS "Man page will be installed to: ${CMAKE_INSTALL_PREFIX}/share/man/man1")
