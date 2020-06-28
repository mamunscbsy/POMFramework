package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/features",
				glue="steps",
				plugin = {"html: reports"},
				strict = false,//it shows all pending Step Definitions
				dryRun = false, //check the mapping step definition is missing or not
				monochrome = true // display/generate readable output/report we use monochrome 
				//tags = {"@functional"}
								
				//snippets = SnippetType.CAMELCASE
				)

public class RunnerFile extends AbstractTestNGCucumberTests {
	

}
