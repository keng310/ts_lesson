// お勉強
class Menu {
  items: Array<string>;
  pages: number

  constructor(item_list: Array<string>, total_pages: number) {
    this.items = item_list;
    this.pages = total_pages;
  }

  // Method
  list(): void {
    console.log('our menu for today:');
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

// Menuクラスのインスタンスを作成する
var todayList: string[] = ['pancakes', 'waffles', 'orange juice'];
var sundayMenu = new Menu(today_list, 1)

// メソッドを呼ぶ
sundayMenu.list();

// ここはよくわからん。そのうちわかればいい。
class HappyMeal extends Menu {
  constructor(item_list: Array<string>, total_pages: number) {
    super(item_list, total_pages);
  }
}

var todayHappyList: string[] = ['candy', 'drink', ''toy]
var menu_for_children = new HappyMeal(todayHappyList, 1)

menu_for_children.list();
