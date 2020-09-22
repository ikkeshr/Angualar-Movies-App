export class Movie {

    private _id: number;
    private _title: string;
    private _rating: number;
    private _genre: string[];
    private _posterUrl: string;

    // constructor(
    //     title: string,
    //     rating: number,
    //     genre: string[],
    //     posterUrl: string
    // ) {
    //     this._title = title;
    //     this._rating = rating;
    //     this._genre = genre;
    //     this._posterUrl = posterUrl;
    // }

    public getId(): number {
        return this._id;
    }
    
    public setId(value: number) {
        this._id = value;
    }

    public getTitle(): string {
        return this._title;
    }

    public setTitle(title: string): void {
        this._title = title;
    }

    public getRating(): number {
        return this._rating;
    }

    public setRating(rating: number): void {
        this._rating = rating;
    }

    public getGenre(): string[] {
        return this._genre;
    }

    public setGenre(genre: string[]): void {
        this._genre = genre;
    }

    public getGenreStr(): string {
        if (this._genre) {
            return this._genre.join();
        } else {
            return null;
        }
    }

    public getPosterUrl(): string {
        return this._posterUrl;
    }

    public setPosterUrl(posterUrl: string): void {
        this._posterUrl = posterUrl;
    }


    
}
