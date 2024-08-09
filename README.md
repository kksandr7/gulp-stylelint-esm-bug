# Expected behavior:
1. `yarn run gulp` - expects that there will be no `dist` folder if there is an error in the code and `failAfterError: true` is specified.
2. `./some-deploy.sh` - expects that gulp will return exit code `1` and the script execution will be interrupted.