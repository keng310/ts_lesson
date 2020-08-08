var Menu = (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    // Method
    Menu.prototype.list = function () {
        console.log('our menu for today:');
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
})();
// Menuクラスのインスタンスを作成する
var today_list = ['pancakes', 'waffles', 'orange juice'];
var sundayMenu = new Menu(today_list, 1);
// メソッドを呼ぶ
sundayMenu.list();
