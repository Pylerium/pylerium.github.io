// Pylerium Manager shop settings.
//   checkoutUrl : the Stripe Payment Link for the monthly subscription
//   manageUrl   : the Stripe customer portal login link (change card, see invoices, cancel)
// Both are written by PyleriumManager/vendor/stripe-setup.mjs. Until checkoutUrl is set, the page offers the free trial
// and says subscriptions open soon.
window.PM_SHOP = {
  checkoutUrl: 'https://buy.stripe.com/5kQ7sN91E0CHb8F0VzdAk01',
  manageUrl: 'https://billing.stripe.com/p/login/3cI9AV5Ps1GL1y5eMpdAk00',
  price: 'A$19.99',
  interval: 'month',
  plan: 'Pylerium Manager Pro',
  planNote: 'Billed monthly. Cancel any time. Prices include any applicable tax.',
  support: 'danqhu3@gmail.com'
};
