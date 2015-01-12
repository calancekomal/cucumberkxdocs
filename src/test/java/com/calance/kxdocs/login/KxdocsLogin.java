package com.calance.kxdocs.login;

import org.junit.Assert;

import com.calance.kxdocs.login.WebConnector;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class KxdocsLogin {
	
WebConnector application=new WebConnector();
	

	@Given("^I want to login to kxdocs on \"([a-zA-Z]{1,})\"$")
	public void gotokxdocs(String browserType) throws InterruptedException{
		System.out.println("Going to kxdocs on "+browserType);
		application.openBrowser(browserType);
		application.navigate("https://115.112.32.228:2525/app/");
		Thread.sleep(50);
	}
	
	@And("^I enter \"([a-zA-Z]{1,})\" as \"([^\"]*)\"$")
	public void input(String object,String data) throws InterruptedException{
		
		System.out.println("Entering in "+ application.OR.getProperty(object) +" value "+ data);
		Thread.sleep(50);
		application.input(object,data);
	}
	
	@And("^I click on \"([a-zA-Z]{1,})\"$")
	public void click(String object) throws InterruptedException{
		System.out.println("Clicking "+ object);
		application.click(object);
		Thread.sleep(30);
	}	
	
	@Then("^login should be \"([a-zA-Z]{1,})\"$")
	public void verifyLogin(String expectedReslt){
		System.out.println("Expected result  - "+ expectedReslt);
		Assert.assertTrue("true", application.isElementPresent("profileimage"));
		
		
	}
}


