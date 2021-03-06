REM @echo off
setlocal enableDelayedExpansion

REM Code #1: Check if the Opal gem is installed. If not, then install it.
REM If the Opal gem is not installed, Code #2 will not work.

set opalexists=
for /f "delims=" %%a in ('gem query --name-matches '^opal$' --installed'') do @set opalexists=%%a
if %opalexists%==false (
	gem install opal --no-ri --no-rdoc
)
pause
REM Code #2: Compile and create the appropriate JS files,
REM based on the user-created Ruby files.

for %%f in (*.rb) do (
	opal -c %%f 1>%%~nf.js
)