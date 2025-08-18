export class Projects{
    id: number;
    title: string;
    url: string;
    sourceCode: string;

    constructor(id: number, title: string, url: string, sourceCode: string) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.sourceCode = sourceCode;  
    }
        
}