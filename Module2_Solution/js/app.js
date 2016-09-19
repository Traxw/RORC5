/**
 * Created by tlo on 9/19/2016.
 */

(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var showList = this;

        showList.items = ShoppingListCheckOffService.getToBuyItems();

        showList.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.transferItem(itemIndex);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var showList = this;

        showList.items = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [{name: 'Milk', quantity: '1 gal'}, {name: 'Cereal', quantity: '1 box'},
            {name: 'Potatoes', quantity: '1 bag'}, {name: 'Orange Juice', quantity: '1 64oz bottle'},
            {name: 'Bagels', quantity: '1 dozen'}];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.transferItem = function (itemIndex) {

            boughtItems.push(toBuyItems[itemIndex]);

            toBuyItems.splice(itemIndex, 1);
        };
    }
})();