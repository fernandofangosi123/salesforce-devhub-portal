@isTest
public with sharing class TilesControllerTest {

    @TestSetup
    private static void makeData(){
        User u = new User();
        u.Email = 'teste@teste.com';
        u.LastName = 'Teste';
        u.ProfileId = [SELECT Id FROM Profile WHERE Profile.Name LIKE '%Admin%' LIMIT 1].Id;
        insert u;
    }
    
    @isTest
    private static void TilesControllerTest1(){

        Test.startTest();
        TilesController.getCurrentUserName([SELECT Id FROM User LIMIT 1].Id);
        Test.stopTest();
    }
}
