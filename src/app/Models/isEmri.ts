import { Process } from "./process";
import { GenelDizaynBase } from "./genelDizaynBase";
import { KabloUretim } from "./kabloUretim";
export interface IsEmriModel {
    id: number;
    isim: string;
    tur: string;
    metraj: number;
    tamamlanmaDurumu: boolean;
    makineId: number;
    tarih: string;
    degistiren: string;
    genelDizaynId: number;
    barkodString: string;
  }