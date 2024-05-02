export class Trip{
    constructor(id,idUser,type,origin,destination,startDate,endDate,price){
        this.id = id;
        this.idUser = idUser;
        this.type = type;
        this.origin = origin;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
    }
}