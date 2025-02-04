import { IsEmriModel } from "./isEmri";

export interface Process {
    id: number;
    isim: string | null;
    aciklama: string | null;
    order: number;
    isEmriId: number;
    isEmri: IsEmriModel | null;
    tamamlanmaDurumu: boolean;
}