import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Docente } from "../models/Models";

@Injectable({
    providedIn: 'root'
})
export class APIHttpService {
    
    constructor(private http: HttpClient) { }

    getDocentes(): Observable<any> {
        return this.http.get('http://localhost:9091/api/v2/docentes')
    }

    saveDocente(docente: Docente): Observable<any> {
        return this.http.post('http://localhost:9091/api/v2/docente', docente)
    }

}