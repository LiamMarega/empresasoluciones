// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-997924674954754-061509-fea5a8a3b0abfa35a03e25b7ad5043a1-490782989",
});


          
// Crea un objeto de preferencia
let preference = {
	items: [
	  {
		title: "Mi producto",
		unit_price: 1000,
		quantity: 3,
	  },
	],
  };
  
  mercadopago.preferences
	.create(preference)
	.then(function (response) {
	  // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
	  res.json({
		global: response.body.id,
	  });
	})
	.catch(function (error) {
	  console.log(error);
	});
  