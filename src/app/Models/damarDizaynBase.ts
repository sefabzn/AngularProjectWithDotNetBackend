import { GenelDizaynBase } from "./genelDizaynBase";

export interface DamarDizaynBase {
    id: number;
    damarNo: number;
    renk: string | null;
    kesitCapi: number;
    etk: number;
    cap: number;
    back: number;
    ayna: number;
    kalip: string | null;
    imalat: string | null;
    hatve: number;
    genelDizaynId: number;
    genelDizayn: GenelDizaynBase | null;
}