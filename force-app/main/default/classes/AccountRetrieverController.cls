public without sharing class AccountRetrieverController {

    @AuraEnabled
    public static List<Account> getAccounts(String reportedName){
        List<Account> listAccount = new List<Account>();

        String nameFormatted = '%'+String.escapeSingleQuotes(reportedName)+'%';

        listAccount = [SELECT Id, 
                       Name, 
                       Industry 
                       FROM Account
                       WHERE Name LIKE :nameFormatted
                       WITH SECURITY_ENFORCED];

        return listAccount;
    }

}