package com.calance.kxdocs.login;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.calance.kxdocs.login.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.Before;

public class KxdocsLogout {
	
WebConnector application=new WebConnector();
	
	@Before("@web")
	public void initialize() {
	    
	}
	
	@Given("^I am logged in KXdocs")
	public void VerifyKXDocsHomePageLoaded() throws Exception
	{
		System.out.println("Is KXDocs HomePage Loaded");
		application.IsKXDocsHomePageLoaded();
	}
	
	@And("^click on button \"([a-zA-Z]{1,})\"$")
	public void clickById(String object) throws InterruptedException{
		System.out.println("Clicking "+ object);
		application.clickById(object);
		Thread.sleep(50);
	}	
		
	@Then("^logout should be \"([a-zA-Z]{1,})\"$")
	public void verifyLogin(String expectedReslt){
		System.out.println("Expected result  - "+ expectedReslt);
		Assert.assertTrue("true", application.IsElementDisplayed(By.linkText(application.OR.getProperty("WelcomePageLink")), WebConnector.driver));
	}
}


