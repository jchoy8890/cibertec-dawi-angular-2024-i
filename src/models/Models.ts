export class Docente {
    id: number = 0;
    name: string = '';
    lastName: string = '';
    email: string = '';

    constructor(id: number, name: string, lastName: string, email: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }
}

export class Curso {
    public id = 0;
    public name = "Juan";
    public edition = 2;
    public year = 2024;
    constructor(id: number, name: string, edition: number, year: number) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.edition = edition;
    }
}