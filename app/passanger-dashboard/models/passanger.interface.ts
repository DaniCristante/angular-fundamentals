export interface Passanger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkedInDate: number | null; //asumimos que la api retorna null
    baggage: string;
}