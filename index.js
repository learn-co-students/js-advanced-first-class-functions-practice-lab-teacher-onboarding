// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach((i) => console.log(i.name));
}

const logDriversByHometown = (drivers, location) => {
  drivers.forEach((i) => {
    if (i.hometown === location) {
        console.log(i.name)
      }
  })
}

const driversByRevenue = (drivers) => {
  return drivers.slice().sort((a,b) => a.revenue - b.revenue)
}

const driversByName = (drivers) => {
  return drivers.slice().sort((a,b) => a.name.localeCompare(b.name))
}
//
const totalRevenue = (drivers) => {
  let res = drivers.map((a) => a.name);
  res.reduce((ac, cv) => ac + cv)
  // OR
  return Object.keys(drivers).reduce((ac, key) => ac + drivers[key].revenue, 0)
}
const averageRevenue = (drivers) => {
  return totalRevenue(drivers) / drivers.length;
}
