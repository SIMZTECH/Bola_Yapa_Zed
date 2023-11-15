#Project Model Structure, Actors and Use-Cases 

<!-- Actors -->
1. User{fan,admin}
2. Manager

<!-- Use cases -->
1. Manager{
    Create/Delete Account,  
    Register Football Team, 
    Post Matches, 
    Post lineups,
    Post Team News
}

2. Fan{
    Create/Delete Account/Update Account,
    View Matches/Fixures,
    Like Events,
    Post Analystics/Predict Game OutCome,
    Comment Team performance,
    View Points earned from analytics
}

3. Admin{
    approve/deactivate User/Manager Accounts,
    post events,adverts
    improve performance
}

<!-- models  -->
1. user-model(fan,admin,manager).
2. manager-model(team coach).
3. comments-model
4. team-model
5. fixtures
6. analytics
8. events{}