export class Movie {
    private _title: string;
    private _rating: number;
    private _genre: string[];
    private _posterUrl: string;

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
        return this._genre.join();
    }

    public getPosterUrl(): string {
        return this._posterUrl;
    }

    public setPosterUrl(posterUrl: string): void {
        this._posterUrl = posterUrl;
    }


    
}
