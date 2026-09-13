$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$runtime = Get-ChildItem -LiteralPath "$PSScriptRoot/.tools" -Directory -Filter 'node-*-win-x64' -ErrorAction SilentlyContinue | Select-Object -First 1
if ($runtime) { $env:PATH = "$($runtime.FullName);$env:PATH" }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Install Node.js 22.12 or later before starting the site.' }
npm.cmd run dev
