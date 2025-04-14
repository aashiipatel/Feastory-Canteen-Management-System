var app = angular.module("menu", []);
app.controller("menuController", function ($scope) {
   async function menu() {
      $scope.menuList = {}
      const { data, error } = await supabase
         .from('Menu')
         .select();
         $scope.menuList = data;
      console.log($scope.menuList);
   }
   menu()
})
