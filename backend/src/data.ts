export const sample_foods: any[] = [
  {
  id:'1',
  name:'Piept de pui',
  price:24.00,
  portion:180,
  category:['pui'],
  favorite:true,
  stars:5.0,
  imageURL:'assets/grilled-chicken.jpg',
  ingredients:'piept de pui, usturoi, sare, piper, paprika, lamaie'
},
{
  id:'2',
  name:'Carnaciori',
  price:24.00,
  portion:180,
  category:['porc', 'vita'],
  favorite:false,
  stars:4.1,
  imageURL:'assets/grilled-sausage.jpg',
  ingredients:'cârnăciori, cartofi prăjiți, castraveciori murați, sos'
},
{
  id:'3',
  name:'Ceafa de porc',
  price:28.00,
  portion:180,
  category:['porc'],
  favorite:false,
  stars:4.5,
  imageURL:'assets/grilled-ceafa.jpg',
  ingredients:'ceafă de porc, sare, piper'
},
{
  id:'4',
  name:'Mici la gratar',
  price:27.20,
  portion:250,
  category:['porc', 'vita'],
  favorite:true,
  stars:5,
  imageURL:'assets/grilled-mici.JPG',
  ingredients:'5 mici la grătar, cartofi prăjiți, pâine, muștar'
},
{
  id:'5',
  name:'Pulpa de pui dezosata',
  price:22.50,
  portion:180,
  category:['pui'],
  favorite:true,
  stars:4.8,
  imageURL:'assets/grilled-pulpa.jpg',
  ingredients:'pulpă de pui dezosată, sare, piper'
},
{
  id:'6',
  name:'Bruschete cu somon',
  price:18.50,
  portion:200,
  category:['starters'],
  favorite:false,
  stars:5,
  imageURL:'assets/bruschete-cu-somon.jpg',
  ingredients:'bruschete, guacamole, somon fume, rosii cherry, rucola, ulei de trufe'
},
{
  id:'7',
  name:'Baby calamari',
  price:23.00,
  portion:220,
  category:['starters'],
  favorite:true,
  stars:5,
  imageURL:'assets/fried-baby-squid.jpg',
  ingredients:'baby calamari in crusta aurie, sos tartar, lamaie'
},
{
  id:'8',
  name:'Spaghetti carbonara',
  price:35.00,
  portion:350,
  category:['paste'],
  favorite:true,
  stars:4.9,
  imageURL:'assets/paste-carbonara.jpg',
  ingredients:'spaghetti, ou, pancetta, parmezan, sare, piper, ulei de trufe'
},
{
  id:'9',
  name:'Spaghetti bolognese',
  price:32.00,
  portion:350,
  category:['paste'],
  favorite:false,
  stars:4.8,
  imageURL:'assets/paste-bolognese.jpg',
  ingredients:'spaghetti, carne tocata de vita, sos de rosii, parmezan, sare piper, busuioc proaspat'
},
{
  id:'10',
  name:'Pizza Capriciosa',
  price:32.00,
  portion:750,
  category:['pizza'],
  favorite:false,
  stars:5,
  imageURL:'assets/pizza-capriciosa.jpg',
  ingredients:'blat subtire, sos de rosii, oregano, ciuperci, masline, prosciutto cotto, mozarella de bivolita'
},
{
  id:'11',
  name:'Tiramisu',
  price:19.00,
  portion:150,
  category:['desert'],
  favorite:true,
  stars:4,
  imageURL:'assets/tiramisu.jpg',
  ingredients:'piscoturi, crema Mascarpone, espresso, cacao, ciocolata'
},
{
  id:'12',
  name:'Limonada',
  price:16.00,
  portion:320,
  category:['bauturi'],
  favorite:false,
  stars:4.5,
  imageURL:'limonada.jpg',
  ingredients:'suc de lamaie, miere, menta, gheata'
}
]

export const sample_category:any[] = [
  { name: 'starters', count: 6 },
  { name: 'pui', count: 4 },
  { name: 'porc', count: 2 },
  { name: 'vita', count: 3 },
  { name: 'paste', count: 2 },
  { name: 'pizza', count: 1 },
  { name: 'desert', count: 1 },
  { name: 'bauturi', count: 1 },
]

export const sample_users: any[] = [
  {
    name: "Maria Popescu",
    email: "mariapopescu@gmail.com",
    password: "123456",
    address: "Str.Independentei, nr.5",
    isAdmin: true
  },
  {
    name: "Laurentiu Popescu",
    email: "laurentiupopescu@gmail.com",
    password: "123456",
    address: "Splai Bahlui, nr.12",
    isAdmin: false
  }
]