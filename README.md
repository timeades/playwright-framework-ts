# playwright-framework-ts
Skeleton set-up of framework, reporters, run environment, target browsers

# Running the tests
To run the tests use the commands: 

1. Open terminal of choice and navigate to the file you have the project in or in VSCode lauch     the terminal inside of the IDE   
2. In the terminal use the command npm i to install the test modules
3. In the same terminal window run the command 'npx playwright test'

As the tests cases grow, running locally would be split into seperate functional area to make debugging and re-running specific areas individulay easier and less time consuming.

The current configuration of the run file runs the tests against desktop browsers: Chromium, Firefox & Safari. They are also run against mobile web browsers Chrome & Safari on a Pixel 5, Galaxy S III, iPhone 12 & iPhone 6. These are set in playwright.config.ts

# Viewing the test results
Once the tests are run you can view the results running the command: 

'npx playwright show-report'

The current configuration for the test reporter is the default Playwright one. This could be updated depending on who needs access to results and the information required. Alternatives include [Allure](https://github.com/allure-framework/), [Monocart](https://cenfun.github.io/monocart-reporter/) etc.

Current test results view:
![Image of the test report page](/images/testResults.png)




