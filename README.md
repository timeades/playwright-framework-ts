# playwright-framework-ts
Skeleton set-up of framework, reporters, run environment, target browsers

# Running the tests
To run the tests use the command: 

'npx playwright test'

As the tests cases grow, running locally would be split into seperate functional area to make debugging and re-running specific areas individulay easier and less time consuming.

The current configuration of the run file runs the tests against desktop browsers: Chrome, Firefox & Safari. They are also run against mobile web browsers Chrome & Safari on a Pixel 5 & iPhone 12

# Viewing the test results
Once the tests are run you can view the results running the command: 

'npx playwright show-report'

The current configuration for the test reporter is the default Playwright one. This could be updated depending on who needs access to results and the information required. Alternatives include Allure, Monocart etc.

Current test results view:
![Image of the test report page](/images/testResults.png)




