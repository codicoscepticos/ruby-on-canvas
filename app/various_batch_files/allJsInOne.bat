@echo off
setlocal enableDelayedExpansion

REM Copy the contents of the compiled and created JS files by rb2js.bat,
REM into one single file named build.js. This will be used for the relative HTML
REM file, to run the project on the default browser of the user.

type NUL > build.js
for %%x in (*.js) do (
    copy /b build.js + "%%x" build.js
)

REM The code below is for deleting empty files. Not enabled.
REM >nul findstr "^" "yourFileName" || del "yourFileName"