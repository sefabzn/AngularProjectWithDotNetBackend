import { SevkIrsaliye } from "./sevkIrsaliye";
import { SevkIrsaliyeKalem } from "./sevkIrsaliyeKalem";

export interface SevkIrsaliyeCreateDto {
    deliveryNote: SevkIrsaliye;
    items: SevkIrsaliyeKalem[];
  }