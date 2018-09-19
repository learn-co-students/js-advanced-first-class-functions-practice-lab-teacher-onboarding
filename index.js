// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = (drivers, loc) => {
  drivers.forEach(driver => {
    if(driver.hometown === loc) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = (array) =>
array.slice().sort( (a, b) => {
  return a.revenue - b.revenue
})

const driversByName = (array) =>
array.slice().sort((a, b) => {
  return a.name > b.name
})

const totalRevenue = (drivers) =>
  drivers.reduce( (acc, curr) => acc + curr.revenue, 0)

const averageRevenue = (drivers) =>
  totalRevenue(drivers) / drivers.length
