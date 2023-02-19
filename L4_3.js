const answr = prompt("Please put the number of hours you want us to calculate!");
if (answr) {
  const num = Number.parseFloat(answr);
  const result = num * 3600;
  alert(`You got ${result} seconds in ${answr} hours`);

} else {
  alert("You haven't put anything!")
}




