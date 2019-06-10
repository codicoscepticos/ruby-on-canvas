@echo off
setlocal enableDelayedExpansion
type NUL > %1.%2
for %%x in (*.%2) do (
    copy /b %1.%2 + "%%x" %1.%2
)
REM >nul findstr "^" "yourFileName" || del "yourFileName"