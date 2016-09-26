let app = angular.module('NewsTrackerApp', []);

app.controller("newsController", function ($scope, newsService) {
    $scope.news = newsService.newNews();
    
});




app.factory("newsService", function ($http) {
    let newsArticles = [];
    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news"
    }).then(function (response) {
        angular.copy(response.data.news, newsArticles);
    });
    // Scott Helped me out with this
    return {
        newNews: function () {
            console.log(newsArticles);
            return newsArticles;
        },
        star: function (id) {
            for (let i = 0; i < newsArray.length; i++) {
                if (id === newsArray[i].id) {
                    newsArray[i].starred = true;
                } else {
                    newsArray[i].starred = false;
                }
            }
        }

    }
});

