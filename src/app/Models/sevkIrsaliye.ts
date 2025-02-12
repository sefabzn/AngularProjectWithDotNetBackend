import { Musteri } from "./musterı";
import { SevkIrsaliyeKalem } from "./sevkIrsaliyeKalem";

export interface SevkIrsaliye {
    id: number;
    musteriId: number;
    tarih: Date;
    toplamTutar: number;
    musteri?: Musteri;
    kalemler?: SevkIrsaliyeKalem[];
  }