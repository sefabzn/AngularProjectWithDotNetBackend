import { Process } from "./process";
import { GenelDizaynBase } from "./genelDizaynBase";
import { KabloUretim } from "./kabloUretim";

export interface IsEmriBase {
    id: number;
    isim: string | null;
    tur: string | null;
    metraj: number;
    tamamlanmaDurumu: boolean;
    barkod: string | null;
    surecler: Process[] | null;
    makineIsmi: string | null;
    tarih: string;
    degistiren: string | null;
    genelDizaynId: number;
    genelDizayn: GenelDizaynBase | null;
    kabloUretimler: KabloUretim[] | null;
}