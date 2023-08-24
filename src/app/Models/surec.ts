import { OperatorIsEmri } from "./operatorIsEmri"

export interface Surec{

    id:number
    isim:string
    aciklama:string
    isEmriId:number
    operatorIsEmri:OperatorIsEmri
    tamamlanmaDurumu:boolean
}