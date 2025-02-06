function invertedMountain(n) {
    if (n < 1) {
      console.log("Please enter a positive number");
      return;
    }

    for (let i = n; i > 0; i--) {
      // For left mountain, stars come first, then spaces
      const stars = "*".repeat(i);
      const spaces = " ".repeat(n - i);
      console.log(stars + spaces);
    }
}

invertedMountain(4)