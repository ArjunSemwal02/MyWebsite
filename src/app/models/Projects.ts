export class Projects{
    id: number;
    imgUrl: string;
    title: string;
    url: string;
    sourceCode: string;

    constructor(id: number, imgUrl: string, title: string, url: string, sourceCode: string) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.title = title;
        this.url = url;
        this.sourceCode = sourceCode;  
    }
        
}