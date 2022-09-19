export class Contact {
  firstName:string
  lastName : string
  address : string
  mobileNo : number
  emailId : string
  state : string
  city : string
  zipNo : number
  isUpdated : Boolean = false
  constructor(address:string ,firstName:string,lastName : string,mobileNo : number,emailId : string,state : string,city : string,zipNo : number){
      this.firstName = firstName
      this.lastName = lastName
      this.mobileNo =  mobileNo
      this.emailId  =  emailId
      this.state  =  state
      this.city  =  city
      this.zipNo  =  zipNo
      this.address = address
   }
}
