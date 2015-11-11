Meteor.subscribe("posts");
Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");


Meteor.startup(function () {
  AccountsEntry.config({
    wrapLinks: true,
    homeRoute:'/',
    dashboardRoute: '/',
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    waitEmailVerification: false
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
});

Template.registerHelper('getProfileImg', function (userId){
  var imgUrl = UserImages.findOne({userId: userId}).image;
  return imgUrl;
});
