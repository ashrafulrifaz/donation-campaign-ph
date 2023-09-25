const getDonationItem = () => {
   const getItem = localStorage.getItem('item')
   if(getItem){
      return JSON.parse(getItem)
   } else{
      return []
   }
}

const saveDonationItem = id => {
   const donationItem = getDonationItem()
   const isExist = donationItem.find(item => item === id)
   if(!isExist){
      donationItem.push(id)
      localStorage.setItem('item', JSON.stringify(donationItem))
   }
}

export {getDonationItem, saveDonationItem}