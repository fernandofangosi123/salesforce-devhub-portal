public without sharing class TilesController {

    @AuraEnabled
    public static String getCurrentUserName(String userId){
        User loggedUser = [SELECT Name FROM User WHERE Id = :userId LIMIT 1];

        System.debug('loggedUser----> '+loggedUser);

        return loggedUser.Name;
    }
}