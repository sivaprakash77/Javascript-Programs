function count(a) {
    let hash = {};
    for (let i = 0; i < a.length; i++) {
      if (hash[a[i]] == undefined) {
        hash[a[i]] = 1;
      } else {
        hash[a[i]] += 1;
      }
    }
    return hash;
  }
  let a = "Java";
  console.log(a);
  console.log(count(a));