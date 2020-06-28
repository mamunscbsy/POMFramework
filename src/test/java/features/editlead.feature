Feature: Automate Leaftaps Application EditLead
	
	Scenario: TC004_EditLead
	Given Launch chrome browser and load url 
	And enter username as demosalesmanager 
	And enter password as crmsfa 
	And click the login button
	And click CRMSFA
	And click leads link
	When click Find Leads
	
	And enter firstname
	And click Find Leads button
	And click first resulting lead
	Then navigated ViewLeadPage
	And verify title of the page
	And click on Edit
	Then navigated Edit Lead page
	And change the company name
	And click update
	And confirm changed name appears
	And close browser
	
	