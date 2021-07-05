class ChargeStation {
    constructor(location,superScooter){
        this.location = location;
        this.superScooter = superScooter;
        this.scooterList = [];

    }// method to add a scooter to the chargestation
    addScooter(scooter){
        this.scooterList.push(scooter)
    }

    // method to update pointB ChargeStation location
    addChargeStation(updatedLocation){
        this.location = updatedLocation
    }


    

    
}

module.exports = ChargeStation