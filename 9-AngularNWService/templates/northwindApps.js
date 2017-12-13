var app = angular.module('northwindApp', ['angularUtils.directives.dirPagination']);

app.service('northwindService', function ($http) {

    this.getAllProducts = function () {
        console.log("getAllProducts")
        var productList = $http({
            method: 'Get',
            url: 'Product/Index'
        }).then(function (response) {
            console.log(response);
            console.log(response.data.productList);
            console.log(response.data.clist);
            return response.data;

            })
        return productList;
      //  return products;
    }
    this.getByProductID = function (ProductID) {
        var product = $http({
            method: 'GET',
            url: 'Product/Detay',
            params: { id: ProductID }
        }).then(function (response) {
            return response.data;

        });
        return product;
    }
    this.updateProduct = function (productgelen) {
        console.log("update başı")
        var product = $http({
            method: 'POST',
            url: 'Product/Guncel',
            data: productgelen
        }).then(function (response) {
            return response.data;
        })
        return product;
    }
    this.addProduct = function (productgelen) {
        var product = $http({
            method: 'POST',
            url: 'Product/Ekle',
            data: productgelen
        }).then(function (response) {
            return response.data;
        })
        return product
    }
    this.deleteProductByID = function (ProductID) {
        var product = $http({
            method: 'POST',
            url: 'Product/Sil',
            params: { id: ProductID }

        }).then(function (response) {
            return (response.data)
        });
        return product;
    }
})


app.controller('productsController', function ($scope, northwindService) {
    $scope.GetAllproducts = function () {
        northwindService.getAllProducts().then(function (result) {
            $scope.productList = result.productList;
            $scope.clist = result.clist;
            $scope.slist = result.slist;
        });
    }

    $scope.GetByProductID = function (ProductID) {
        northwindService.getByProductID(ProductID).then(function (result) {
            $scope.product = result;
            console.log(result)
        });
    }

    $scope.UpdateProduct = function (product) {
        console.log("Update Başı")
        northwindService.updateProduct(product).then(function (result) {
            $scope.Msg = result.ProductName + "Başarılı Bir şekilde Güncellendi";
            $scope.GetAllproducts()
        });
    }
    $scope.AddProduct = function (product) {
        northwindService.addProduct(product).then(function (result) {
            $scope.Msg = result.ProductName + "Başarılı bir Şekilde Eklendi";
            $scope.GetAllproducts()
        });
    }
    $scope.DeleteByProductID = function (ProductID) {
        northwindService.deleteProductByID(ProductID).then(function (result) {
            $scope.Msg = result.ProductName + "Başarılı bir Şekilde Silindi";
            $scope.GetAllproducts()
        });
    }
})