import { IsEmriBase } from "./isEmriBase";

export interface Process {
    id: number;
    isim: string | null;
    aciklama: string | null;
    order: number;
    isEmriId: number;
    isEmri: IsEmriBase | null;
    tamamlanmaDurumu: boolean;
}