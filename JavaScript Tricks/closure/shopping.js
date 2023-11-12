const account = (person) => {
  let balance = 50; //private state

  return () => {
    balance -= 10;
    if (balance > 0) console.log(`${person} has ${balance} balance`);
    else console.log(`${person} has zero balance`);
  };
};

const husbandGoesShopping = account("Husband"); //first closure got created
const wifeGoesShopping = account("Wife"); //second closure got created

wifeGoesShopping();
wifeGoesShopping();
wifeGoesShopping();
wifeGoesShopping();
husbandGoesShopping();
wifeGoesShopping();
