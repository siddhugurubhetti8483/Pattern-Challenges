function Q1(n) {
  for (let r = 0; r < n; r++) {
    let temp = "";
    for (let c = 0; c < n; c++) {
      temp += "*";
    }
    console.log(temp);
  }
}
// Q1(5);

function Q2(n) {
  for (let r = 0; r < n; r++) {
    let temp = "";
    for (let c = 0; c < n - r; c++) {
      temp += "*";
    }
    console.log(temp);
  }
}
// Q2(5);

function Q3(n) {
  for (let r = 1; r <= n; r++) {
    let temp = "";
    for (let c = 0; c < r; c++) {
      temp += "*";
    }
    console.log(temp);
  }
}
// Q3(5);

function Q4(n) {
  for (let r = 1; r <= n; r++) {
    let temp = "";
    for (let c = 0; c < r; c++) {
      temp += "*";
    }
    console.log(temp);
  }
  for (let r = 0; r < n; r++) {
    let temp = "";
    for (let c = 1; c < n - r; c++) {
      temp += "*";
    }
    console.log(temp);
  }
}
// Q4(5);

function Q5(n) {
  for (let r = 0; r < n; r++) {
    let temp = "";
    for (let c = 0; c < n - r; c++) {
      temp += "*";
    }
    console.log(temp);
  }
  for (let r = 1; r < n; r++) {
    let temp = "";
    for (let c = 0; c < r + 1; c++) {
      temp += "*";
    }
    console.log(temp);
  }
}
// Q5(5);

function Q6(n) {
  //! ----------     Sol-1     ----------
  for (let r = 1; r <= n; r++) {
    let temp = "";
    for (let c = 1; c <= n - r; c++) {
      temp += " ";
    }
    for (let c = 1; c <= r; c++) {
      temp += "*";
    }
    console.log(temp);
  }

  //! ----------     Sol-2     ----------
  for (let r = 1; r <= n; r++) {
    let temp = "";
    for (let c = 1; c <= n; c++) {
      if (c <= n - r) {
        temp += " ";
      } else {
        temp += "*";
      }
    }
    console.log(temp);
  }
}
// Q6(5);

function Q7(n) {
  //! ----------     Sol-1     ----------
  for (let r = 0; r < n; r++) {
    let temp = "";

    for (let c = 0; c <= r; c++) {
      temp += " ";
    }
    for (let c = 0; c < n - r; c++) {
      temp += "*";
    }
    console.log(temp);
  }

  //! ----------     Sol-2     ----------
  //   for (let r = 1; r <= n; r++) {
  //     let temp = "";
  //     for (let c = 1; c <= n; c++) {
  //       if (c > n - r) {
  //         temp += "@";
  //       } else {
  //         temp += "*";
  //       }
  //     }
  //     console.log(temp);
  //   }
}
// Q7(5);

function Q8(n) {
  for (let r = 0; r < n; r++) {
    let temp = "";

    for (let c = 0; c <= r; c++) {
      temp += " ";
    }
    for (let c = 0; c < n - r; c++) {
      temp += "* ";
    }
    console.log(temp);
  }
}
// Q8(5);

function Q9(n) {
  for (let r = 1; r <= n; r++) {
    let temp = "";
    for (let c = 1; c <= n; c++) {
      if (c <= n - r) {
        temp += " ";
      } else {
        temp += "*";
      }
    }
    console.log(temp);
  }
  for (let r = 0; r < n - 1; r++) {
    let temp = "";

    for (let c = 0; c <= r; c++) {
      temp += " ";
    }
    for (let c = 1; c < n - r; c++) {
      temp += "*";
    }
    console.log(temp);
  }
}
// Q9(5);

function Q10(n) {
  //! ----------     Sol-1     ----------
  for (let r = 1; r <= n; r++) {
    let temp = "";
    for (let c = 1; c <= n - r; c++) {
      temp += " ";
    }
    for (let c = 1; c <= r; c++) {
      temp += "* ";
    }
    console.log(temp);
  }

  //! ----------     Sol-2     ----------
  for (let r = 1; r <= n; r++) {
    let temp = "";
    for (let c = 1; c <= n; c++) {
      if (c <= n - r) {
        temp += " ";
      } else {
        temp += "* ";
      }
    }
    console.log(temp);
  }
}
// Q10(5);
