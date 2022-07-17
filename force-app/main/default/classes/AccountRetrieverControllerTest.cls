@isTest
public with sharing class AccountRetrieverControllerTest {
    @TestSetup
    private static void makeData(){
        Account acc = new Account();
        acc.Name = 'teste@teste.com';
        insert acc;
    }

    @isTest
    private static void AccountRetrieverControllerTest1(){

        Test.startTest();
        AccountRetrieverController.getAccounts('Canada');
        Test.stopTest();
    }
}
