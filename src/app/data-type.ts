import { NumberSymbol } from "@angular/common"

export interface SignUp{
    name:string,
    password:string,
    email:string
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name:string,
    price:Number,
    category:string,
    color:string,
    description:string,
    image:string,
    quantity: number,
    id:number
}