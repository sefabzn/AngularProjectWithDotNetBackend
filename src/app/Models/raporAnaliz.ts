export interface RaporAnalizDto {
    makineIsmi: string | null;
    baslangicTarihi: string;
    bitisTarihi: string;
    secilenGun: number;
    calisilanGun: number;
    ortalamaAriza: number;
    ortalamaRenkDegisimKaybi: number;
    ortalamaKesitDegisimKaybi: number;
    ortalamaKopmaKaybi: number;
    ortalamaIsinma: number;
    toplamMetraj: number;
    verimliGun: number;
    verimsizGun: number;
    ortalamaVerimlilik: number;
    toplamPvc: number;
    toplamCu: number;
    hurdaPvc: number;
    hurdaCu: number;
}