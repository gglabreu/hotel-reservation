const hotelsData = require('./hotelData')
const hotels = hotelsData.hotels

function getCheapestHotel(input) {
  const priceHotel = () => {
    var weekend = 0
    var weekDay = 0

    function getIdentifyDayOfWeek() {
      if (input.includes('sat') || input.includes('sun')) {
        weekend++
      } else weekDay++
    }

    const cheapestHotel = (priceHotel1, priceHotel2, priceHotel3) => {
      if (priceHotel1 < priceHotel2 && priceHotel1 < priceHotel3) {
        return 'Lakewood'
      } else if (priceHotel2 < priceHotel1 && priceHotel2 < priceHotel3) {
        return 'Bridgewood'
      } else if (priceHotel3 < priceHotel1 && priceHotel3 < priceHotel2) {
        return 'Ridgewood'
      } else if (priceHotel1 === priceHotel2 && priceHotel1 === priceHotel3) {
        return 'Ridgewood'
      } else if (priceHotel1 === priceHotel2) {
        return 'Bridgewood'
      } else return 'Lakewood'
    }

    const valueHotel = (days, hotels) => {
      return days * hotels
    }

    function getPrices() {
      getIdentifyDayOfWeek()

      if (input.includes('Regular')) {
        const hotelLakewoodRegularWeekDay = valueHotel(
          weekDay,
          hotels.lakewood.regular.weekDay
        )
        const hotelLakewoodRegularWeekend = valueHotel(
          weekend,
          hotels.lakewood.regular.weekend
        )
        const resultLakewoodRegular =
          hotelLakewoodRegularWeekDay + hotelLakewoodRegularWeekend

        const hotelBridgewoodRegularWeekDay = valueHotel(
          weekDay,
          hotels.bridgewood.regular.weekDay
        )
        const hotelBridgewoodRegularWeekend = valueHotel(
          weekend,
          hotels.bridgewood.regular.weekend
        )
        const resultBridgewoodRegular =
          hotelBridgewoodRegularWeekDay + hotelBridgewoodRegularWeekend

        const hotelRidgewoodRegularWeekDay = valueHotel(
          weekDay,
          hotels.ridgewood.regular.weekDay
        )
        const hotelRidgewoodRegularWeekend = valueHotel(
          weekend,
          hotels.ridgewood.regular.weekend
        )
        const resultRidgewoodRegular =
          hotelRidgewoodRegularWeekDay + hotelRidgewoodRegularWeekend

        return cheapestHotel(
          resultLakewoodRegular,
          resultBridgewoodRegular,
          resultRidgewoodRegular
        )
      }
      const hotelLakewoodRewardWeekDay = valueHotel(
        weekDay,
        hotels.lakewood.reward.weekDay
      )
      const hotelLakewoodRewardWeekend = valueHotel(
        weekend,
        hotels.lakewood.reward.weekend
      )
      const resultLakewoodReward =
        hotelLakewoodRewardWeekDay + hotelLakewoodRewardWeekend

      const hotelBridgewoodRewardWeekDay = valueHotel(
        weekDay,
        hotels.bridgewood.reward.weekDay
      )
      const hotelBridgewoodRewardWeekend = valueHotel(
        weekend,
        hotels.bridgewood.reward.weekend
      )
      const resultBridgewoodReward =
        hotelBridgewoodRewardWeekDay + hotelBridgewoodRewardWeekend

      const hotelRidgewoodRewardWeekDay = valueHotel(
        weekDay,
        hotels.ridgewood.reward.weekDay
      )
      const hotelRidgewoodRewardWeekend = valueHotel(
        weekend,
        hotels.ridgewood.reward.weekend
      )
      const resultRidgewoodReward =
        hotelRidgewoodRewardWeekDay + hotelRidgewoodRewardWeekend

      return cheapestHotel(
        resultLakewoodReward,
        resultBridgewoodReward,
        resultRidgewoodReward
      )
    }
    return getPrices()
  }

  return priceHotel()
}

exports.getCheapestHotel = getCheapestHotel
