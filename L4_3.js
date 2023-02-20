const answr = parseFloat(prompt("Please put the number of hours you want us to calculate!"));

if (isNaN(answr)) {
  alert("Sorry we can't calculate that!")

} else {
  const result = answr * 3600;
  alert(`You got ${result} seconds in ${answr} hours`);
}




