// Pylerium Manager shop settings. This is the only file to edit when Paddle is ready.
//   paddleToken : Paddle → Developer tools → Authentication → Client-side tokens (starts with live_ or test_)
//   priceId     : Paddle → Catalog → Products → Pylerium Manager → the price (starts with pri_)
//   sandbox     : true while testing with a Paddle sandbox account
// Until both are filled in, the page offers the free trial and says licences are coming soon.
window.PM_SHOP = {
  paddleToken: '',
  priceId: '',
  sandbox: false,
  plan: 'Lifetime licence',
  planNote: 'Pay once. Includes every 1.x update.',
  support: 'danqhu3@gmail.com'
};
