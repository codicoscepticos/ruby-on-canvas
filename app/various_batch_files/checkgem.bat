set opalexists=
for /f "delims=" %%a in ('gem query --name-matches '^opal$' --installed'') do @set opalexists=%%a
echo %opalexists%
if %opalexists%=="false" (
	gem install opal --no-ri --no-rdoc
)