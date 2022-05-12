const hotels = {
  lakewood: {
    stars: 3,
    regular: {
      weekDay: 110,
      weekend: 90
    },
    reward: {
      weekDay: 80,
      weekend: 80
    }
  },
  bridgewood: {
    stars: 4,
    regular: {
      weekDay: 160,
      weekend: 60
    },
    reward: {
      weekDay: 110,
      weekend: 50
    }
  },
  ridgewood: {
    stars: 5,
    regular: {
      weekDay: 220,
      weekend: 150
    },
    reward: {
      weekDay: 100,
      weekend: 40
    }
  }
}

exports.hotels = hotels
