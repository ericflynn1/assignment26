let app = angular.module('NewsTrackerApp', []);

app.controller("newsController", function($scope, newsRefresh){
    $scope.news = newsRefresh.newNews();
    $scope.starred = function(){
        
    }
}





app.factory("newsService", function ($http) {
    let newsArticles = [];
    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news"
    }).then(function (response) {
        angular.copy(response.data.news, newsArticles);
    });
    return {
        newNews: function () {
            console.log(newsArticles);
            return newsArticles;
        }
    };
});

