@isTest
public with sharing class CountryCodeHelperTest {

    @isTest
    private static void CountryCodeHelperTest1(){

        Test.startTest(); 
        CountryCodeHelper.getCountryCode('Canada');
        Test.stopTest();
    }
}