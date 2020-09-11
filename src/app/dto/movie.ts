export class Movie {
    private _title: string;
    private _rating: number;
    private _genre: string[];
    private _posterUrl: string;

    public getTitle(): string {
        return this._title;
    }

    public setTitle(_title: string): void {
        this._title = _title;
    }

    public getRating(): number {
        return this._rating;
    }

    public setRating(_rating: number): void {
        this._rating = _rating;
    }

    public getGenre(): string[] {
        return this._genre;
    }

    public setGenre(_genre: string[]): void {
        this._genre = _genre;
    }

    public getGenreStr(): string {
        return this._genre.join();
    }

    public getPosterUrl(): string {
        return this._posterUrl;
    }

    public setPosterUrl(_posterUrl: string): void {
        this._posterUrl = _posterUrl;
    }


    
}
