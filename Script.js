var myapp=angular.module("MyApp",['ngAnimate']);  //modules

myapp.value("username","Hiii");

myapp.controller("FirstController",function($scope,$timeout,username)    //dirctives
{
    var item=[
        {image: 'https://assets.winni.in/product/primary/2023/1/82069.jpeg?dpr=1&w=400',name:"Led Temperature Bottle"},
        {image: 'https://assets.winni.in/product/primary/2024/1/92860.jpeg?dpr=1&w=400',name:"Love Story Caricalture"},
        {image: 'https://assets.winni.in/product/primary/2024/1/92900.jpeg?dpr=1&w=400',name:"Loyal Love Personalised LED Lamp"},
        {image: 'https://assets.winni.in/product/primary/2023/2/83065.jpeg?dpr=1&w=400',name:"2D Heart KeyChain"},    
    ];
    $scope.gifts=item;

    var items=[
        {image: 'https://assets.winni.in/product/primary/2021/10/55075.png?dpr=1&w=400',name:"Signature Style Couple Necklace"},
        {image: 'https://assets.winni.in/product/primary/2023/1/81028.jpeg?dpr=1&w=400',name:"Photo Puzzle Frame"},
        {image: 'https://assets.winni.in/product/primary/2023/8/87997.jpeg?dpr=1&w=400',name:"Rose Radience Personalised Bracele"},
        {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNQL7pQPcj4tafYF4qKHce3EZk8hV0ja82w&s',name:"Show Piece"},    
    ];
    $scope.giftss=items; 
    
    $scope.heading="MY LOVE";  //services
    $timeout(function()
    {
        $scope.heading="GIFTS YOU DREAM";
    },2000);

    $scope.disp = function()  //injection
    {
        alert(username);
    };

    $scope.toggleGifts = function() {
        $scope.showGifts = !$scope.showGifts;
        $scope.showGiftss = !$scope.showGiftss;
    };
});