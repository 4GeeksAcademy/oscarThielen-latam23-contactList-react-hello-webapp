const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: async () => {
				try{
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/oscar-agenda");
					if(response.status !== 200){
						console.log("Ha ocurrido un error", error)
						return
					}
					const body = await response.json();
					console.log(body);
					return body;
				}catch(error){
					console.log(error);
				}
			}
		}
	};
};

export default getState;
