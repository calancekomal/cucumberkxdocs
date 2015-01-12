package com.calance.kxdocs.login;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class test {
	
	WebConnector application=new WebConnector();
	
	@Before("@web")
	@Given("^I want to get title$")
	public void gettitle() throws InterruptedException{
		System.out.println("Get title");
		
	}
	
	@And("^I get title$")
	public void get() throws InterruptedException{
		
		System.out.println("Entering in ");
		
	}

}
