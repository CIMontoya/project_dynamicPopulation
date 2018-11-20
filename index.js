var donutCards = [
  {
    img: 'buttermilk.old.fashioned.png',
    name: 'Buttermilk Old Fashined',
    description: 'Good ye old donut - For the taste buds of the old fashioned mouth',
    allergies: 'Dairy, Gluten',
    link: 'http://doritedonuts.com/'
  },
  {
    img: 'candied_maple_bacon.png',
    name: 'Candied Maple Bacon',
    description: 'Daring, adventure and bacon',
    allergies: 'Dairy, Gluten, bacon(non-V) ',
    link: 'http://doritedonuts.com/'
  }, {
    img: 'cheese_danish.png',
    name: 'Cheese Danish',
    description: 'Donut be so cheesy, let the danish do the talking',
    allergies: 'Dairy, Gluten ',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'choco.cake.png',
    name: 'Chocolate Cake',
    description: 'Peice a cake...in a donut. Enough Said',
    allergies: 'Dairy, GlutenDairy, Gluten ',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'choco.glazed.png',
    name: 'Chocolate Glazed',
    description: 'Chocolate donut...but covered in chocolate',
    allergies: 'Dairy, Gluten ',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'old.fashioned.choco.png',
    name: 'Old Fashioned Chocolate',
    description: 'Classic taste with a chocolate glaze',
    allergies: 'Dairy, Gluten ',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'pistachio-lemon.png',
    name: 'Pistachio Lemon',
    description: 'Pistachio with a bit of tart!',
    allergies: 'Dairy, Gluten, Pistachios',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'cinnamon.crunch.png',
    name: 'Cinnamon Crunch',
    description: 'The taste you can see...but more importantly, taste',
    allergies: 'Dairy, Gluten, Cinnamon',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'michigan_apple_fritter.png',
    name: 'Michigan Apple Fritter',
    description: 'Taste the midwest majesty: apples & fritters',
    allergies: 'Dairy, Gluten, Apple',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'cinnamon_old_fashioned.png',
    name: 'Cinnamon Old Fashioned',
    description: 'Heart in a blender, watch it spin round into a beautiful cinnaBOMB',
    allergies: 'Dairy, Gluten, Cinnamon',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'blueberry_crumb.png',
    name: 'Blueberry Crumb',
    description: 'Donut crumble, take a stumble and be humble around this donut',
    allergies: 'Dairy, Gluten, Blueberries',
    link: 'http://doritedonuts.com/ '
  }, {
    img: 'vanilla.bean.png',
    name: 'Vanilla Bean',
    description: 'Vintage, classic and cool: Vanilla beans',
    allergies: 'Dairy, Gluten, Vanilla',
    link: 'http://doritedonuts.com/ '
  }]
var row = document.getElementById("row")
var col;
var img;
var h1;
var p1;
var p2;
var a;
var card;
var cardBody;

var keyArr = []
for (var j = 0; j < donutCards.length; j++) {
  col = document.createElement("div")
  col.className = "col-lg-3"
  card = document.createElement("div")
  card.className = "card"
  img = document.createElement("img")
  img.src = donutCards[j].img
  img.className = "image-fluid"
  cardBody = document.createElement("div")
  cardBody.className = "card-body text-center"
  h1 = document.createElement("h1")
  h1.innerText = donutCards[j].name
  p1 = document.createElement("p")
  p1.innerText = donutCards[j].description
  p2 = document.createElement("p")
  p2.innerText = donutCards[j].allergies
  a = document.createElement("a")
  a.className = "btn btn-primary"
  a.href = donutCards[j].link
  a.innerHTML = "Add to Order..."

  card.append(img)
  card.append(cardBody)
  cardBody.append(h1)
  cardBody.append(p1)
  cardBody.append(p2)
  cardBody.append(a)
  col.append(card)
  row.append(col)

}
