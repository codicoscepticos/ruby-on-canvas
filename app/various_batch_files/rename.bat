@echo off
setlocal enableDelayedExpansion

for %%f in (*rb.js) do (
	set "name=%%f"
	ren "!name!" "!name:.rb.=.!"
)

PAUSE