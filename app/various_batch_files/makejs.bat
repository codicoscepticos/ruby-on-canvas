@echo off
setlocal enableDelayedExpansion
call rb2js.bat
pause
call copy.bat build js
@echo "All done!"
pause