const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]


function drawPackages(packages) {
  let displayBox = document.getElementById('display')
  let template = ''

  for (let package of packages) {

    template += `
  <div class=" col-md-5 display-card " >
    <div class="text-success">TO:</div> 
    <div>${package.to}</div>
  </div>
  <div class=" col-md-5 display-card">
    <div class="text-success">ID:</div> 
    <div>${package.trackingNumber}</div>
  </div>
    `
  }

  // @ts-ignore
  displayBox.innerHTML = template
}



function drawHeavyPackages() {
  let heavyPackages = packages.filter(package => package.weight > 4)
  console.log(heavyPackages)

  drawPackages(heavyPackages)

}
function drawFragilePackages() {
  let fragilePackages = packages.filter(package => package.isFragile == true)
  console.log(fragilePackages)

  drawPackages(fragilePackages)

}
function drawPriorityPackages(priority) {
  let priorityPackages = packages.filter(package => package.priorityLevel == priority)
  console.log(priorityPackages)

  drawPackages(priorityPackages)

}

drawPackages(packages)