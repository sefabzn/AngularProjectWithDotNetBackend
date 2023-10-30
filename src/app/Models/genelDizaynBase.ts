import { DamarDizaynBase } from "./damarDizaynBase";
import { IsEmriBase } from "./isEmriBase";

export interface GenelDizaynBase{

    id: number;
    kablo: string | null;
    tur: string | null;
    kesitCapi: number;
    orgu: number;
    orguTelYapisi: string | null;
    polyesterOlcusu: number;
    folyoTipi: string | null;
    folyoOlcusu: number;
    disKilif: string | null;
    disCap: number;
    back: number;
    ayna: number;
    kalip: string | null;
    core: string | null;
    hatve: number;
    tarih: string;
    damarSayisi: number;
    girilenDamarSayisi: number;
    zorlama: string | null;
    degistirilmeTarihi: string;
    degistiren: string | null;
    damarlar: DamarDizaynBase[] | null;
    isEmirleri: IsEmriBase[] | null;
}