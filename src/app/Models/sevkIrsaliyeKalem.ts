import { KabloUretim } from "./kabloUretim";

export interface SevkIrsaliyeKalem {
    sevkIrsaliyeId: number;
    kabloUretimId: number;
    miktar: number;
    fiyat: number;
    kabloUretim?: KabloUretim;
  }