window.Inventory = {
  educationData: [
    {
      id: "bEng",
      imgAddr: "../imgs/curtin.png",
      title: "Bachelor of Engineering",
      subTitle: "Software Engineering - Honours",
      school: "Curtin University"
    },
    {
      id: "bSci",
      imgAddr: "../imgs/curtin.png",
      title: "Bachelor of Science",
      subTitle: "Software Engineering",
      school: "Curtin University"
    },
    {
      id: "istqb",
      imgAddr: "../imgs/curtin.png",
      title: "Certified Tester",
      subTitle: "Foundation Level",
      school: "International Software Testing Qualification Board"
    },
    {
      id: "fCC",
      imgAddr: "fcc",
      title: "Certified something",
      subTitle: "Web Dev",
      school: "Free Code Camp"
    }
  ],

  allSizes: (function (small, large) {
    var sizes = []
    for (var i = small; i <= large; i++) {
      sizes.push(i)
      sizes.push(i + 0.5)
    }

    return sizes
  })(7, 12),

  allColors: ["red", "blue", "green", "purple", "brown"],

  byColor: {
    red: ["7", "7.5", "8", "8.5"],
    blue: ["7", "7.5", "8", "8.5"],
    brown: ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    purple: ["9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    green: ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"]
  }
}