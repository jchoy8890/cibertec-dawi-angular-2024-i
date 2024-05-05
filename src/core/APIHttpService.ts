import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class APIHttpService {
    
    constructor(private http: HttpClient) { }

    getDocentes(): any {
        return this.http.get('http://localhost:9091/api/v2/docentes')
    }

}