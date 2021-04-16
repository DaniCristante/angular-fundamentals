export interface Child {
    name: string;
    age: number;
}

export interface Passanger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkedInDate: number | null; //asumimos que la api retorna null
    children: Child[] | null; //podríamos hacer los parametros opcionales con ?
}