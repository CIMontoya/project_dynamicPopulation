var donutCards = [
  {
    img: 'buttermilk.old.fashioned.png',
    name:  'Buttermilk Old Fashined',
    description: 'Good ye old donut - For the taste buds of the old fashioned mouth',
    allergies: 'Dairy, Gluten',
    link:'http://doritedonuts.com/'
  },
  {
    img: 'candied_maple_bacon.png',
    name:  'Candied Maple Bacon',
    description: 'Daring, adventure and bacon',
    allergies: 'Dairy, Gluten, bacon(non-V) ',
    link:'http://doritedonuts.com/'
  },{
    img: 'cheese_danish.png',
    name:  'Cheese Danish',
    description: 'Donut be so cheesy, let the danish do the talking',
    allergies: 'Dairy, Gluten ',
    link:'http://doritedonuts.com/ '
  },{
    img: 'choco.cake.png',
    name:  'Chocolate Cake',
    description: 'Peice a cake...in a donut. Enough Said',
    allergies: 'Dairy, GlutenDairy, Gluten ',
    link:'http://doritedonuts.com/ '
  },{
    img: 'choco.glazed.png',
    name:  'Chocolate Glazed',
    description: 'Chocolate donut...but covered in chocolate',
    allergies: 'Dairy, Gluten ',
    link:'http://doritedonuts.com/ '
  },{
    img: 'old.fashioned.choco.png',
    name:  'Old Fashioned Chocolate',
    description: 'Classic taste with a chocolate glaze',
    allergies: 'Dairy, Gluten ',
    link:'http://doritedonuts.com/ '
  },{
    img: 'pistachio-lemon.png',
    name:  'Pistachio Lemon',
    description: 'Pistachio with a bit of tart!',
    allergies: 'Dairy, Gluten, Pistachios',
    link:'http://doritedonuts.com/ '
  },{
    img: 'cinnamon.crunch.png',
    name:  'Cinnamon Crunch',
    description: 'The taste you can see...but more importantly, taste',
    allergies: 'Dairy, Gluten, Cinnamon',
    link:'http://doritedonuts.com/ '
  },{
    img: 'michigan_apple_fritter.png',
    name:  'Michigan Apple Fritter',
    description: 'Taste the midwest majesty: apples & fritters',
    allergies: 'Dairy, Gluten, Apple',
    link:'http://doritedonuts.com/ '
  },{
    img: 'cinnamon_old_fashioned.png',
    name:  'Cinnamon Old Fashioned',
    description: 'Heart in a blender, watch it spin round into a beautiful cinnaBOMB',
    allergies: 'Dairy, Gluten, Cinnamon',
    link:'http://doritedonuts.com/ '
  },{
    img: 'blueberry_crumb.png',
    name:  'Blueberry Crumb',
    description: 'Donut crumble, take a stumble and be humble around this donut',
    allergies: 'Dairy, Gluten, Blueberries',
    link:'http://doritedonuts.com/ '
  },{
    img: 'vanilla.bean.png',
    name:  'Vanilla Bean',
    description: 'Vintage, classic and cool: Vanilla beans',
    allergies: 'Dairy, Gluten, Vanilla',
    link:'http://doritedonuts.com/ '
  }]
var tBody = document.querySelector("main")
 var tRow;
 var tData1;
 var tData2;
 var tData3;
 var tData4;
 var tData5;
 var tHead1;
 var tHead2;

 tRow = document.createElement("div")
 tRow.className = "row"
 tBody.append(tRow)
 var keyArr = []
  for(var j = 0; j < donutCards.length;j++) {
    tHead1 = document.createElement("div")
    tHead1.className = "card col-lg-2.5"
    tData1 = document.createElement("img")
    tData1.src = donutCards[j].img
    tHead2 = document.createElement("div")
    tHead2.className = "card-body"
    tData2 = document.createElement("h1")
    tData2.innerText = donutCards[j].name
    tData3 = document.createElement("p")
    tData3.innerText = donutCards[j].description
    tData4 = document.createElement("p")
    tData4.innerText = donutCards[j].allergies
    tData5 = document.createElement("a")
    tData5.className = "btn btn-primary"
    tData5.href = donutCards[j].link
    tData5.innerHTML = "Add to Order..."
    tRow.append(tHead1)
    tHead1.append(tData1)
    tHead1.append(tHead2)
    tHead2.append(tData2)
    tHead2.append(tData3)
    tHead2.append(tData4)
    tHead2.append(tData5)

  }
