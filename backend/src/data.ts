export const sample_foods: any[] = [
  {
  id:'1',
  name:'Piept de pui',
  price:24,
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
  price:24,
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
  price:28,
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