package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import cucumber.api.java.en.Given;
import wrapper.ProjectSpecificWrapper;

public class LoginPage extends ProjectSpecificWrapper{
	
	
	//@Given("enter username as (.*)")
	public LoginPage enterUserName(String uName){
		enterByName("USERNAME", uName);
		return this;
	}

	//@Given("enter password as (.*)")
	public LoginPage enterPassword(String pwd) {
		enterById("password", pwd);
		return this;
	}
	
	public HomePage clickLogin() {
		clickByXpath("//input[@value='Login']");
		return new HomePage();
	}
}
